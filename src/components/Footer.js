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
        <p className='tag'>Email: Lucien</p>
            <p className='atTwo'>@</p>
            <p className='tag '>adam.com.au </p>
            <p className='atThree'> - </p>
            <p className='tag'>Link to <a href="https://github.com/LucienPep" target="_blank" rel="noreferrer">GitHub</a> Page</p>
            <p className='atThree'> - </p>
            <p className='tag'><a href=" " target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className='atThree'> - </p>
            <p className='tag'><a href=" " target="_blank" rel="noreferrer">Twitter</a></p>
            <p className='atThree'> - </p>
        <p className='tag'>LUCIENPEP . MMXXIII</p>
      </motion.div>
      
    </header>
  );
}

export default Footer;
