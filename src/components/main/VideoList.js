import React from 'react';

const VideoList = ({ videos, selectedVideo, onVideoSelect }) => {
  // Ensure that videos is initialized as an empty array if it's not provided or not an array
  videos = Array.isArray(videos) ? videos : [];

  return (
    <section className="video">
      <h4 className='video__heading'>NEXT VIDEOS</h4>
      {videos.map((video) => (
        <React.Fragment key={video.id}>
          {selectedVideo && selectedVideo.id !== video.id && (
            <div className='video__wrapper' onClick={() => onVideoSelect(video)}>
              <div className='video__img-wrapper'>
                <video className='video__img' poster={video.image} controls>
                  Your browser does not support the video tag
                </video>
              </div>
              <section className='video__info'>
                <h3 className='video__info-heading'>{video.title}</h3>
                <a href='/' className='video_info-a'>
                  <span>{video.channel}</span>
                </a>
              </section>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default VideoList;