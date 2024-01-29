import React, { Fragment } from 'react';
import videoData from '../../data/videos.json';

const List = ({ onVideoSelect }) => {
  return (
    <section className="video-list">
        <h4>NEXT VIDEOS</h4>
        {videoData.map((video) => (
                <div key={video.id} onClick={() => onVideoSelect(video)}>
                    <video width="100" height="50" poster={video.image}>Your Browser does not support the video tag</video>
                    <section>
                        <h3>{video.title}</h3>
                        <a href='/'><span>{video.channel}</span></a>
                    </section>
                </div>
        ))}
    </section>
  );
};

export default List;
