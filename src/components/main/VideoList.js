import React, { Fragment } from 'react';
import videoData from '../../data/videos.json';

const List = ({ onVideoSelect }) => {
  return (
    <section className="video">
      <h4 className='video__heading'>NEXT VIDEOS</h4>
      {videoData.map((video) => (
        <div className='video__wrapper' key={video.id} onClick={() => onVideoSelect(video)}>
          <div className='video__img-wrapper'>
            <video className='video__img' poster={video.image}>Your Browser does not support the video tag</video>
          </div>
          <section className='video__info'>
            <h3 className='video__info-heading'>{video.title}</h3>
            <a className='video_info-a' href='/'><span>{video.channel}</span></a>
          </section>
        </div>
      ))}
    </section>
  );
};

export default List;