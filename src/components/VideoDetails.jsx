import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoDetail = ({ match }) => {
  const [video, setVideo] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get('/api/videos/{id}');
      setVideo(response.data);
    };

    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.title}</h1>
      <video src={video.videoUrl} controls />
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetail;