import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleNikitaLogo from '../components/GoogleNikitaLogo';
import PageNav from '../components/PageNav';
import './NotFound.css';

const SUGGESTIONS = [
  { label: 'Education', path: '/education-search' },
  { label: 'Experience', path: '/experience-search' },
  { label: 'Skills', path: '/skills-search' },
];

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <GoogleNikitaLogo size="medium" />
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">
        That&apos;s an error. The requested URL was not found on this server.
      </h1>
      <p className="not-found__hint">Did you mean…</p>
      <div className="not-found__suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.path}
            type="button"
            className="not-found__btn"
            onClick={() => navigate(s.path)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <PageNav />
      <button type="button" className="not-found__home" onClick={() => navigate('/')}>
        Go to Google — I mean, Home
      </button>
    </div>
  );
};

export default NotFound;
