import './App.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import VideoItem from './components/main/MainVideo.js';
import VideoList from './components/main/VideoList.js';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar/>
      </header>
      <main>
        <VideoItem/>
        <VideoList/>
      </main>
    </Fragment>
  );
}

export default App;
