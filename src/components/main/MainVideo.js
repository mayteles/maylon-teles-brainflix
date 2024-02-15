import React from 'react';
import videosData from '../../data/video-details.json';
import eye from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';
import commentLogo from '../../assets/Icons/add_comment.svg';
import profile from '../../assets/Images/Mohan-muruge.jpg';


const VideoItem = ({ selectedVideo}) => {
    if (!selectedVideo || !videosData || videosData.length === 0) return null;
    
    const video = selectedVideo;
    
    return (
        <section className="video__item">
            
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
                <h3>{video.comments.length} Comments</h3>
                <form action='/' className='comment__form'>
                    <div className='comment__form-content'>
                        <div className='comment__profile-wrapper'>
                            <img src={profile} alt='Profile' className='comment__profile'/>
                        </div>
                        <div className='comment__encasing'>
                            <h4 className='comment__heading'>JOIN THE CONVERSATION</h4>
                            <div className='comment__area'>
                                <textarea name="comment" className='comment__textarea'>
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
                    </div>
                </form>
                <hr className='hr'/>
                {video.comments.map((comment, index) => (
                     <div className='comment__block' key={index}>
                     <div className='comment__profile-wrapper'>
                         <div className='comment__profile'></div>
                     </div>
                     <div className='comment__content'>
                        <h4>{comment.name}</h4>
                        <p>{comment.comment}</p>
                        <hr className='hr'/>
                     </div>
                 </div>
                ))}
            </section>
        </section>
    );
};

export default VideoItem;
