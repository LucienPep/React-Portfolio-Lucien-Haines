import React from 'react';
import '../styles/SideBar.css';
import sideBanner from '../Assets/Photos/Website.png'

function SideBar() {
  return (
    <header className="side">
      <img src={sideBanner} alt='Portfolio Banner'></img>
    </header>
  );
}

export default SideBar;