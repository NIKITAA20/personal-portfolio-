import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdDescription,
  MdSchool,
  MdWork,
  MdPsychology,
  MdVerified,
  MdTrendingUp,
  MdHistory,
  MdArrowForward,
} from 'react-icons/md';
import './SearchDropdown.css';

export const SEARCH_SUGGESTIONS = [
  {
    id: 'resume',
    label: 'Resume',
    desc: 'Download CV & highlights',
    color: '#EA4335',
    icon: MdDescription,
  },
  {
    id: 'education',
    label: 'Education',
    desc: 'B.E., HSC, SSC & CGPA',
    color: '#4285F4',
    icon: MdSchool,
  },
  {
    id: 'experience',
    label: 'Experience',
    desc: 'Internships & impact metrics',
    color: '#34A853',
    icon: MdWork,
  },
  {
    id: 'skills',
    label: 'Skills',
    desc: 'Tech stack & proficiency',
    color: '#FBBC05',
    icon: MdPsychology,
  },
  {
    id: 'certifications',
    label: 'Certifications',
    desc: 'Courses & credentials',
    color: '#A142F4',
    icon: MdVerified,
  },
  {
    id: 'contact',
    label: 'Contact',
    desc: 'Hire me · email & Calendly',
    color: '#34A853',
    icon: MdHistory,
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 380, damping: 28 },
  },
  exit: { opacity: 0, x: -8, transition: { duration: 0.12 } },
};

const SearchDropdown = ({ open, items, query, onSelect, highlightIndex = -1 }) => {
  const q = query.trim().toLowerCase();

  const filtered = items
    .map((label) => SEARCH_SUGGESTIONS.find((s) => s.label === label) || { label, desc: '', color: '#5f6368', icon: MdTrendingUp })
    .filter((s) => !q || s.label.toLowerCase().includes(q) || s.desc?.toLowerCase().includes(q));

  const showTrending = !q;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-dropdown"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        >
          <div className="search-dropdown__glow" aria-hidden="true" />

          <div className="search-dropdown__header">
            {showTrending ? (
              <>
                <MdTrendingUp className="search-dropdown__header-icon search-dropdown__header-icon--trend" />
                <span>Trending searches</span>
              </>
            ) : (
              <>
                <MdHistory className="search-dropdown__header-icon" />
                <span>Suggestions for &ldquo;{query}&rdquo;</span>
              </>
            )}
          </div>

          <div
            className="search-dropdown__scroll"
            onWheel={(e) => e.stopPropagation()}
          >
            {filtered.length === 0 ? (
              <p className="search-dropdown__empty">No matches — try Education, Skills, or Resume</p>
            ) : (
              <motion.ul
                className="search-dropdown__list"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filtered.map((item, index) => {
                  const Icon = item.icon || MdTrendingUp;
                  const isActive = index === highlightIndex;

                  return (
                    <motion.li
                      key={item.label}
                      className={`search-dropdown__item ${isActive ? 'search-dropdown__item--active' : ''}`}
                      variants={itemVariants}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        onSelect(item.label);
                      }}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span
                        className="search-dropdown__icon-wrap"
                        style={{ background: `${item.color}18`, color: item.color }}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="search-dropdown__text">
                        <span className="search-dropdown__label">{item.label}</span>
                        {item.desc && (
                          <span className="search-dropdown__desc">{item.desc}</span>
                        )}
                      </span>
                      <MdArrowForward className="search-dropdown__arrow" />
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </div>

          <div className="search-dropdown__footer">
            <kbd>↵</kbd> search · <kbd>↑↓</kbd> navigate · <kbd>esc</kbd> close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchDropdown;
