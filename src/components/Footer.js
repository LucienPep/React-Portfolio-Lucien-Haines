import React from 'react';
import '../styles/Footer.css';
import {motion} from 'framer-motion'

function Footer() {
  return (
    <header className="footer">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2}}>
        <p>LUCIENPEP . MMXXIII</p>
      </motion.div>
      
    </header>
  );
}

export default Footer;
