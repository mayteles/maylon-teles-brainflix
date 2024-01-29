import React from 'react';
import videosData from '../../data/video-details.json';
import eye from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';
import commentLogo from '../../assets/Icons/add_comment.svg';


const VideoItem = ({ onVideoSelect }) => {

  const video = videosData[0];

  return (
    <section className="video-item" onClick={() => onVideoSelect(video)}>
        <video controls width="425" height="245" poster={video.image}>
            <source src={video.video}></source>
            Your Browser does not support the video tag.
        </video>
        <div className="video-details">
            <h3 className="video-title">{video.title}</h3>
            <hr/>
            <p className="video-info">
            <span className="video-channel">By {video.channel}</span> {' '}
            <span className="video-timestamp">
                {new Date(video.timestamp).toLocaleDateString()}
            </span>{' '}
            <div>
                <img src={eye} alt="Views"/>
                <span className="video-views">{video.views}</span> {' '}
            </div>
            <div>
                <img src={likes} alt="likes"/>
                <span className="video-likes">{video.likes}</span>
            </div>
            </p>
            <hr/>
            <p className="video-description">{video.description}</p>
        </div>
        {/* sub-comment section */}
        <section>
            <h3>3 Comments</h3>
            <form action='/'>
                <h4>JOIN THE CONVERSATION</h4>
                <textarea rows="7" cols="30" name="comment">
                    Add a new comment
                </textarea>
                <button type='button'>
                    <span><img src={commentLogo} alt='comment'/></span>
                    <span>COMMENT</span>
                </button>
            </form>
            <hr/>

            <h4>{video.comments[0].name}</h4>
            <p>{video.comments[0].comment}</p>
            <hr/>

            <h4>{video.comments[1].name}</h4>
            <p>{video.comments[1].comment}</p>
            <hr/>

            <h4>{video.comments[2].name}</h4>
            <p>{video.comments[2].comment}</p>
            <hr/>
        </section>
    </section>
  );
};

export default VideoItem;
