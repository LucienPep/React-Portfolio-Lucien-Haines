import React from "react";
import HeaderBar from "./components/HeaderBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div>
      <SideBar />
      <HeaderBar />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
