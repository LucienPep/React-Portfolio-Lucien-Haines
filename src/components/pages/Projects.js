import React from 'react';
import '../../styles/Home.css';
import {  motion} from 'framer-motion'


function Projects() {

  return (
    <section className="homeBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '120%', opacity: 0}}
            exit={{x: '-120%', opacity: 0}}
            transition={{ duration: 1}}>
            <h1>About Me</h1>
        </motion.div>
    </section>
  );
}

export default Projects;