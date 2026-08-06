import React from 'react';
import './SkillsSearchResult.css';
import SearchPageShell from '../components/SearchPageShell';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';
import SkillsRatings from './SkillsRatings';
import KnowledgePanel from '../components/KnowledgePanel';

const SkillsSearchResult = () => (
  <SearchPageShell
    query="nikita solanki skills"
    left={
      <>
        <div className="search-result">
          <div className="search-title" style={{ cursor: 'default', textDecoration: 'none' }}>
            Technical & Professional Skills
          </div>
          <p className="search-description">
            Proficient in Python, Java, C++, React, Node.js, MongoDB, Power BI, SQL, and data analytics.
            Experienced with Kafka, Redis, Socket.IO, Git, and collaborative delivery.
          </p>
        </div>
        <SkillsRatings />
        <AISummary section="skills" />
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

export default SkillsSearchResult;
