import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { skills } from "../SkillsContainer/SkillsContainer";

const projects = [
  {
    name: "Climbr",
    preview:
      "https://user-images.githubusercontent.com/63982069/198501902-06712884-d394-46d7-838c-552e9d037dde.png",
    link: "https://climbr.netlify.app/",
    github: "https://github.com/VincentHChoy/climbr",
    desc: "Client-side app for logging Marc Bourdon's Top 100 Squamish Boulders with a beautiful interface and intuitive user experience.",
    stack: ["HTML5", "CSS5", "Javascript", "React", "Tailwind"],
  },
  {
    name: "Ketchup",
    preview: "https://i.imgur.com/Z0P5Elz.png",
    link: "https://ketchup-demo.netlify.app/",
    github: "https://github.com/VincentHChoy/climbr",
    desc: "Full stack real-time chat/work collabration app with Google API integration. Allows chatting, google sheets and google docs without ever leaving the app.",
    stack: ["HTML5", "CSS5", "Javascript", "React", "Redux", "Tailwind"],
  },
  {
    name: "Interview Scheduler",
    preview:
      "https://user-images.githubusercontent.com/63982069/183536704-3373db5c-d5a3-4064-a05f-528df490dabb.png",
    github: "https://github.com/VincentHChoy/interview-scheduler",
    desc: "Singe Page App for interviewers to schedule interviews with potential candidates",
    stack: ["HTML5", "CSS5", "Javascript", "React"],
  },
  {
    name: "Portfolio Website",
    preview: "https://i.imgur.com/vj4O8OU.png",
    github: "https://github.com/VincentHChoy/react-website",
    desc: "Website provides professional information about myself and presents a showcase of my work.",
    stack: ["HTML5", "CSS5", "Javascript", "React"],
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
              href={eachProject.link || eachProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project-img" src={eachProject.preview} />
            </a>
            <p>{eachProject.desc}</p>
            <section className="last-of">
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
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
