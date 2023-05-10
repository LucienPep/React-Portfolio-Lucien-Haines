import React, { useState } from 'react';
import '../../styles/Contact.css';
import {  motion} from 'framer-motion'
import validator from 'validator'


function Contact() {
  
  const [use, set] = useState('')
  const validateEmail = (input) => {
    var email = input.target.value
  
    if (!validator.isEmail(email)) {
      set('Invalid Email')
    } else {
      set('')
    }
  }

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
                <input type="text" required/>
              </label>
              <br></br>
              <label>Enter your email:<br></br>
                <input type="text" onInput={(input) => validateEmail(input)} required></input>  
                  <span>{use}</span>            
                </label>
              <br></br>
              <label>Enter your message:<br></br>
                <input type="text" required></input>  
              </label>
              <br></br>
              <input type="submit" />
            </form>
        </motion.div>
    </section>
  );
}

export default Contact;