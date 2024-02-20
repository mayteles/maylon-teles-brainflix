import './App.scss';
import NavBar from './components/header/NavBar.js';
import UploadPage from './pages/Upload/Upload.js';
import Home from './components/main/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
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