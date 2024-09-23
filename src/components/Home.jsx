import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get('/api/videos');
      setVideos(response.data);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {videos.map(video => (
          <li key={video._id}>
            <a href={'/video/${video._id}'}>{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;