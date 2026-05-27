import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import GoogleNikitaLogo from './GoogleNikitaLogo';
import ThemeToggle from './ThemeToggle';
import './SearchHeader.css';

const HEADER_LINKS = [
  { label: 'Gmail', href: 'mailto:nikitasolanki767@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-datadriven20/', external: true },
  { label: 'GitHub', href: 'https://github.com/NIKITAA20/', external: true },
  { label: 'Contact', href: '/contact', route: true },
];

const SearchHeader = ({ query, onQueryChange }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (link) => {
    setMenuOpen(false);
    if (link.route) navigate(link.href);
    else if (link.external) window.open(link.href, '_blank', 'noopener,noreferrer');
    else window.location.href = link.href;
  };

  return (
    <header className="search-header">
      <div className="search-header__mobile-row">
        <button
          type="button"
          className="search-header__logo-btn"
          onClick={() => navigate('/')}
          aria-label="Go to home"
        >
          <GoogleNikitaLogo size="small" />
        </button>

        <div className="search-header__tools">
          <ThemeToggle />
          <button
            type="button"
            className="search-header__menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      <div className="search-header__bar">
        <img
          src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
          alt=""
          className="search-header__icon"
        />
        <input
          className="search-header__input"
          value={query}
          onChange={(e) => onQueryChange?.(e.target.value)}
          readOnly={!onQueryChange}
        />
      </div>

      <nav className="search-header__links" aria-label="Quick links">
        {HEADER_LINKS.map((link) => (
          <button
            key={link.label}
            type="button"
            className="search-header__link"
            onClick={() => handleLink(link)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {menuOpen && (
        <div className="search-header__mobile-menu">
          {HEADER_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className="search-header__mobile-link"
              onClick={() => handleLink(link)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default SearchHeader;
