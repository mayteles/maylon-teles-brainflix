import React from 'react';
// images files
import logo from '../../assets/Logo/BrainFlix-logo.svg' ;
import profile from '../../assets/Images/Mohan-muruge.jpg';
import uploadLogo from '../../assets/Icons/upload.svg';
import searchLogo from '../../assets/Icons/search.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-div'>
        <img src={logo} alt='Logo' className='navbar__logo'/>
      </div>
      <form className="navbar__search-form">
          <img src={searchLogo}  className='navbar__search-form-img' width="16" height="16" alt="search icon"/>
          <input className="navbar__search-form-input" type="text" id="searchInput" name="searchInput" placeholder="Search"/>
      </form>
      <div>
        <img src={profile} alt='Profile' className='navbar__profile-img'/>
      </div>
      <form className='navbar__btn-wrapper'>
        <button className='navbar__btn' type='button'>
          <span className='navbar__btn-icon'><img src={uploadLogo} alt='upload'/></span>
          <span className='navbar__btn-text'>UPLOAD</span>
        </button>
      </form>
    </nav>
  );
}

export default NavBar;