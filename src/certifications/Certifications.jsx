import React from 'react';
import SearchPageShell from '../components/SearchPageShell';
import PeopleAlsoAsk from '../questions/PeopleAlsoAsk';
import KnowledgePanel from '../components/KnowledgePanel';
import { certificationsData } from '../data/certificationsData';
import './Certifications.css';

const Certifications = () => (
  <SearchPageShell
    className="cert-page-shell"
    query="nikita solanki certifications"
    left={
      <>
        <div className="search-result">
          <div className="search-title" style={{ cursor: 'default', textDecoration: 'none' }}>
            Licenses &amp; Certifications
          </div>
          <p className="search-description">
            {certificationsData.length} credential groups from my{' '}
            <a
              href="https://www.linkedin.com/in/nikita-datadriven20/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
            . Related certificates stay under one heading with photos side by side — send more anytime.
          </p>
        </div>

        {certificationsData.map((cert) => {
          const hasGallery = cert.images && cert.images.length > 0;
          return (
            <div className="search-result cert-card" key={`${cert.title}-${cert.issued}`}>
              <div
                className="search-title"
                style={{ cursor: 'default', textDecoration: 'none' }}
              >
                {cert.title}
              </div>
              <p className="cert-card__meta">
                <span className="cert-card__issuer">{cert.issuer}</span>
                <span className="cert-card__dot" aria-hidden="true">
                  ·
                </span>
                <span className="cert-card__issued">Issued {cert.issued}</span>
              </p>
              {cert.summary && <p className="cert-card__summary">{cert.summary}</p>}

              {hasGallery && (
                <div
                  className={`cert-card__gallery${
                    cert.images.length >= 3 ? ' cert-card__gallery--wide' : ''
                  }`}
                >
                  {cert.images.map((img) => (
                    <a
                      key={img.src}
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card__thumb"
                      title={img.label}
                    >
                      <img
                        src={img.src}
                        alt={`${img.label} — ${cert.title}`}
                        loading="lazy"
                      />
                      <span className="cert-card__thumb-label">{img.label}</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="cert-card__actions">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__link"
                  >
                    View certificate →
                  </a>
                )}
                <a
                  href="https://www.linkedin.com/in/nikita-datadriven20/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link cert-card__link--muted"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          );
        })}
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

export default Certifications;
