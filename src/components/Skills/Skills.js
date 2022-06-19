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
    <section>
      <a id="skills">
        <h2 className="section-title">Skills</h2>
      </a>
      <ul className="skills">
        {categoryList.map((eachSkill, i) => (
          <SkillsContainer key={i} skill={eachSkill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
