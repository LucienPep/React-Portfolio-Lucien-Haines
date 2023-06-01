import React from 'react';
import '../styles/Footer.css';
import {motion} from 'framer-motion'

//Added footer with Links and Email Twitter and Linkin Links are blank as I don't have an account with either platform
function Footer() {
  return (
    <header className="footer">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2}}>
        <p className='tag'>LUCIENPEP . MMXXIII</p>
      </motion.div>
      
    </header>
  );
}

export default Footer;
