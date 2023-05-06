import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='line'></div>
      <div className='links'>
        <a className='home' href="/">HOME</a>
        <a href="/">ABOUT</a>
        <a href="/">PROJECTS</a>
        <a href="/">CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;