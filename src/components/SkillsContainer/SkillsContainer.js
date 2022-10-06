import "./SkillsContainer.css";
import SkillIcon from "../SkillIcon/SkillIcon";
import { faDatabase, faGem, faFire, faWind} from "@fortawesome/free-solid-svg-icons";
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
  faBootstrap,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
// import skills from '../json/skills.json'

export const skills = [
  {
    name: "HTML5",
    icon: faHtml5,
    color: "orange",
    category: "Markup/Styling",
  },
  {
    name: "CSS5",
    icon: faCss3,
    color: "#6cc2fa",
    category: "Markup/Styling",
  },
  {
    name: "Tailwind",
    icon: faWind,
    color: "#6cc2fa",
    category: "Markup/Styling",
  },
  {
    name: "Javascript",
    icon: faJs,
    color: "yellow",
    category: "Programming Languages",
  },
  {
    name: "Ruby",
    icon: faGem,
    color: "red",
    category: "Programming Languages",
  },
  {
    name: "React",
    icon: faReact,
    color: "rgb(97, 218, 251)",
    category: "Javascript Frameworks",
  },
  {
    name: "Redux",
    icon: faBattleNet,
    color: "#9064d5",
    category: "Javascript Frameworks",
  },
  {
    name: "NPM",
    icon: faNpm,
    color: "red",
    category: "Package Manager",
  },
  {
    name: "Github",
    icon: faGithub,
    color: "white",
    category: "Version Control",
  },
  {
    name: "Git",
    icon: faGit,
    color: "orange",
    category: "Version Control",
  },
  {
    name: "Firebase",
    icon: faFire,
    color: "orange",
    category: "Backend",
  },
  {
    name: "NodeJS",
    icon: faNode,
    color: "rgb(39, 174, 96)",
    category: "Backend",
  },
  {
    name: "ExpressJS",
    icon: faNodeJs,
    color: "rgb(39, 174, 96)",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: faDatabase,
    color: "rgb(62, 110, 147)",
    category: "Database Management",
  },
  {
    name: "jQuery",
    icon: faNodeJs,
    color: "rgb(62, 110, 147)",
    category: "Javascript Frameworks",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    color: "#563d7c",
    category: "Markup/Styling",
  },
];

export default function SkillsContainer({ skill }) {

  const findSkill = (data, key) => {
    const output = [];
    for (const skill of data) {
      if (skill.category === key) {
        output.push(skill);
      }
    }
    return output;
  };

  const foundSkill = findSkill(skills, skill.category);

  return (
    <div className="skill-container">
      <h3>{skill.category}</h3>
      <SkillIcon 
      key={skill.name}
      skill={foundSkill} />
    </div>
  );
}
