import React from 'react';
import '../styles/HeaderBar.css';
import flower from '../Assets/Photos/Flower.png'

function HeaderBar() {
  return (
    <header className="header">
      <h1>LUCIEN HAINES</h1>
      <h2 className='at'>@</h2>
      <h2 className='handle'>LUCIENPEP</h2>
      <img src={flower} alt='flower'></img>
    </header>
  );
}

export default HeaderBar;
