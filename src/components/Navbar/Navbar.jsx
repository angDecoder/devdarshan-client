import React from 'react';
import hamburger from '../../assets/hamburger.svg';
import { NavLink } from 'react-router-dom';
import cross from '../../assets/cross.svg';
import './Navbar.css';
// import { createLogger } from 'vite';

function Navbar() {

  const toggleNav = ()=>{
    // console.log('clicked');
    const nav = document.getElementById('nav');
    if( nav.classList.contains('nav-show') )
      nav.classList.replace('nav-show','nav-hide');
    else
      nav.classList.replace('nav-hide','nav-show');
    
  }

  return (
    <div id='Navbar'>
      <h1 id='logo'>DEV<br />DARSHAN</h1>
      <img src={hamburger} alt="ham" id='ham' className='svg-img' onClick={toggleNav} />
      <div id='nav' className='nav-hide'>
        <img src={cross} alt="close" className='svg-img' id='nav__close' onClick={toggleNav} />
        <NavLink className={'nav__link'}  to={'/'}>Home</NavLink>
        <NavLink className={'nav__link'}  to={'/'}>Contact Us</NavLink>
        <NavLink className={'nav__link'}  to={'/'}>Blog</NavLink>
        <NavLink  className={'nav__link'} to={'/'}>Temples</NavLink>
        <NavLink className={'nav__link'}  to={'/'}>Login/Register</NavLink>
      </div>
    </div>
  )
}

export default Navbar