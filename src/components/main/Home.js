import React, { Fragment, useState } from 'react';
import VideoItem from './MainVideo.js';
import VideoList from './VideoList.js';
import MediaPlayer from './MediaPlayer.js';
import videosData from '../../data/video-details.json';
import videoListData from '../../data/videos.json';

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Fragment>
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

export default Home;