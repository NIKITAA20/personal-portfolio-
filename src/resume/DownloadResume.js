import React from "react";
import "./DownloadResume.css";

const DownloadResume = () => {
  return (
    <div className="resume-download-card">
      <h3>Resume</h3>

      <a
        href="https://drive.google.com/file/d/1Q7XbYl_jkwlArcu7NJLV8CyDy6j5bBxD/view"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button download"
      >
        📄 View Resume
      </a>
    </div>
  );
};

export default DownloadResume;
