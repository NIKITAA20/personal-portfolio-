import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import EducationSearchResult from './EducationSearchResult'; // ✅ NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-search" element={<EducationSearchResult />} /> {/* ✅ NEW ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;
