import React, { Fragment } from 'react';

const VideoList = ({ videos, selectedVideo, onVideoSelect }) => {
  return (
    <section className="video">
      <h4 className='video__heading'>NEXT VIDEOS</h4>
      {videos.map((video) => (
        selectedVideo && selectedVideo.id !== video.id ? (
          <div className='video__wrapper' key={video.id} onClick={() => onVideoSelect(video)}>
            <div className='video__img-wrapper'>
              <video className='video__img' poster={video.image}>Your Browser does not support the video tag</video>
            </div>
            <section className='video__info'>
              <h3 className='video__info-heading'>{video.title}</h3>
              <a className='video_info-a' href='/'>
                <span>{video.channel}</span>
              </a>
            </section>
          </div>
        ) : null
      ))}
    </section>
  );
};

export default VideoList;