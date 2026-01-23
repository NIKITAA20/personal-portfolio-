import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import { MdMic, MdVideocam, MdApps } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState('');
  const recognitionRef = useRef(null);
  const isListeningRef = useRef(false);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showSkillsMenu, setShowSkillsMenu] = useState(false);
  const profileRef = useRef(null);
  const skillsMenuRef = useRef(null);
  const navigate = useNavigate();


  const trendingItems = ['Resume', 'Education', 'Experience', 'Skills', 'Certifications'];

  const skillsData = {
    'Programming & Scripting': [
      { name: 'Python', icon: '/skills/python.png' },
      { name: 'C++', icon: '/skills/cpp.png' },
      { name: 'HTML/CSS', icon: '/skills/html-css.png' },
      { name: 'SQL (MySQL)', icon: '/skills/sql.png' }
    ],
    'Data Analytics & Visualization': [
      { name: 'Data Cleaning', icon: '/skills/datacleaning.png' },
      { name: 'EDA', icon: '/skills/eda.png' },
      { name: 'Dashboarding', icon: '/skills/dashboarding.png' },
      { name: 'Predictive Analytics', icon: '/skills/predictive_analysis.png' }
    ],
    'Business Intelligence Tools': [
      { name: 'Power BI', icon: '/skills/powerbi.png' },
      { name: 'Tableau', icon: '/skills/tableau.png' },
      { name: 'Excel', icon: '/skills/excel.png' },
      { name: 'Power Query', icon: '/skills/power_query.png' }
    ],
    'Database & Tools': [
      { name: 'GitHub', icon: '/skills/github.png' },
      { name: 'Kaggle', icon: '/skills/Kaggle.png' },
      { name: 'Jupyter', icon: '/skills/jupiter.png' },
      { name: 'Google Colab', icon: '/skills/google_colab.png' }
    ],
    'Soft Skills': [
      { name: 'Speaking', icon: '/skills/speaking.png' },
      { name: 'Teamwork', icon: '/skills/teamwork.png' },
      { name: 'Thinking', icon: '/skills/thinking.png' },
      { name: 'Time Management', icon: '/skills/timemanagement.png' }
    ]
  };

  const getSortedTrending = () => {
    const rankings = JSON.parse(localStorage.getItem('rankingData')) || {};
    return [...trendingItems].sort((a, b) => (rankings[b] || 0) - (rankings[a] || 0));
  };

  const [sortedTrending, setSortedTrending] = useState(getSortedTrending());

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showCamera) {
        closeCamera();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showCamera]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileCard(false);
      }
      if (skillsMenuRef.current && !skillsMenuRef.current.contains(event.target)) {
        setShowSkillsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleProfileCard = () => {
    setShowProfileCard((prev) => !prev);
  };

  const toggleSkillsMenu = () => {
    setShowSkillsMenu((prev) => !prev);
  };

  const handleSelectSearch = (item) => {
    setSearchText(item);
    const rankings = JSON.parse(localStorage.getItem('rankingData')) || {};
    rankings[item] = (rankings[item] || 0) + 1;
    localStorage.setItem('rankingData', JSON.stringify(rankings));
    setSortedTrending(getSortedTrending())

    if (item.toLowerCase() === 'education') {
  navigate('/education-search');
  } 
 if (item.toLowerCase() === 'experience') {
    navigate('/experience-search');
  }
 if (item.toLowerCase() === 'skills') {
    navigate('/skills-search');
  } 
  if (item.toLowerCase() === 'resume') {
    navigate('/resume');
  } 
  if (item.toLowerCase() === 'certifications') {
    navigate('/certifications');
  } 
 };
  
 
  


  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event) => {
        const speech = event.results[0][0].transcript;
        setSearchText(speech);
        isListeningRef.current = false;
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech Recognition Error:', event.error);
        isListeningRef.current = false;
      };

      recognitionRef.current.onend = () => {
        isListeningRef.current = false;
      };
    }

    if (!isListeningRef.current) {
      isListeningRef.current = true;
      recognitionRef.current.start();
    }
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch((err) => console.warn('Autoplay blocked:', err));
        setShowCamera(true);
      }
    } catch (error) {
      alert('Camera access denied or not supported');
      console.error(error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setShowCamera(false);
  };

  return (
    <div className="container">
      <div className="topHeader">
        <a href="mailto:nikitasolanki767@gmail.com" className="headerLink" target="_blank" rel="noreferrer">Gmail</a>
        <a href="https://www.linkedin.com/in/nikita-datadriven20/" className="headerLink" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/NIKITAA20/" className="headerLink" target="_blank" rel="noreferrer">GitHub</a>

        <div className="appsWrapper" ref={skillsMenuRef}>
          <MdApps className="googleAppsIcon" onClick={toggleSkillsMenu} />
          {showSkillsMenu && (
            <div className="skillsPopup">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div className="skillsCategory" key={category}>
                  <h4>{category}</h4>
                  <div className="skillsGrid">
                    {skills.map(skill => (
                      <div className="skillItem" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="profileWrapper" ref={profileRef}>
          <img
            src="/images/avatar.jpg"
            alt="Avatar"
            className="avatarImageCircle"
            onClick={toggleProfileCard}
          />
          {showProfileCard && (
            <div className="profileCard">
              <div className="profileHeader">
                <img src="/images/avatar.jpg" alt="Avatar" className="profileAvatar" />
                <div>
                  <p className="profileName">Nikita Solanki</p>
                  <p className="profileEmail">nikitasolanki767@gmail.com</p>
                  <a
                    href="https://www.google.com/maps/place/Mumbai,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profileLocation"
                  >
                    📍 Mumbai, India
                  </a>
                </div>
              </div>
              <hr />
              <div className="gearList">
                <p><strong>Laptop:</strong> Dell Inspiron 14 2-in-1</p>
                <p><strong>Monitor:</strong> GW2790Q | 27" 2K QHD</p>
                <p><strong>OS:</strong> Windows 10 / 11</p>
                <p><strong>Mic:</strong> BOYA</p>
                <p><strong>Language:</strong> English | Hindi | Marathi</p>
              </div>
              <div className="socialLinks">
                <a href="mailto:nikitasolanki767@gmail.com" target="_blank" rel="noopener noreferrer" className="socialIcon">✉️ Gmail</a>
                <a href="https://www.linkedin.com/in/nikita-datadriven20/" target="_blank" rel="noopener noreferrer" className="socialIcon">🔗 LinkedIn</a>
              </div>
              <button className="signOutBtn" onClick={() => alert("Signing out...")}>Sign Out</button>
            </div>
          )}
        </div>
      </div>

      <div className={`phraseAndSearch ${fadeIn ? 'fadeInActive' : ''}`}>
        <div className="centeredIdentity">
          <h1 className="mainTitle">Nikita Solanki</h1>
          <img src="/images/avatar.jpg" alt="Avatar" className="avatarImage" />
        </div>

        <div className="searchContainer">
          <div className={`searchBar ${showDropdown ? 'expanded' : ''}`}>
            <div className="searchRow">
              <img
                src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
                className="searchIcon"
                alt="search"
              />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search About Nikita Solanki..."
                className="searchInput"
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              />
              <div className="utilityIcons">
                <MdMic className="utilityIcon" onClick={handleMicClick} />
                <MdVideocam className="utilityIcon" onClick={handleCameraClick} />
              </div>
            </div>

            {showDropdown && (
              <div className="searchDropdown">
                <div className="dropdownTitle">Trending searches</div>
                <ul className="dropdownList">
                  {sortedTrending.map((item) => (
                    <li key={item} className="dropdownItem" onMouseDown={() => handleSelectSearch(item)}>
                      <span className="trendIcon">📈</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCamera && (
        <div className="cameraModal">
          <video ref={videoRef} className="cameraFeed" autoPlay playsInline />
          <button className="closeCameraBtn" onClick={closeCamera}>Close Camera</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;