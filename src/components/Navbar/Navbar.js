import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const scrollToSection = (section, e) => {
    let sectionId = document.getElementById(section);
    e.preventDefault();
    sectionId &&
      sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <h1 className="name"> VC.</h1>
      <div className="nav-menu">
        <a
          onClick={(e) => {
            scrollToSection("skills", e);
          }}
        >
          <h3>skills</h3>
        </a>
        <a
          onClick={(e) => {
            scrollToSection("projects", e);
          }}
        >
          <h3>projects</h3>
        </a>
        <a
          onClick={(e) => {
            scrollToSection("education", e);
          }}
        >
          <h3>education</h3>
        </a>
        <a
          onClick={(e) => {
            scrollToSection("contact", e);
          }}
        >
          <h3>contact</h3>
        </a>
        {/* <Contact trigger={trigger} /> */}
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

export default Navbar;
