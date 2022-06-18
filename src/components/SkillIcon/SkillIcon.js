import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SkillIcon.css'


function SkillIcon({skill}) {
  console.log('skill',skill)
  return (
    <div className="icon-rows">
      {skill.map((skill) => (
        <div className="icon">
          <FontAwesomeIcon
            size="4x"
            style={{ color: skill.color }}
            icon={skill.icon}
          ></FontAwesomeIcon>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
  }
export default SkillIcon