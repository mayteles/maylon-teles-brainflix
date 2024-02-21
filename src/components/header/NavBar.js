import React from 'react';
import { Link } from 'react-router-dom';
// images files
import logo from '../../assets/Logo/BrainFlix-logo.svg' ;
import profile from '../../assets/Images/Mohan-muruge.jpg';
import searchLogo from '../../assets/Icons/search.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-div'>
        <Link to='/'><img src={logo} alt='Logo' className='navbar__logo'/></Link>      
      </div>
      <form className="navbar__search-form">
          <img src={searchLogo}  className='navbar__search-form-img' width="16" height="16" alt="search icon"/>
          <input className="navbar__search-form-input" type="text" id="searchInput" name="searchInput" placeholder="Search"/>
      </form>
      <div className='navbar__profile-wrapper'>
        <img src={profile} alt='Profile' className='navbar__profile-img'/>
      </div>
      <form className='navbar__btn-wrapper'>
        <Link to='/upload' className='navbar__btn-link'>
          <button className='navbar__btn' type='button'>UPLOAD</button>
        </Link>  
      </form>
    </nav>
  );
}

export default NavBar;