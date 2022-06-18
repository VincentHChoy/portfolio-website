import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SkillIcon.css'



function SkillIcon({skill}) {
  return (
    <div className="icon-rows">
      {skill.map((skill,i) => (
        <div className="icon">
          <FontAwesomeIcon
            key={i}
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