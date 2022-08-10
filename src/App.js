import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import "./App.css";
import { useState } from "react";
import Contact from "./components/Contact/Contact"


function App() {
  const [theme,setTheme] = useState('')
  const toggleStyle = () =>{
    setTheme(theme === '' ? 'light' : '')
  }

  return (
    <div className={`App ${theme}`}>
      <Navbar
      toggleStyle ={toggleStyle}
      theme={theme}/>
      <About 
      theme ={theme}/>
      <Education 
      theme={theme}/>
      <Skills/>
      <Project
      theme={theme}/>
      <Contact/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
