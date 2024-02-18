import React from 'react'

function Upload() {
  return (
    <section>
        <h1>Upload Video</h1>
        <h2>VIDEO THUMBNAIL</h2>
        <div>
            <video poster=''></video>
            <form>
                <label>TITLE YOUR VIDEO</label>
                <br/>
                <input placeholder='add a title to your video'/>
                <br/>
                <label>ADD A VIDEO DESCRIPTION</label>
                <br/>
                <input placeholder='add a description to your video'/>
                <br/>
                <button>PUBLISH</button>
                <br/>
                <button>CANCEL</button>
            </form>
        </div>
    </section>
  )
}

export default Upload
