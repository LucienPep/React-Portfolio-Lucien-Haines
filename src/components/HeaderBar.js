import React from 'react';
import '../styles/HeaderBar.css';
import flower from '../Assets/Photos/Flower.png'
import important from '../Assets/Photos/Magnifique.jpg'
import {motion} from 'framer-motion'

function HeaderBar() {
  return (
    <header className="header">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}>
        <h1>LUCIEN HAINES</h1>
        <h2 className='at'>@</h2>
        <h2 className='handle'>LUCIENPEP</h2>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2}}>
        <a href={important}><img src={flower} alt='flower'></img></a>
      </motion.div>
    </header>
  );
}

export default HeaderBar;
