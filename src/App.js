import { useState,createContext } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export const ThemeContext = createContext();

function App() {
  const[mode,setmode]=useState(true)
  function setTheme(){
    setmode((prev)=>!prev)
  }
  return (
    <>
    <ThemeContext.Provider value={{mode,setTheme}}>
      <Navbar />
      <Profile />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
    </>
  );
}

export default App;
