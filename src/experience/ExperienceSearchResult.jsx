import React from 'react';
import './ExperienceSearchResult.css';
import SearchPageShell from '../components/SearchPageShell';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';
import KnowledgePanel from '../components/KnowledgePanel';

const ExperienceSearchResult = () => (
  <SearchPageShell
    query="nikita solanki experience"
    left={
      <>
        <div className="search-result">
          <a
            href="https://www.visionxtechnologies.com/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Developer | VisionX Technologies — Mumbai, India (– Jun 2026)
          </a>
          <p className="search-description">
            Building production web products on the <b>MERN stack</b> for client and internal platforms —
            from SaaS-style UIs to scalable APIs.
          </p>
          <ul className="result-bullets">
            <li>
              Developed and shipped full-stack features with <b>MongoDB, Express, React, and Node.js</b>.
            </li>
            <li>
              Collaborated on responsive, product-first interfaces aligned with VisionX delivery standards.
            </li>
            <li>
              Contributed to clean API design, component reuse, and maintainable frontend architecture.
            </li>
            <li>
              Worked in sprint-based delivery with reviews, standups, and iterative releases.
            </li>
          </ul>
        </div>

        <div className="search-result">
          <a href="https://vervali.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            MERN Intern | Vervali Systems Ltd Pvt — Onsite, Vasai, India (Dec 2025 – Jun 2026)
          </a>
          <p className="search-description">
            Backend-focused MERN internship on real-time systems, caching, and search at scale.
          </p>
          <ul className="result-bullets">
            <li>
              Built <b>Node.js</b> services using <b>Worker Threads, Kafka, Redis, Socket.IO,</b> and{' '}
              <b>Elasticsearch</b>.
            </li>
            <li>Implemented real-time features and event-driven flows for live user experiences.</li>
            <li>Improved response times with Redis caching and search optimization patterns.</li>
            <li>Partnered with the team on debugging, performance tuning, and production readiness.</li>
          </ul>
        </div>

        <div className="search-result">
          <a href="https://unifiedmentor.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            Data Analyst Intern | Unified Mentor — Remote, India (Jun 2025 – Dec 2025)
          </a>
          <p className="search-description">
            End-to-end analytics pipelines from raw data cleanup to stakeholder-ready dashboards.
          </p>
          <ul className="result-bullets">
            <li>
              Built <b>Python, SQL, and Power BI</b> workflows for recurring reporting needs.
            </li>
            <li>Automated dashboard refreshes that improved reporting efficiency by <b>25%</b>.</li>
            <li>Translated messy datasets into clear KPIs for non-technical stakeholders.</li>
          </ul>
        </div>

        <div className="search-result">
          <a href="https://cognifyz.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            Power BI Intern | Cognifyz Technologies — Remote (Jun 2025 – Jul 2025)
          </a>
          <p className="search-description">
            Survey analytics and campaign dashboards with DAX and Power Query.
          </p>
          <ul className="result-bullets">
            <li>
              Modeled and visualized <b>1,000+ survey responses</b> with DAX &amp; Power Query.
            </li>
            <li>Surfaced targeting insights that improved campaign effectiveness by about <b>30%</b>.</li>
            <li>Delivered interactive reports for faster decision-making across campaigns.</li>
          </ul>
        </div>

        <div className="search-result">
          <a href="https://www.aicte-india.org/" className="search-title" target="_blank" rel="noopener noreferrer">
            Data Analyst Intern | AICTE – Edunet Foundation (Nov 2024 – Dec 2024)
          </a>
          <p className="search-description">
            Exploratory analysis and association mining on large transactional datasets.
          </p>
          <ul className="result-bullets">
            <li>
              Ran EDA on <b>5,000+ transactions</b> with clustering and Apriori association rules.
            </li>
            <li>Cut analysis turnaround time by roughly <b>40%</b> through reusable notebooks.</li>
            <li>Documented findings for mentors and peers in a clear, actionable format.</li>
          </ul>
        </div>

        <div className="search-result">
          <a href="https://octanet.in/" className="search-title" target="_blank" rel="noopener noreferrer">
            Python Developer Intern | Octanet Tech Labs (Aug 2024 – Nov 2024)
          </a>
          <p className="search-description">
            Console application design with modular Python and cleaner code structure.
          </p>
          <ul className="result-bullets">
            <li>Built a console ATM system with modular Python components and clear flows.</li>
            <li>Reduced code redundancy by about <b>35%</b> through shared utilities and refactoring.</li>
            <li>Practiced input validation, error handling, and readable project structure.</li>
          </ul>
        </div>

        <AISummary section="experience" />
      </>
    }
    right={
      <>
        <KnowledgePanel />
        <PeopleAlsoAsk />
      </>
    }
  />
);

export default ExperienceSearchResult;
