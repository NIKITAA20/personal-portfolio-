import React, { useEffect, useState } from 'react';
import SearchHeader from './SearchHeader';
import PageNav from './PageNav';
import PageSkeleton from './PageSkeleton';
import './SearchPageLayout.css';

const SearchPageShell = ({ query, left, right, className = '' }) => {
  const [loading, setLoading] = useState(true);
  const hasAside = Boolean(right);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [query]);

  const shellClass = [
    'page-shell',
    hasAside ? '' : 'page-shell--single',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={shellClass}>
      <div className="page-shell__top">
        <SearchHeader query={query} />
        <PageNav />
      </div>

      <div className="page-shell__grid">
        <div className="page-shell__main">
          {loading ? <PageSkeleton rows={3} /> : left}
        </div>
        {hasAside && (
          <aside className="page-shell__aside">
            {loading ? <PageSkeleton rows={2} compact /> : right}
          </aside>
        )}
      </div>
    </div>
  );
};

export default SearchPageShell;
