import React from 'react';
import logo from '../../assets/Logo/BrainFlix-logo.svg' 
import profile from '../../assets/Images/Mohan-muruge.jpg'
import uploadLogo from '../../assets/Icons/upload.svg'

function NavBar() {
  return (
    <nav className='navBar'>
      <div>
        <img src={logo} alt='Logo'/>
      </div>
      <form>
        <input type="text" id="searchInput" name="searchInput" placeholder="Search"/>
      </form>
      <div>
        <img src={profile} alt='Profile'/>
      </div>
      <form>
        <button type='button'>
          <svg src={uploadLogo} alt='upload svg'/>
          UPLOAD
        </button>
      </form>
    </nav>
  );
}

export default NavBar;