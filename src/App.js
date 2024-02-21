import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// routes
import NavBar from './components/header/NavBar.js';
import UploadPage from './pages/Upload/Upload.js';
import Home from './components/main/Home.js';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://project-2-api.herokuapp.com/videos?api_key=<your_api_key_here>');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use the Home component for the home page */}
            <Route path="/upload" element={<UploadPage />} />
            <Route path='/video/:id' element={<Home/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;