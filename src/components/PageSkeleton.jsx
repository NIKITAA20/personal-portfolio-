import React from 'react';
import './PageSkeleton.css';

const PageSkeleton = ({ rows = 3, compact = false }) => (
  <div className={`page-skeleton ${compact ? 'page-skeleton--compact' : ''}`}>
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="page-skeleton__block" style={{ animationDelay: `${i * 0.08}s` }}>
        <div className="page-skeleton__line page-skeleton__line--title" />
        <div className="page-skeleton__line page-skeleton__line--md" />
        <div className="page-skeleton__line page-skeleton__line--lg" />
        {!compact && <div className="page-skeleton__line page-skeleton__line--sm" />}
      </div>
    ))}
  </div>
);

export default PageSkeleton;
