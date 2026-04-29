import "./Skills.css";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "C#", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "ML / AI",
    skills: ["PyTorch", "OpenCV", "Scikit-learn", "Jupyter", "Google Colab"],
  },
  {
    category: "Web",
    skills: ["Next.js", "React", "Tailwind", "FastAPI"],
  },
  {
    category: "Tools",
    skills: ["Git", "Linux", "Figma"],
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">
        <h1>SKILLS</h1>
        <div className="title-underline"></div>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <span className="skill-category">{group.category}</span>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
