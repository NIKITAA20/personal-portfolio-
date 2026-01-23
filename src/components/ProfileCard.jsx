import React from "react";

const ProfileCard = ({ onClose }) => {
  return (
    <div className="profileCard">
      <div className="profileHeader">
        <img
          src="/images/avatar.jpg"
          alt="Profile avatar"
          className="profileAvatar"
        />

        <div>
          <p className="profileName">Nikita Solanki</p>
          <p className="profileEmail">nikitasolanki767@gmail.com</p>
          <a
            href="https://www.google.com/maps/place/Mumbai,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="profileEmail"
          >
            📍 Mumbai, India
          </a>
        </div>
      </div>

      <hr />

      <div style={{ fontSize: "13px", lineHeight: 1.6 }}>
        <p><strong>Laptop:</strong> Dell Inspiron 14 2-in-1</p>
        <p><strong>Monitor:</strong> 27″ QHD</p>
        <p><strong>OS:</strong> Windows</p>
        <p><strong>Languages:</strong> English, Hindi, Marathi</p>
      </div>

      <button className="closeCameraBtn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ProfileCard;
