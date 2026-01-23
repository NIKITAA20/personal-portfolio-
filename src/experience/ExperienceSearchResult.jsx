import React from "react";
import './ExperienceSearchResult.css';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import AISummary from '../summary/AISummary';

const ExperienceSearchResult = () => {
  return (
    <div className="main-container">
      {/* ===== Left Panel ===== */}
      <div className="left-content">
        {/* Search bar */}
        <div className="search-bar">
          <span className="logo">🔍 Nikita Solanki</span>
          <input
            className="search-input"
            defaultValue="nikita solanki experience"
          />
        </div>

        {/* MERN Intern */}
        <div className="search-result">
          <a
            href="https://vervali.com/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN Intern | Vervali Systems Ltd Pvt — Onsite, Vasai, India (Dec 2025 – Present)
          </a>
          <p className="search-description">
            Working as a MERN Intern at Vervali Systems, I focus on Node.js backend development utilizing Worker Threads, Child Processes, Kafka, Redis, Socket.IO, and Elasticsearch. I have implemented real-time features, optimized caching, enhanced message streaming, and improved search performance across applications.
          </p>
        </div>

        {/* Data Analyst Intern */}
        <div className="search-result">
          <a
            href="https://unifiedmentor.com/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Analyst Intern | Unified Mentor — Remote, India (Jun 2025 – Dec 2025)
          </a>
          <p className="search-description">
            As a Data Analyst Intern at Unified Mentor, I analyze structured and unstructured datasets using Python, SQL, and Power BI. I perform data cleaning, feature engineering, and exploratory data analysis, and collaborate with the analytics team to create automated reports and dashboards, improving stakeholder reporting efficiency by 25%.
          </p>
        </div>

        {/* Power BI Intern */}
        <div className="search-result">
          <a
            href="https://cognifyz.com/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power BI Intern | Cognifyz Technologies — Remote, Nagpur, India (Jun 2025 – Jul 2025)
          </a>
          <p className="search-description">
            During my internship at Cognifyz Technologies, I designed and deployed a Power BI dashboard for an Investment Preferences Survey involving over 1,000 participants. I utilized DAX measures and Power Query to create dynamic visualizations segmented by age, risk level, and income group, helping the marketing team derive actionable insights and improve campaign targeting by 30%.
          </p>
        </div>

        {/* Data Analyst Intern (AICTE) */}
        <div className="search-result">
          <a
            href="https://www.aicte-india.org/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Analyst Intern | AICTE – Edunet Foundation — Remote, Mumbai, India (Nov 2024 – Dec 2024)
          </a>
          <p className="search-description">
            At AICTE – Edunet Foundation, I analyzed over 5,000 customer transactions to extract insights into consumer behavior using Pandas, NumPy, and Seaborn. I applied K-Means Clustering and Association Rules (Apriori) to enhance product recommendations, developed internal dashboards reducing analysis time by 40%, and presented findings to stakeholders to influence product bundling strategy.
          </p>
        </div>

        {/* Python Developer Intern */}
        <div className="search-result">
          <a
            href="https://octanet.in/"
            className="search-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Developer Intern | Octanet Tech Labs — Remote, Mumbai, India (Aug 2024 – Nov 2024)
          </a>
          <p className="search-description">
            As a Python Developer Intern at Octanet Tech Labs, I engineered a console-based ATM system with secure PIN login and full transaction functionalities including withdrawal, deposit, and balance check. I applied modular Python programming and file handling techniques, reducing code redundancy by 35% and simulated a multi-user environment for real-time testing with over 100 dummy users.
          </p>
        </div>
      </div>

      {/* ===== Right Panel (AI Summary + PeopleAlsoAsk) ===== */}
      <div className="right-panel">
        <PeopleAlsoAsk />
        <AISummary section="experience" />
      </div>
    </div>
  );
};

export default ExperienceSearchResult;
