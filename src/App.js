import './App.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import VideoItem from './components/main/MainVideo.js';
import VideoList from './components/main/VideoList.js';
import React, { useState } from 'react';

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
        <VideoItem/>
        <VideoList onVideoSelect={handleVideoSelect}> 
          {selectedVideo && <VideoItem video={selectedVideo} />}
        </VideoList>
      </main>
    </Fragment>
  );
}

export default App;
