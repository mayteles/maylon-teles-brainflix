import './App.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import VideoItem from './components/main/MainVideo.js';
import VideoList from './components/main/VideoList.js';
import React, { useState } from 'react';
import MediaPlayer from './components/main/MediaPlayer.js';

const App = () => {

const [selectedVideo, setSelectedVideo] = useState(null);

const handleVideoSelect = (video) => {
  setSelectedVideo(video);
};

  return (
    <Fragment>
      <header>
        <NavBar/>
      </header>
      <main>
        <MediaPlayer/>
        <div className='desktop'>
          <VideoItem/>
          <VideoList className='desktop__videolist' onVideoSelect={handleVideoSelect}> 
            {selectedVideo && <VideoItem video={selectedVideo} />}
          </VideoList>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
