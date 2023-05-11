import React from 'react';
import '../styles/Navbar.css';
import {motion} from 'framer-motion'
import {NavLink} from "react-router-dom"

//Navbar for main page uses react router to link to each page and an isActive styling is assigned to the link that is currently in use by using NavLink instead of Link
function Navbar() {
  return (
    <nav className="navbar">
      <motion.div className='line'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}></motion.div>
      <motion.div className='links'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}>
      
      <NavLink to="/"  className='pageLink' style={({ isActive }) => ({ 
                            color: isActive ? '#a4a169' : '#850700' })}>HOME</NavLink>
      <NavLink to="/skills" className='pageLink' style={({ isActive }) => ({ 
                            color: isActive ? '#a4a169' : '#850700' })}>RESUME</NavLink>
      <NavLink to="/projects" className='pageLink two' style={({ isActive }) => ({ 
                            color: isActive ? '#a4a169' : '#850700' })}>PORTFOLIO</NavLink>
      <NavLink to="/contact" className='pageLink two' style={({ isActive }) => ({ 
                            color: isActive ? '#a4a169' : '#850700' })}>CONTACT</NavLink>
      </motion.div>
    </nav>
  );
}

export default Navbar;