import React, { useMemo, useState } from 'react';
import './ProjectsSearchResult.css';
import SearchPageShell from '../components/SearchPageShell';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';
import KnowledgePanel from '../components/KnowledgePanel';
import { PROJECT_DOMAINS, projectsData } from '../data/projectsData';

const ProjectsSearchResult = () => {
  const [domain, setDomain] = useState('all');

  const filtered = useMemo(
    () =>
      domain === 'all'
        ? projectsData
        : projectsData.filter((p) => p.domain === domain),
    [domain]
  );

  const left = (
    <>
      <div className="search-result">
        <div className="search-title" style={{ cursor: 'default', textDecoration: 'none' }}>
          Featured Projects
        </div>
        <p className="search-description">
          These are selected highlights — there are more projects on my{' '}
          <a
            href="https://github.com/NIKITAA20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
          . Visit there to explore all repositories. Filter by domain — MERN, Data
          Science, Analytics, or Systems.
        </p>
        <div className="project-domain-filters" role="tablist" aria-label="Project domains">
          {PROJECT_DOMAINS.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={domain === d.id}
              className={`project-domain-filters__btn${
                domain === d.id ? ' project-domain-filters__btn--active' : ''
              }`}
              onClick={() => setDomain(d.id)}
            >
              {d.label}
              <span className="project-domain-filters__count">
                {d.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.domain === d.id).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {filtered.map((project) => (
        <div className="search-result project-card" key={project.href}>
          <div className="project-card__top">
            <a
              href={project.href}
              className="search-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <span className="project-card__domain">
              {PROJECT_DOMAINS.find((d) => d.id === project.domain)?.label}
            </span>
          </div>
          <div className="project-card__links">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              GitHub →
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--demo"
              >
                Live demo →
              </a>
            )}
          </div>
          <ul className="result-bullets">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="project-card__skills">
            <span className="project-card__skills-label">Skills</span>
            <div className="project-card__skills-list">
              {project.skills.map((skill) => (
                <span key={skill} className="project-card__skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="search-result">
          <p className="search-description">No projects in this domain yet.</p>
        </div>
      )}

      <div className="search-result project-card__more">
        <p className="search-description">
          More experiments &amp; demos on{' '}
          <a
            href="https://github.com/NIKITAA20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </p>
      </div>

      <AISummary section="projects" />
    </>
  );

  return (
    <SearchPageShell
      query="nikita solanki projects"
      left={left}
      right={
        <>
          <KnowledgePanel />
          <PeopleAlsoAsk />
        </>
      }
    />
  );
};

export default ProjectsSearchResult;
