import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Skills from "./components/Skills";



function App() {
  const[mode,setmode]=useState(true)
  function setTheme(){
    setmode((prev)=>!prev)
  }
  return (
    <>
    <Navbar mode={mode} theme={setTheme}/>
    <Profile mode={mode}/>
    <Skills mode={mode}/>
    <Portfolio mode={mode}/>
    <Contact mode={mode}/>
    <Footer mode={mode}/>
    </>
  );
}

export default App;
