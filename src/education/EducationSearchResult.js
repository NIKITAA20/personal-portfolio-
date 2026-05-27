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
            University of Mumbai – Bachelor of Engineering in Computer Engineering
          </a>
          <p className="search-description">
            Pursuing <b>Bachelor of Engineering (2023–2027)</b> at <b>Vidyavardhini’s College of Engineering and Technology (VCET)</b>, affiliated with the University of Mumbai. Currently maintaining a <b>CGPA of 8.98/10</b>. Actively involved in hands-on projects focused on <b>Web Development, Artificial Intelligence, and Data Analytics</b>.
          </p>
        </div>

        <div className="search-result">
          <a
            href="https://www.avc.ac.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annasaheb Vartak College – HSC
          </a>
          <p className="search-description">
            Completed <b>HSC (Science Stream)</b> from Annasaheb Vartak College, Vasai, with an impressive <b>80%</b> (2021–2023). Mastered fundamentals in <b>C++, HTML, and CSS</b>.
          </p>
        </div>

        <div className="search-result">
          <a
            href="https://www.justdial.com/Palghar/St-Anthonys-Convent-School-Vasai-Village-Vasaivst/022P8403459_BZDET"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            St. Anthony&apos;s Convent School – SSC
          </a>
          <p className="search-description">
            Successfully completed <b>SSC with 93.40%</b> (2008–2021). Recognized as <b>Sports Captain</b> for outstanding leadership and teamwork.
          </p>
        </div>

        <SkillsRatings />
      </>
    }
    right={
      <>
        <KnowledgePanel />
        <AISummary section="education" />
        <PeopleAlsoAsk />
      </>
    }
  />
);

export default EducationSearchResult;
