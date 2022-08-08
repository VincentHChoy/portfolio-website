import './Navbar.css'
import Contact from './Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Navbar(props) {
  const [trigger,setTrigger] = useState(false)
  const contactHandler = () =>{
    setTrigger(trigger === true ? false : true)
  }

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
        <a onClick={contactHandler}>
          <h3>contact</h3>
        </a>
        <Contact trigger={trigger} />
        <button
          className={`theme-toggle ${props.theme}`}
          onClick={props.toggleStyle}
        >
          <FontAwesomeIcon icon={props.theme === "" ? faSun : faMoon} />
        </button>
      </div>
    </header>
  );
}

export default Navbar