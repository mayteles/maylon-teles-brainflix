import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoItem from './MainVideo.js';
import VideoList from './VideoList.js';
import MediaPlayer from './MediaPlayer.js';

const Home = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videosData, setVideosData] = useState([]);
  const [videoListData, setVideoListData] = useState([]);

  useEffect(() => {
    fetch('https://project-2-api.herokuapp.com/maylon-teles-brainflix-api/data/videos.json')
      .then(response => response.json())
      .then(data => setVideosData(data))
      .catch(error => console.error('Error fetching videos:', error));

    fetch('https://project-2-api.herokuapp.com/maylon-teles-brainflix-api/routes/video-details.json')
      .then(response => response.json())
      .then(data => setVideoListData(data))
      .catch(error => console.error('Error fetching video list:', error));
  }, []);

  useEffect(() => {
    if (id && videosData.length > 0) {
      const video = videosData.find(video => video.id === id);
      if (video) {
        setSelectedVideo(video);
      }
    }
  }, [id, videosData]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Fragment>
      <main>
        <MediaPlayer selectedVideo={selectedVideo}/>
        <div className='desktop'>
          {selectedVideo && <VideoItem selectedVideo={selectedVideo} />}
          <VideoList className='desktop__videolist' videos={videoListData}
            selectedVideo={selectedVideo}
            onVideoSelect={handleVideoSelect}/> 
        </div>
      </main>
    </Fragment>
  );
}

export default Home;