import React from 'react';
import './EducationSearchResult.css';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';
import SkillsRatings from '../skills/SkillsRatings';
import DownloadResume from '../resume/DownloadResume';

const EducationSearchResult = () => {
  return (
    <div className="main-container">
      {/* ===== Left Section ===== */}
      <div className="left-content">
        {/* Search Bar */}
        <div className="search-bar">
          <span className="logo">🔍 Nikita Solanki</span>
          <input
            className="search-input"
            defaultValue="nikita solanki education details"
          />
        </div>

        {/* University */}
        <div className="search-result">
          <a
            href="https://vcet.edu.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Mumbai – Bachelor of Engineering in Computer Engineering
          </a>
          <p className="search-description"> Pursuing <b>Bachelor of Engineering (2023–2027)</b> at <b>Vidyavardhini’s College of Engineering and Technology (VCET)</b>, affiliated with the University of Mumbai. Currently maintaining a <b>CGPA of 8.98/10</b>. Actively involved in hands-on projects focused on <b>Web Development, Artificial Intelligence, and Data Analytics</b>. Experienced in tools & technologies like <b>MySQL, MongoDB, AutoCAD, Power BI, Java, and Firebase</b>. <br />Also participated in <b>hackathons</b> and <b>technical fests</b>, contributing innovative solutions in AI-driven education and agriculture. </p>
        </div>

        {/* HSC */}
        <div className="search-result">
          <a
            href="https://www.avc.ac.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annasaheb Vartak College – HSC
          </a>
          <p className="search-description"> Completed <b>HSC (Science Stream)</b> from Annasaheb Vartak College, Vasai, with an impressive <b>80%</b> (2021–2023). Developed a deep interest in <b>Computer Science and Programming</b>, mastering fundamentals in <b>C++, HTML, and CSS</b>. Consistently demonstrated analytical thinking, creativity, and effective communication skills during academic projects and presentations. </p>
        </div>

        {/* SSC */}
        <div className="search-result">
          <a
            href="https://www.justdial.com/Palghar/St-Anthonys-Convent-School-Vasai-Village-Vasaivst/022P8403459_BZDET"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            St. Anthony's Convent School – SSC
          </a>
          <p className="search-description"> Successfully completed <b>SSC with 93.40%</b> (2008–2021) at St. Anthony’s Convent School, Vasai. Recognized as <b>Sports Captain</b> for outstanding leadership, teamwork, and discipline. Built a strong foundation in logical reasoning, mathematics, and organization, which later shaped problem-solving skills in computer engineering. Known for consistency, time management, and dedication both in academics and extracurricular activities. </p>
        </div>

        {/* Skills and Resume */}
        <SkillsRatings />
        <DownloadResume />
      </div>

      {/* ===== Right Panel ===== */}
      <div className="right-panel">
        {/* People Also Ask on top */}
        <PeopleAlsoAsk />

        {/* AISummary below PeopleAlsoAsk */}
        <AISummary section="education" />
      </div>
    </div>
  );
};

export default EducationSearchResult;
