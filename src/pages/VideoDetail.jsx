import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoDetail = () => {
  const { videoId } = useParams(); // Destructure the params

  const [video, setVideo] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const {data} = await axios.get(`/api/videos`);
        setVideo(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    if (videoId) {
      fetchVideo();
    }
  }, [videoId]);

  if (!video) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <video controls src={video.videoUrl} />
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetail;
