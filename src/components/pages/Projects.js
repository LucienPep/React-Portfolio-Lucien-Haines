import React from 'react';
import '../../styles/Project.css';
import {  motion} from 'framer-motion'

//Import all the photos for each project
import project1 from '../../Assets/Photos/Project1.png'
import project2 from '../../Assets/Photos/Project2.jpg'
import assignment13 from '../../Assets/Photos/Screenshot13.png'
import assignment19 from '../../Assets/Photos/Screenshot19.png'
import assignment18 from '../../Assets/Photos/Screenshot18.png'
import assignment14 from '../../Assets/Photos/Screenshot14.png'

//Show cases 2 projects and 4 assignments with photo and links if applicable to deployed and git hub repository
function Projects() {

  return (
    <section className="projectBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '50%', opacity: 0}}
            exit={{x: '-40%', opacity: 0, transition:{ duration: .5}}}
            transition={{ duration: 1}}>
            <article id="work">
      <div class="box">
        <img src={project2} alt="Mechanomicon Work page link"></img>
          <div class="container">
            <h3>Mechanomicon</h3>
            <a href="https://mechanomicon.herokuapp.com/" target="_blank" rel="noreferrer">Deployed</a>
            <br></br>
            <br></br>
            <a href=" https://github.com/LucienPep/Mechanomicon" target="_blank" rel="noreferrer">Github</a>
          </div>
      </div>
      <div class="box">
        <img src={project1} alt="E-Commerce Back End page link"></img>
        <div class="container">
          <h3>FlightDex</h3>
          <a href="https://craigrobertsdev.github.io/flightdex/ " target="_blank" rel="noreferrer">Deployed</a>
            <br></br>
            <br></br>
            <a href="https://github.com/LucienPep/flightdex " target="_blank" rel="noreferrer">Github</a>
      </div>
      </div>
      <div class="box" >
        <img src={assignment13} alt="Company Employee Database page link"></img>
        <div class="container">
          <h3>E Commerce Store</h3>
            <a href="https://github.com/LucienPep/E-Commerce-Store-Back-End-Functionality " target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div class="box" >
        <img src={assignment14} alt="Online NotePad page link"></img>
        <div class="container">
        <h3>CMS Blog Page</h3>
        <a href="https://block-blog.herokuapp.com/ " target="_blank" rel="noreferrer">Deployed</a>
            <br></br>
            <br></br>
            <a href="https://github.com/LucienPep/CMS-Style-Blog-Page " target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div class="box">
        <img src={assignment18} alt="Command Line Team Profile Generator link page"></img>
        <div class="container">
        <h3>MDB Social Page</h3>
            <a href="https://github.com/LucienPep/MongoDB-Social-Network " target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div class="box">
        <img src={assignment19} alt="Command Line Team Profile Generator link page"></img>
        <div class="container">
        <h3>PWA Editor</h3>
        <a href="https://pwa-editor-1989.herokuapp.com/ " target="_blank" rel="noreferrer">Deployed</a>
            <br></br>
            <br></br>
            <a href="https://github.com/LucienPep/PWA-Text-and-Note-Editor " target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </article>
        </motion.div>
    </section>
  );
}

export default Projects;