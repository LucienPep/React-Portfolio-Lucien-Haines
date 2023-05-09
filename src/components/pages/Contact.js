import React from 'react';
import '../../styles/Contact.css';
import {  motion} from 'framer-motion'


function Contact() {

  return (
    <section className="contactBox">
        <motion.div
            animate={{ x: '-0%', opacity: 100}}
            initial={{ x: '500%', opacity: 0}}
            exit={{x: '-200%', opacity: 0, transition:{ duration: .5}}}
            transition={{ duration: 1}}>
            <h1>Contact Me</h1>
            <form>
              <label>Enter your name:<br></br>
                <input type="text" />
              </label>
              <br></br>
              <label>Enter your email:<br></br>
                <input type="text" />
              </label>
              <br></br>
              <label>Enter your messsage:<br></br>
                <input type="text" />
              </label>
              <br></br>
              <input type="submit" />
            </form>
        </motion.div>
    </section>
  );
}

export default Contact;