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
          <a href="https://vervali.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            MERN Intern | Vervali Systems Ltd Pvt — Onsite, Vasai, India (Dec 2025 – Present)
          </a>
          <p className="search-description">
            Node.js backend with Worker Threads, Kafka, Redis, Socket.IO, and Elasticsearch. Real-time features, caching, and search optimization.
          </p>
        </div>

        <div className="search-result">
          <a href="https://unifiedmentor.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            Data Analyst Intern | Unified Mentor — Remote, India (Jun 2025 – Dec 2025)
          </a>
          <p className="search-description">
            Python, SQL, Power BI pipelines; automated dashboards improved reporting efficiency by 25%.
          </p>
        </div>

        <div className="search-result">
          <a href="https://cognifyz.com/" className="search-title" target="_blank" rel="noopener noreferrer">
            Power BI Intern | Cognifyz Technologies — Remote (Jun 2025 – Jul 2025)
          </a>
          <p className="search-description">
            DAX & Power Query dashboards for 1,000+ survey responses; improved campaign targeting by 30%.
          </p>
        </div>

        <div className="search-result">
          <a href="https://www.aicte-india.org/" className="search-title" target="_blank" rel="noopener noreferrer">
            Data Analyst Intern | AICTE – Edunet Foundation (Nov 2024 – Dec 2024)
          </a>
          <p className="search-description">
            EDA on 5,000+ transactions with clustering & Apriori; cut analysis time by 40%.
          </p>
        </div>

        <div className="search-result">
          <a href="https://octanet.in/" className="search-title" target="_blank" rel="noopener noreferrer">
            Python Developer Intern | Octanet Tech Labs (Aug 2024 – Nov 2024)
          </a>
          <p className="search-description">
            Console ATM system with modular Python; reduced code redundancy by 35%.
          </p>
        </div>
      </>
    }
    right={
      <>
        <KnowledgePanel />
        <AISummary section="experience" />
        <PeopleAlsoAsk />
      </>
    }
  />
);

export default ExperienceSearchResult;
