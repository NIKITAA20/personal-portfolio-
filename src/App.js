import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ChatAssistant from "./components/ChatAssistant";

import HomePage from "./dashboard/HomePage";
import About from "./About";
import EducationSearchResult from "./education/EducationSearchResult";
import ExperienceSearchResult from "./experience/ExperienceSearchResult";
import SkillsSearchResult from "./skills/SkillsSearchResult";
import ProjectsSearchResult from "./projects/ProjectsSearchResult";
import Certifications from "./certifications/Certifications";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { openResume } from "./utils/navigation";

/** Legacy /resume bookmarks → open Drive, then return home */
function ResumeRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    openResume();
    navigate("/", { replace: true });
  }, [navigate]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ChatAssistant />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/education-search" element={<EducationSearchResult />} />
          <Route path="/experience-search" element={<ExperienceSearchResult />} />
          <Route path="/projects-search" element={<ProjectsSearchResult />} />
          <Route path="/skills-search" element={<SkillsSearchResult />} />
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
