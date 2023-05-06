import React from 'react';
import '../styles/SideBar.css';
import sideBanner from '../Assets/Photos/Website.png'
import {motion} from 'framer-motion'

function SideBar() {
  return (
    <header className="side">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2}}>
            <img src={sideBanner} alt='Portfolio Banner'></img>
        </motion.div>
    </header>
  );
}

export default SideBar;