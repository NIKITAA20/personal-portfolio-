import React from "react";
import './SkillsSearchResult.css';
import PeopleAlsoAsk from './PeopleAlsoAsk';
import AISummary from './AISummary';
import SkillsRatings from './SkillsRatings'; // ✅ add this

const SkillsSearchResult = () => {
  return (
    <div className="main-container">
      {/* ===== Left Panel ===== */}
      <div className="left-content">
        <div className="search-bar">
          <span className="logo">🔍 Nikita Solanki</span>
          <input
            className="search-input"
            defaultValue="nikita solanki skills"
          />
        </div>

        <div className="search-title">Technical & Professional Skills</div>
        <p className="search-description">
        I am proficient in Python, Java, C++ for programming and data analysis tasks. Experienced with Web Development (HTML, CSS, JavaScript, React, Node.js, Express.js) and Database Management (MySQL, MongoDB, Firebase). Skilled in Data Analytics and Visualization using Power BI, Excel, Pandas, NumPy, Seaborn. Familiar with AI & Machine Learning concepts, Socket.IO, Kafka, Redis, and project collaboration tools like Git & GitHub. I consistently apply problem-solving, analytical thinking, and teamwork in all my projects.
        </p>

        {/* ===== Skills Ratings Bar ===== */}
        <SkillsRatings />  {/* ✅ directly use here */}
      </div>

      {/* ===== Right Panel (AI Summary + PeopleAlsoAsk) ===== */}
      <div className="right-panel">
        <PeopleAlsoAsk />
        <AISummary section="skills" />
      </div>
    </div>
  );
};

export default SkillsSearchResult;
