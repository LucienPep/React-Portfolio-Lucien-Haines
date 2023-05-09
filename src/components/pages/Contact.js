import React from 'react';
import '../../styles/Contact.css';
import {  motion} from 'framer-motion'


function Contact() {

  return (
    <section className="contactBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '500%', opacity: 0}}
            exit={{x: '-400%', opacity: 0}}
            transition={{ duration: 1}}>
            <h1>Contact Me</h1>
            <h2 className='inline email'>Email: Lucien</h2>
            <h2 className='atTwo inline'>@</h2>
            <h2 className='inline email'>adam.com.au</h2>
            <h2 className='email'>Link to <a href="https://github.com/LucienPep" target="_blank" rel="noreferrer">GitHub</a> Page</h2>
            <br></br>
        </motion.div>
    </section>
  );
}

export default Contact;