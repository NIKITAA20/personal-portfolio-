import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import './HomePage.css';
import { MdMic, MdVideocam, MdApps, MdMenu, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import GoogleNikitaLogo from '../components/GoogleNikitaLogo';
import SearchDropdown, { SEARCH_SUGGESTIONS } from '../components/SearchDropdown';
import ThemeToggle from '../components/ThemeToggle';
import PageNav from '../components/PageNav';
import { getRouteFromSpeech } from '../utils/navigation';

const LUCKY_ROUTES = [
  '/education-search',
  '/experience-search',
  '/skills-search',
  '/resume',
  '/certifications',
  '/contact',
];


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
  const searchContainerRef = useRef(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  const trendingItems = ['Resume', 'Education', 'Experience', 'Skills', 'Certifications', 'Contact'];

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

  const filteredSuggestions = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    return sortedTrending
      .map((label) => SEARCH_SUGGESTIONS.find((s) => s.label === label))
      .filter(Boolean)
      .filter(
        (s) =>
          !q ||
          s.label.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q)
      );
  }, [sortedTrending, searchText]);

  const handleSelectSearch = useCallback((item) => {
    setSearchText(item);
    setShowDropdown(false);
    const rankings = JSON.parse(localStorage.getItem('rankingData')) || {};
    rankings[item] = (rankings[item] || 0) + 1;
    localStorage.setItem('rankingData', JSON.stringify(rankings));
    setSortedTrending(getSortedTrending());

    const key = item.toLowerCase();
    if (key === 'education') navigate('/education-search');
    else if (key === 'experience') navigate('/experience-search');
    else if (key === 'skills') navigate('/skills-search');
    else if (key === 'resume') navigate('/resume');
    else if (key === 'certifications') navigate('/certifications');
    else if (key === 'contact') navigate('/contact');
  }, [navigate]);

  useEffect(() => {
    setHighlightIndex(0);
  }, [searchText, showDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileCard(false);
      }
      if (skillsMenuRef.current && !skillsMenuRef.current.contains(event.target)) {
        setShowSkillsMenu(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!showDropdown) return;
      if (e.key === 'Escape') {
        setShowDropdown(false);
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((i) => Math.min(i + 1, filteredSuggestions.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && filteredSuggestions.length > 0 && filteredSuggestions[highlightIndex]) {
        e.preventDefault();
        handleSelectSearch(filteredSuggestions[highlightIndex].label);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showDropdown, highlightIndex, filteredSuggestions, handleSelectSearch]);

  const toggleProfileCard = () => {
    setShowProfileCard((prev) => !prev);
  };

  const toggleSkillsMenu = () => {
    setShowSkillsMenu((prev) => !prev);
  };

  const handleFeelingLucky = () => {
    const route = LUCKY_ROUTES[Math.floor(Math.random() * LUCKY_ROUTES.length)];
    setShowDropdown(false);
    navigate(route);
  };

  const handleSearchSubmit = () => {
    const q = searchText.trim();
    if (!q) return;
    const route = getRouteFromSpeech(q);
    if (route) {
      setShowDropdown(false);
      navigate(route);
    } else {
      handleSelectSearch(sortedTrending[0] || 'Resume');
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
        setIsListening(false);
        const route = getRouteFromSpeech(speech);
        if (route) {
          setShowDropdown(false);
          navigate(route);
        } else {
          setShowDropdown(true);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech Recognition Error:', event.error);
        isListeningRef.current = false;
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        isListeningRef.current = false;
        setIsListening(false);
      };
    }

    if (!isListeningRef.current) {
      isListeningRef.current = true;
      setIsListening(true);
      setShowDropdown(true);
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
      <header className="topHeader">
        <nav className="headerNav" aria-label="Quick links">
          <a href="mailto:nikitasolanki767@gmail.com" className="headerLink" target="_blank" rel="noreferrer">Gmail</a>
          <a href="https://www.linkedin.com/in/nikita-datadriven20/" className="headerLink" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/NIKITAA20/" className="headerLink" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" className="headerLink headerLink--btn" onClick={() => navigate('/contact')}>Contact</button>
        </nav>

        <div className="topHeader__icons">
        <ThemeToggle />

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
              <div className="profileCard__banner" />
              <div className="profileHeader">
                <img src="/images/avatar.jpg" alt="Nikita Solanki" className="profileAvatar" />
                <div>
                  <p className="profileName">Nikita Solanki</p>
                  <p className="profileEmail">nikitasolanki767@gmail.com</p>
                </div>
              </div>
              <hr />
              <div className="gearList">
                <p><strong>Role:</strong> Data Analyst · Developer</p>
                <p><strong>Location:</strong> Mumbai, India</p>
                <p><strong>Education:</strong> B.E. CSE · 8.98 CGPA</p>
                <p><strong>Languages:</strong> English, Hindi, Marathi</p>
              </div>
              <div className="socialLinks">
                <a href="mailto:nikitasolanki767@gmail.com" className="socialIcon">Gmail</a>
                <a href="https://www.linkedin.com/in/nikita-datadriven20/" target="_blank" rel="noopener noreferrer" className="socialIcon">LinkedIn</a>
              </div>
              <div className="profileCard__actions">
                <button type="button" className="profileCard__hire" onClick={() => navigate('/contact')}>
                  Hire Me / Contact
                </button>
                <button type="button" className="signOutBtn" onClick={() => setShowProfileCard(false)}>Close</button>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="homeMenuBtn"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
        </div>

        {mobileMenuOpen && (
          <div className="homeMobileMenu">
            <a href="mailto:nikitasolanki767@gmail.com" className="homeMobileMenu__link">Gmail</a>
            <a href="https://www.linkedin.com/in/nikita-datadriven20/" className="homeMobileMenu__link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/NIKITAA20/" className="homeMobileMenu__link" target="_blank" rel="noreferrer">GitHub</a>
            <button type="button" className="homeMobileMenu__link" onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}>Contact</button>
          </div>
        )}
      </header>

      <div className={`phraseAndSearch ${fadeIn ? 'fadeInActive' : ''}`}>
        <div className="centeredIdentity">
          <GoogleNikitaLogo size="large" showSubtitle animated />
        </div>

        <div className="searchContainer" ref={searchContainerRef}>
          <div className="searchBox">
            <div className={`searchBar ${showDropdown ? 'searchBar--open' : ''}`}>
              <div className="searchRow">
                <img
                  src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
                  className="searchIcon"
                  alt="search"
                />
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowDropdown(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !showDropdown) handleSearchSubmit();
                  }}
                  placeholder="Search About Nikita Solanki..."
                  className="searchInput"
                  onFocus={() => setShowDropdown(true)}
                  autoComplete="off"
                />
                <div className="utilityIcons">
                  <MdMic
                    className={`utilityIcon ${isListening ? 'utilityIcon--active' : ''}`}
                    onClick={handleMicClick}
                  />
                  <MdVideocam className="utilityIcon" onClick={handleCameraClick} />
                </div>
              </div>
            </div>

            <SearchDropdown
              open={showDropdown}
              items={sortedTrending}
              query={searchText}
              highlightIndex={highlightIndex}
              onSelect={handleSelectSearch}
            />
          </div>

          <div className={`searchActions ${showDropdown ? 'searchActions--hidden' : ''}`}>
            <button type="button" className="searchActionBtn" onClick={handleSearchSubmit}>
              Search Nikita
            </button>
            <button type="button" className="searchActionBtn searchActionBtn--lucky" onClick={handleFeelingLucky}>
              I&apos;m Feeling Lucky
            </button>
          </div>

          <div className={`homePageNav ${showDropdown ? 'homePageNav--hidden' : ''}`}>
            <PageNav />
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