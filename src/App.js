import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./dashboard/HomePage";
import About from "./About";
import EducationSearchResult from "./education/EducationSearchResult";
import ExperienceSearchResult from "./experience/ExperienceSearchResult";
import SkillsSearchResult from "./skills/SkillsSearchResult";
import DownloadResume from "./resume/DownloadResume"; 
import Certifications from "./certifications/Certifications";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-search" element={<EducationSearchResult />} />
        <Route path="/experience-search" element={<ExperienceSearchResult />} />
        <Route path="/skills-search" element={<SkillsSearchResult />} />
        <Route path="/resume" element={<DownloadResume />} />
        <Route path="/certifications" element={<Certifications />} />

      </Routes>
    </Router>
  );
}

export default App;
