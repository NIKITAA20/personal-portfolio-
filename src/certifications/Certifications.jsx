import React from 'react';
import Lottie from 'lottie-react';
import SearchPageShell from '../components/SearchPageShell';
import animationData from '../assets/lottie/Under-Construction 1.json';
import './Certifications.css';

const Certifications = () => (
  <SearchPageShell
    className="cert-page-shell"
    query="nikita solanki certifications"
    left={
      <div className="search-result cert-page">
        <h2 className="cert-page__title">Certifications</h2>
        <p className="cert-page__sub">Full certification gallery coming soon.</p>
        <div className="lottie-wrap">
          <Lottie animationData={animationData} loop className="lottie-big" />
        </div>
      </div>
    }
  />
);

export default Certifications;
