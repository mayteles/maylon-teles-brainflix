import React from 'react';
import videosData from '../../data/video-details.json';
import eye from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';
import commentLogo from '../../assets/Icons/add_comment.svg';
import profile from '../../assets/Images/Mohan-muruge.jpg';


const VideoItem = ({ onVideoSelect }) => {

  const video = videosData[0];

  return (
    <section className="video__item" onClick={() => onVideoSelect(video)}>
        <video controls width="430" height="242" poster={video.image}>
            <source src={video.video}></source>
            Your Browser does not support the video tag.
        </video>
        <div className="video__item-details">
            <h3 className="video__item-title">{video.title}</h3>
            <hr className='hr'/>
            <p className="video__item-info">
                <div className='video__item-info-container'>
                    <span className="video__item-info-channel">By {video.channel}</span>
                </div>
                <div className='video__item-info-container'>
                    <img src={eye} alt="Views"/>
                    <span className="video__item-info-views">{video.views}</span>
                </div>
                <div className='video__item-info-container'>
                    <span className="video__item-info-timestamp">
                            {new Date(video.timestamp).toLocaleDateString()}
                    </span>
                </div>
                <div className='video__item-info-container'>
                    <img src={likes} alt="likes"/>
                    <span className="video__item-info-likes">{video.likes}</span>
                </div>
            </p>
            <hr className='hr'/>
            <p className="video__item-description">{video.description}</p>
        </div>
        {/* sub-comment section */}
        <section className='comment'>
            <h3>3 Comments</h3>
            <form action='/' className='comment__form'>
                <div className='comment__form-content'>
                    <div className='comment__profile-wrapper'>
                        <img src={profile} alt='Profile' className='comment__profile'/>
                    </div>
                    <div className='comment__area'>
                        <h4 className='comment__heading'>JOIN THE CONVERSATION</h4>
                        <textarea rows="7" cols="10" name="comment" className='comment__textarea'>
                            Add a new comment
                        </textarea>
                        <button type='button' className='comment__btn'>
                            <span className='comment__btn-imgwrapper'>
                                <img src={commentLogo} alt='comment'/>
                            </span>
                            <span className='comment__btn-text'>COMMENT</span>
                        </button>
                    </div>
                </div>
            </form>
            <hr className='hr'/>

            <h4>{video.comments[0].name}</h4>
            <p>{video.comments[0].comment}</p>
            <hr className='hr'/>

            <h4>{video.comments[1].name}</h4>
            <p>{video.comments[1].comment}</p>
            <hr className='hr'/>

            <h4>{video.comments[2].name}</h4>
            <p>{video.comments[2].comment}</p>
            <hr className='hr'/>
        </section>
    </section>
  );
};

export default VideoItem;
