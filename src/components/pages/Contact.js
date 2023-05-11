import React, { useState } from 'react';
import '../../styles/Contact.css';
import {  motion} from 'framer-motion'
//used package validator to check if email was true
import validator from 'validator'

//contact section is a basic form that has no back end functionality, all 3 boxes to be submitted must have content and emil must be valid 
function Contact() {
  // function to check if email is true and set a variable that will appear on screen when inputting to validate email
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