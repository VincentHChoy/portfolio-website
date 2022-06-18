import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import SkillIcon from "../SkillIcon/SkillIcon";

const projects = [
  {
    name: "Portfolio Website",
    preview: "faHtml5",
    github: "https://github.com/VincentHChoy/react-website",
    desc: "Website provides professional information about myself and presents a showcase of my work",
    stack: [faHtml5, faCss3, faJs, faReact],
  },
  {
    name: "Tweeter",
    preview: "faCss3",
    desc: "Twitter clone for practicing jQuery and front end",
    stack: [faHtml5, faCss3, faJs, faNodeJs],
  },
  {
    name: "TinyApp",
    preview: "faCss3",
    desc: "bit.ly clone practicing Express and multiple routes/endpoints",
    stack: [faHtml5, faCss3, faJs, faNodeJs],
  },
];

function Project() {
  return (
    <section className="project-align">
      <h2 className="section-title">Projects</h2>
      <div className="main-container">
        {projects.map((eachProject) => (
          <div className="container">
            <h2>{eachProject.name}</h2>
            <p>{eachProject.desc}</p>

            <a
              href={eachProject.github}
              aria-label="github"
              className="link-icon"
            >
              <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
            </a>

            <div className="icon-container">
              {eachProject.stack.map((eachStack) => (
                <div className="icon">
                  <FontAwesomeIcon size="2x" icon={eachStack}></FontAwesomeIcon>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
// {projectsList.map((eachSkill, i) => (
//   <SkillsContainer key={i} skill={eachSkill} />
// ))}
