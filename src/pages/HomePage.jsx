// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get('/api/videos');
        setVideos(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/api/videos?search=${search}`);
      setVideos(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Video List</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search videos by title or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search <box-icon name='search-alt'></box-icon></button>
        
      </form>
      <div>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video._id}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <Link to={`/video/${video._id}`}>Watch Video</Link>
            </div>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
