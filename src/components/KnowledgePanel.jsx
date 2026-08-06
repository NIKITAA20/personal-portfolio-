import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RESUME_DRIVE_URL, goToRoute } from '../utils/navigation';
import './KnowledgePanel.css';

const RELATED = [
  { label: 'Education', path: '/education-search' },
  { label: 'Experience', path: '/experience-search' },
  { label: 'Projects', path: '/projects-search' },
  { label: 'Skills', path: '/skills-search' },
  { label: 'Resume', path: RESUME_DRIVE_URL, external: true },
];

const KnowledgePanel = () => {
  const navigate = useNavigate();

  return (
    <aside className="knowledge-panel">
      <div className="knowledge-panel__hero">
        <img
          src="/images/avatar.jpg"
          alt="Nikita Solanki"
          className="knowledge-panel__photo"
        />
        <h2 className="knowledge-panel__name">Nikita Solanki</h2>
        <p className="knowledge-panel__role">Data Analyst · Full-Stack Developer</p>
      </div>

      <dl className="knowledge-panel__facts">
        <div className="knowledge-panel__fact">
          <dt>Education</dt>
          <dd>B.E. Computer Engineering, VCET</dd>
        </div>
        <div className="knowledge-panel__fact">
          <dt>CGPA</dt>
          <dd>8.98 / 10</dd>
        </div>
        <div className="knowledge-panel__fact">
          <dt>Location</dt>
          <dd>
            <a
              href="https://www.google.com/maps/place/Mumbai,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mumbai, India
            </a>
          </dd>
        </div>
        <div className="knowledge-panel__fact">
          <dt>Experience</dt>
          <dd>VisionX · MERN & analytics</dd>
        </div>
      </dl>

      <div className="knowledge-panel__chips">
        <span className="knowledge-panel__chip">Python</span>
        <span className="knowledge-panel__chip">React</span>
        <span className="knowledge-panel__chip">Power BI</span>
        <span className="knowledge-panel__chip">Node.js</span>
        <span className="knowledge-panel__chip">SQL</span>
      </div>

      <div className="knowledge-panel__links">
        <a
          href="https://www.linkedin.com/in/nikita-datadriven20/"
          target="_blank"
          rel="noopener noreferrer"
          className="knowledge-panel__link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/NIKITAA20/"
          target="_blank"
          rel="noopener noreferrer"
          className="knowledge-panel__link"
        >
          GitHub
        </a>
        <a
          href="mailto:nikitasolanki767@gmail.com"
          className="knowledge-panel__link"
        >
          Email
        </a>
      </div>

      <div className="knowledge-panel__related">
        <h3>People also search for</h3>
        <div className="knowledge-panel__related-list">
          {RELATED.map((item) => (
            <button
              key={item.path}
              type="button"
              className="knowledge-panel__related-btn"
              onClick={() => goToRoute(item.path, navigate)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default KnowledgePanel;
