const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const Video = require('../models/videoModel');

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Upload video
router.post('/upload', upload.single('video'), async (req, res) => {
  const { title, description } = req.body;
  const videoUrl = req.file.path;
  try {
    const video = new Video({ title, description, videoUrl });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Comment on a video
router.post('/:videoId/comments', async (req, res) => {
  const { videoId } = req.params;
  const { text, user } = req.body;
  try {
    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    video.comments.push({ text, user });
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;