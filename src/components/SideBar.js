import React from 'react';
import '../styles/SideBar.css';
import sideBanner from '../Assets/Photos/Website.png'
import {motion} from 'framer-motion'

//page bar to show the graphic that is used in full screen mode and keep it on top of all other pages
function SideBar() {
  return (
    <header className="side">
      <div className='hideBox'></div>
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