import React from "react";

const skillsData = {
  "Programming & Scripting": [
    { name: "Python", icon: "/skills/python.png" },
    { name: "C++", icon: "/skills/cpp.png" },
    { name: "HTML/CSS", icon: "/skills/html-css.png" },
    { name: "SQL", icon: "/skills/sql.png" }
  ],
  "Data Analytics": [
    { name: "EDA", icon: "/skills/eda.png" },
    { name: "Dashboards", icon: "/skills/dashboarding.png" },
    { name: "Predictive", icon: "/skills/predictive_analysis.png" }
  ],
  "BI Tools": [
    { name: "Power BI", icon: "/skills/powerbi.png" },
    { name: "Tableau", icon: "/skills/tableau.png" },
    { name: "Excel", icon: "/skills/excel.png" }
  ]
};

const SkillsPopup = () => {
  return (
    <div className="skillsPopup">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skillsCategory">
          <h4>{category}</h4>

          <div className="skillsGrid">
            {skills.map((skill) => (
              <div key={skill.name} className="skillItem">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPopup;
