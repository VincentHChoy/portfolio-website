import "./Skills.css";
import SkillsContainer from "../SkillsContainer/SkillsContainer";

function Skills() {
  const categoryList = [
    { category: "Markup/Styling" },
    { category: "Programming Languages" },
    { category: "Javascript Frameworks" },
    { category: "Package Manager" },
    { category: "Database Management" },
    { category: "Version Control" },
    { category: "Backend" },
  ];


  return (
    
    <section className="skills">
      <ul className="skills">
        {categoryList.map((eachSkill,i) => (
          <SkillsContainer
          key={i}
          skill={eachSkill}
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
