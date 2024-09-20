const Video = require('../models/video');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');

// Create an S3 client instance
const s3 = new S3Client({
  region: process.env.AWS_REGION, // specify your region, e.g., 'us-east-1'
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Set up multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 100 * 1024 * 1024 } });

// Video upload function
exports.uploadVideo = async (req, res) => {
  const { title, description, tags } = req.body;
  const file = req.file;

  // Create the S3 upload parameters
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`, // File name with timestamp to avoid collisions
    Body: file.buffer, // Video content
    ContentType: 'video/mp4', // MIME type
  };

  try {
    // Upload video to S3
    const uploadResult = await s3.send(new PutObjectCommand(params));

    // Create new video document in MongoDB
    const video = new Video({
      title,
      description,
      tags: tags.split(','),
      videoUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`, // URL of the uploaded video
      user: req.user._id, // Assuming you have user data in req.user
    });

    await video.save();

    // Respond with the video details
    res.json(video);
  } catch (err) {
    console.error('S3 Upload Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Export the upload middleware
exports.upload = upload.single('video');
