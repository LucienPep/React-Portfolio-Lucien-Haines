import React from 'react';
import '../../styles/Skills.css';
import { motion } from 'framer-motion'

//Skills section and Resume are all linked on this page, I chose to use <p> as I was running out of time and this served my purposes correctly. Resume link doesn't go anywhere as I am disinclined to link my resume to a public domain.
function Skills() {

  return (
    <section className="skillsBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '150%', opacity: 0}}
            exit={{x: '-100%', opacity: 0, transition:{ duration: .5}}}
            transition={{ duration: 1}}>
            <h1>Skills and Technologies</h1>
            <h2>I am experienced in the following</h2>
            <h3>Languages:</h3>
            <p className='list'>JavaScript</p><div className='dash'>-</div>
            <p className='list'>HTML</p><div className='dash'>-</div>
            <p className='list'>CSS</p><div className='dash'>-</div>
            <p className='list'>Python</p>
            <h3>Frameworks:</h3>
            <p className='list'>React</p><div className='dash'>-</div>
            <p className='list'>NodeJS</p><div className='dash'>-</div>
            <p className='list'>ExpressJS</p><div className='dash'>-</div>
            <p className='list'>Bootstrap</p>
            <h3>Technologies:</h3>
            <p className='list'>JQuery</p><div className='dash'>-</div>
            <p className='list'>MySQL</p><div className='dash'>-</div>
            <p className='list'>MongoDB</p><div className='dash'>-</div>
            <p className='list'>Jest</p><div className='dash'>-</div>
            <p className='list'>Git</p><div className='dash'>-</div>
            <p className='list'>Heroku</p>
            <br></br>
            <br></br>
            <br></br>
        </motion.div>
    </section>
  );
}

export default Skills;