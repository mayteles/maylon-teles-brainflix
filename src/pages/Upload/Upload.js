import React from 'react';

// image for video post
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';

function Upload() {
  return (
    <section className='upload'>
        <h1 className='upload__heading'>Upload Video</h1>
        <h2 className='upload__heading2'>VIDEO THUMBNAIL</h2>
        <div className='upload__thumbnail'>
            <video className='upload__thumbnail-video' poster={thumbnail}></video>
            <form className='upload__form'>
                <label className='upload__form-subtitle'>TITLE YOUR VIDEO</label>
                <br/>
                <input className='upload__form-input' placeholder='add a title to your video'/>
                <br/>
                <label className='upload__form-subtitle'>ADD A VIDEO DESCRIPTION</label>
                <br/>
                <input className='upload__form-input upload__form-input--large' placeholder='add a description to your video'/>
                <br/>
                <div className='upload__form-btns-container'>
                  <button className='upload__form-btn'>PUBLISH</button>
                  <br/>
                  <button className='upload__form-cancel'>CANCEL</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Upload
