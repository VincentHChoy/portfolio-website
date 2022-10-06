import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { skills } from "../SkillsContainer/SkillsContainer";

const projects = [
  {
    name: "Ketchup",
    preview: "https://i.imgur.com/Z0P5Elz.png",
    github: "https://github.com/VincentHChoy/ketchup",
    desc: "Real-time chat/work collabration app with Google API integration. Allows chatting, google sheets and google docs without ever leaving the app.",
    stack: ["HTML5", "CSS5", "Javascript", "React","Redux","Tailwind"],
  },
  {
    name: "Portfolio Website",
    preview: "https://i.imgur.com/vj4O8OU.png",
    github: "https://github.com/VincentHChoy/react-website",
    desc: "Website provides professional information about myself and presents a showcase of my work.",
    stack: ["HTML5", "CSS5", "Javascript", "React"],
  },
  {
    name: "Tweeter",
    preview:
      "https://user-images.githubusercontent.com/63982069/168381217-06b3ec8b-adaa-4fe9-aad5-881a5fbcc8e2.png",
    github: "https://github.com/VincentHChoy/tweeter",
    desc: "Twitter clone for practicing HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express back-end skills.",
    stack: ["HTML5", "CSS5", "Javascript", "jQuery", "NodeJS"],
  },
  {
    name: "TinyApp",
    preview:
      "https://user-images.githubusercontent.com/63982069/165608971-e0aece87-774f-4295-9204-10937490d466.png",
    github: "https://github.com/VincentHChoy/tiny-app",
    desc: "a full stack web application built with Node and Express that allows users to shorten long URLs.",
    stack: ["HTML5", "CSS5", "Javascript", "ExpressJS", "Bootstrap","NodeJS"],
  },
];

function Project(props) {

  const colorMatcher = (data, stackItem) => {
    for (const skills of data) {
      if (stackItem === skills.name) {
        return skills;
      }
    }
    return "orange";
  };

  return (
    <section className="project-align">
      <a id="projects">
        <h2 className="section-title">Projects</h2>
      </a>
      <div className="main-container">
        {projects.map((eachProject) => (
          <div className={`project-container ${props.theme}`}>
            <h2>{eachProject.name}</h2>
            <a
              href={eachProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project-img" src={eachProject.preview}/>
            </a>
            <p>{eachProject.desc}</p>
            <div className="icon-container">
              {eachProject.stack.map((eachStack) => (
                <div className="icon">
                  <FontAwesomeIcon
                    size="2x"
                    icon={colorMatcher(skills, eachStack).icon}
                    style={{ color: colorMatcher(skills, eachStack).color }}
                  ></FontAwesomeIcon>
                  <p className="stack-names">
                    {colorMatcher(skills, eachStack).name}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={eachProject.github}
              aria-label="github"
              className="link-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
