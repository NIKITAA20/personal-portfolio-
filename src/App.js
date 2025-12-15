import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import EducationSearchResult from './EducationSearchResult';
import ExperienceSearchResult from './ExperienceSearchResult'; 
import SkillsSearchResult from './SkillsSearchResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-search" element={<EducationSearchResult />} />
        <Route path="/experience-search" element={<ExperienceSearchResult />} />
        <Route path="/skills-search" element={<SkillsSearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
