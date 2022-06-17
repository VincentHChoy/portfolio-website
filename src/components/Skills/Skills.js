import './Skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNpm,
  faGithub,
  faGit,
  faNode,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <section className="skills">
      <FontAwesomeIcon
        style={{ color: "orange" }}
        icon={faHtml5}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "#6cc2fa" }}
        icon={faCss3}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "yellow" }}
        icon={faJs}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "rgb(97, 218, 251)" }}
        icon={faReact}
      ></FontAwesomeIcon>
      <FontAwesomeIcon style={{ color: "red" }} icon={faNpm}></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "white" }}
        icon={faGithub}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "orange" }}
        icon={faGit}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "rgb(39, 174, 96)" }}
        icon={faNode}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "rgb(39, 174, 96)" }}
        icon={faNodeJs}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "rgb(37, 157, 255)" }}
        icon={faNodeJs}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ color: "rgb(62, 110, 147)" }}
        icon={faDatabase}
      ></FontAwesomeIcon>
    </section>
  );
}

export default Skills;
