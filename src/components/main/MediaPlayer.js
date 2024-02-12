import React, { Fragment } from 'react'
import videosData from '../../data/video-details.json';

const MediaPlayer = ({ onVideoSelect }) => {
    const video = videosData[0];

    return (
        <Fragment>
            <div className="video__item-media" >
                <video controls width="430" height="242" poster={video.image}>
                    <source src={video.video}></source>
                    Your Browser does not support the video tag.
                </video>
            </div>    
        </Fragment>
    )
}

export default MediaPlayer
