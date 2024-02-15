import './App.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import VideoItem from './components/main/MainVideo.js';
import VideoList from './components/main/VideoList.js';
import React, { useState } from 'react';
import MediaPlayer from './components/main/MediaPlayer.js';
import videosData from './data/video-details.json';
import videoListData from './data/videos.json';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Fragment>
      <header>
        <NavBar/>
      </header>
      <main>
        <MediaPlayer selectedVideo={selectedVideo}/>
        <div className='desktop'>
          <VideoItem selectedVideo={selectedVideo} />
          <VideoList className='desktop__videolist' videos={videoListData}
            selectedVideo={selectedVideo}
            onVideoSelect={handleVideoSelect}/> 
        </div>
      </main>
    </Fragment>
  );
}

export default App;
