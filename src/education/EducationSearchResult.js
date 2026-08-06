import React from 'react';
import SearchPageShell from '../components/SearchPageShell';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';
import SkillsRatings from '../skills/SkillsRatings';
import KnowledgePanel from '../components/KnowledgePanel';

const EducationSearchResult = () => (
  <SearchPageShell
    query="nikita solanki education details"
    left={
      <>
        <div className="search-result">
          <a
            href="https://vcet.edu.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Mumbai – B.E. Computer Engineering | VCET (2023–2027)
          </a>
          <p className="search-description">
            Pursuing <b>Bachelor of Engineering in Computer Engineering</b> at{' '}
            <b>Vidyavardhini&apos;s College of Engineering and Technology (VCET)</b>, affiliated with the
            University of Mumbai. Current CGPA: <b>8.98 / 10</b>.
          </p>
          <ul className="result-bullets">
            <li>
              Coursework &amp; labs spanning <b>DSA, DBMS, OS, networks,</b> and software engineering.
            </li>
            <li>
              Hands-on projects in <b>Web Development, AI/ML, and Data Analytics</b> alongside academics.
            </li>
            <li>
              Tech practiced in academics &amp; projects: <b>MySQL, MongoDB, Power BI, Java, Firebase, React</b>.
            </li>
            <li>
              Active in <b>hackathons, tech fests,</b> and team builds — from ideation to demos.
            </li>
            <li>
              Focus on turning classroom concepts into deployable apps, dashboards, and clean documentation.
            </li>
          </ul>
        </div>

        <div className="search-result">
          <a
            href="https://www.avc.ac.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annasaheb Vartak College – HSC Science | Vasai (2021–2023)
          </a>
          <p className="search-description">
            Completed <b>HSC (Science stream)</b> with <b>80%</b>, building a strong base for engineering
            and programming.
          </p>
          <ul className="result-bullets">
            <li>
              Core subjects in <b>Physics, Chemistry, Mathematics</b> with emphasis on problem-solving.
            </li>
            <li>
              Learned programming fundamentals in <b>C++, HTML, and CSS</b> — first step into web &amp; logic.
            </li>
            <li>
              Strengthened <b>analytical thinking, presentations,</b> and structured study habits for STEM.
            </li>
            <li>
              Prepared the foundation that led into Computer Engineering at Mumbai University.
            </li>
          </ul>
        </div>

        <div className="search-result">
          <a
            href="https://www.justdial.com/Palghar/St-Anthonys-Convent-School-Vasai-Village-Vasaivst/022P8403459_BZDET"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            St. Anthony&apos;s Convent School – SSC | Vasai (2008–2021)
          </a>
          <p className="search-description">
            Completed <b>SSC with 93.40%</b>, combining strong academics with leadership beyond the classroom.
          </p>
          <ul className="result-bullets">
            <li>
              Excelled in <b>Mathematics and logical reasoning</b> — early interest in structured problem-solving.
            </li>
            <li>
              Served as <b>Sports Captain</b>, leading peers with accountability, teamwork, and discipline.
            </li>
            <li>
              Balanced academics with extracurriculars — communication, time management, and ownership.
            </li>
            <li>
              Built habits of consistency and curiosity that continue through engineering and internships.
            </li>
          </ul>
        </div>

        <SkillsRatings />
        <AISummary section="education" />
      </>
    }
    right={
      <>
        <KnowledgePanel />
        <PeopleAlsoAsk />
      </>
    }
  />
);

export default EducationSearchResult;
