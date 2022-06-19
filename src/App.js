import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Education />
      <Skills/>
      <Project/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
