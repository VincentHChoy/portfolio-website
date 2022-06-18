import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Project from "./components/Projects/Project";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Education />
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
