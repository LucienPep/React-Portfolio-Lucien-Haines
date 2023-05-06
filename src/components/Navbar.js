import React from 'react';
import '../styles/Navbar.css';
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <nav className="navbar">
      <motion.div className='line'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}></motion.div>
      <motion.div className='links'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}>
        
        <a className='home' href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/projects">PROJECTS</a>
        <a href="/contact">CONTACT</a>
      </motion.div>
    </nav>
  );
}

export default Navbar;