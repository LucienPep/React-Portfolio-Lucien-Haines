import React from 'react';
import '../../styles/Contact.css';
import {  motion} from 'framer-motion'


function Resume() {

  return (
    <section className="contactBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '500%', opacity: 0}}
            exit={{x: '-150%', opacity: 0, transition:{ duration: .5}}}
            transition={{ duration: 1}}>
            <h1>Resume</h1>
            <h2 className='inline email'>Please download my resume <a href=" " target="_blank">here.</a></h2>
        </motion.div>
    </section>
  );
}

export default Resume;