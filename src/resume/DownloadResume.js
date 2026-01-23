import React from 'react';
import './DownloadResume.css';

const DownloadResume = () => {
  return (
    <div className="resume-download-card">
      <h3>Resume</h3>
      <p className="resume-text">
        Want to explore Nikita’s experience, skills, and academic achievements? 
        Download her updated resume below.
      </p>

      <a
        href="/resume_nikita.pdf"
        download="Nikita_Solanki_Resume.pdf"
        className="resume-button"
      >
        ⬇️ Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
