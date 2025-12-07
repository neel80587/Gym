import React, { useState } from 'react';
import "./chest.css";

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    { id: 1, src: '/video/chest/1.mp4', title: 'Video 1' },
    { id: 2, src: '/video/chest/2.mp4', title: 'Video 2' },
    { id: 3, src: '/video/chest/3.mp4', title: 'Video 3' },
    { id: 4, src: '/video/chest/4.mp4', title: 'Video 4' },
    { id: 5, src: '/video/chest/5.mp4', title: 'Video 5' },
    { id: 6, src: '/video/chest/6.mp4', title: 'Video 6' },
    { id: 7, src: '/video/chest/7.mp4', title: 'Video 7' },
    { id: 8, src: '/video/chest/8.mp4', title: 'Video 8' },
    { id: 9, src: '/video/chest/9.mp4', title: 'Video 9' },
    { id: 10, src: '/video/chest/10.mp4', title: 'Video 10' },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-gallery">
      <h1>Video Gallery</h1>
      <div className="video-player">
        <video
          width="560"
          height="315"
          src={selectedVideo.src}
          controls
          loop
        />
        <h2>{selectedVideo.title}</h2>
      </div>
      <div className="video-thumbnails">
        {videos.map((video) => (
          <div key={video.id} className="video-thumbnail">
            <video
              width="100"
              height="50"
              src={video.src}
              onClick={() => handleVideoSelect(video)}
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;