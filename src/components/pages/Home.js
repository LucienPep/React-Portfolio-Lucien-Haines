import React from 'react';
import '../../styles/Home.css';
import {  motion} from 'framer-motion'
import Avatar from '../../Assets/Photos/fish11.png'


function Home() {

  return (
    <section className="homeBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '120%', opacity: 0}}
            exit={{x: '-40%', opacity: 0, transition:{ duration: .5}}}
            transition={{ duration: 1}}>
            <h1>About Me</h1>
            <p>My Name is Lucien Haines, I am 23 years old and live in Adelaide, Australia.<br></br><br></br> currently working as an automotive mechanic at a business called <a href="https://minisport.com.au">Minisport</a> where I work repairing and rebuilding classic minis and other classic vehicles. Having worked there for four years I am looking to change career path and learn new skills. As of November 2022 I have enrolled in a Full Stack Flex programming bootcamp with the University of Adelaide as I am looking to further extend my knowledge of website design and development to begin my career in computer coding.</p>
            <img src={Avatar} alt='Avatar'></img>
        </motion.div>
    </section>
  );
}

export default Home;