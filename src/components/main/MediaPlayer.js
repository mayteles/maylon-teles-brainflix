import React, { Fragment } from 'react';

const MediaPlayer = ({ selectedVideo }) => {
    if (!selectedVideo) return null;

    return (
        <Fragment>
            <div className="video__item-media">
                <video controls width="430" height="242" poster={selectedVideo.image}>
                    <source src={selectedVideo.video} type="video/mp4" />
                    Your Browser does not support the video tag.
                </video>
            </div>
        </Fragment>
    );
};

export default MediaPlayer;
