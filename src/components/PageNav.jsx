import React from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE_ROUTES } from '../utils/navigation';
import './PageNav.css';

const PageNav = () => (
  <div className="page-nav-wrap">
    <p className="page-nav-hint" aria-hidden="true">
      <span className="page-nav-hint__text">Swipe for more</span>
      <span className="page-nav-hint__arrow">→</span>
    </p>
    <div className="page-nav-scroll">
      <nav className="page-nav" aria-label="Portfolio sections">
        {PAGE_ROUTES.map(({ label, path, external }) =>
          external ? (
            <a
              key={path}
              href={path}
              className="page-nav__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ) : (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `page-nav__link ${isActive ? 'page-nav__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          )
        )}
      </nav>
    </div>
  </div>
);

export default PageNav;
