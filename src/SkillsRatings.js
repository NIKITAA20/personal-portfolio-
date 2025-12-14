import React, { useEffect, useRef, useState } from 'react';
import './SkillsRatings.css';

const SkillsRatings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Detect when user scrolls to skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'Python (AI/ML)', level: 88 },
    { name: 'HTML, CSS, Bootstrap', level: 95 },
    { name: 'Node.js & Express', level: 86 },
    { name: 'MongoDB & MySQL', level: 84 },
    { name: 'Firebase & Firestore', level: 82 },
    { name: 'Power BI & Data Visualization', level: 80 },
    { name: 'C / C++ Programming', level: 85 },
    { name: 'Git, GitHub & Version Control', level: 89 },
    { name: 'Figma & UI/UX Tools', level: 75 },
    { name: 'AI / Machine Learning', level: 83 },
  ];

  return (
    <div className="skills-card" ref={skillsRef}>
      <h3>💡 Technical Skills</h3>

      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-label">
            <span>{skill.name}</span>
            <span className="skill-percent">{isVisible ? `${skill.level}%` : '0%'}</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{
                width: isVisible ? `${skill.level}%` : '0%',
                transitionDelay: `${index * 0.1}s`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsRatings;
