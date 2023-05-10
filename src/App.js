import React from "react";
import HeaderBar from "./components/HeaderBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation();
  return (
    <div>
      <SideBar />
      <HeaderBar />
      <Navbar />
        <div>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </AnimatePresence>
         </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
