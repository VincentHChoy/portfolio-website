import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <header className="navbar">
      <h1 className="name"> VC.</h1>
      <div className="nav-menu">
        <a href="#projects">
          <h3>projects</h3>
        </a>
        <a href="#skills">
          <h3>skills</h3>
        </a>
        <a href="#contact">
          <h3>contact</h3>
        </a>
        <button className={`theme-toggle ${props.theme}`}
        onClick={props.toggleStyle}>
          <FontAwesomeIcon icon={props.theme === '' ? faSun : faMoon}/>
        </button>
      </div>
    </header>
  );
}

export default Navbar