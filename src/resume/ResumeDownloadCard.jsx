import React from 'react';
import './DownloadResume.css';

const ResumeDownloadCard = () => (
  <div className="search-result resume-download-card">
    <h3>Resume — Nikita Solanki</h3>
    <p className="resume-download-card__desc">
      B.E. Computer Engineering · Data Analyst · Full-Stack Developer
    </p>
    <a
      href="https://drive.google.com/file/d/1Q7XbYl_jkwlArcu7NJLV8CyDy6j5bBxD/view"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-button download"
    >
      View Resume
    </a>
  </div>
);

export default ResumeDownloadCard;
