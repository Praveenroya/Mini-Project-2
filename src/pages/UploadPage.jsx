import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', video);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await axios.post('/api/videos/upload', formData, config);
      alert('Video uploaded successfully!');
    } catch (err) {
      console.error(err);<input type="file" onChange={(e) => {
        console.log(e.target.files[0]); // Add this line
        setVideo(e.target.files[0]);
      }} accept="video/mp4" required />
      alert('Error uploading video');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Upload</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
          <input type="file" onChange={(e) => setVideo(e.target.files[0])} accept="video/mp4" required />
          <button type="submit">Upload Video</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;