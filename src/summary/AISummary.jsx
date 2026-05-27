import React, { useEffect, useMemo, useState } from 'react';
import AIAgent from '../components/AIAgent';
import { crispSummaries } from '../data/profileData';
import './AISummary.css';

const TYPE_SPEED = 12;

function useTypewriter(text, active) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!active || !text) {
      setDisplayed('');
      return undefined;
    }
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, TYPE_SPEED);
    return () => clearInterval(id);
  }, [text, active]);

  return displayed;
}

const AISummary = ({ section }) => {
  const content = useMemo(() => crispSummaries[section] ?? null, [section]);
  const [phase, setPhase] = useState('thinking');
  const [showBullets, setShowBullets] = useState(false);

  const introText = useTypewriter(
    content?.intro ?? '',
    phase === 'speaking' || phase === 'done'
  );
  const agentState =
    phase === 'thinking' ? 'thinking' : phase === 'speaking' ? 'speaking' : 'idle';

  useEffect(() => {
    if (!content) return undefined;
    setPhase('thinking');
    setShowBullets(false);

    const thinkTimer = setTimeout(() => setPhase('speaking'), 700);
    const speakTimer = setTimeout(
      () => setPhase('done'),
      700 + content.intro.length * TYPE_SPEED + 300
    );
    const bulletTimer = setTimeout(
      () => setShowBullets(true),
      700 + content.intro.length * TYPE_SPEED + 500
    );

    return () => {
      clearTimeout(thinkTimer);
      clearTimeout(speakTimer);
      clearTimeout(bulletTimer);
    };
  }, [content, section]);

  if (!content) return null;

  const introDone = introText.length >= content.intro.length;

  return (
    <div className="ai-overview ai-overview--crisp">
      <div className="ai-overview__header">
        <div className="ai-overview__agent-wrap">
          <AIAgent state={agentState} size="md" />
        </div>
        <div className="ai-overview__title-block">
          <div className="ai-overview__badge">
            <span className="ai-sparkle" aria-hidden="true">✦</span>
            AI Overview
          </div>
          <p className="ai-overview__status">
            {phase === 'thinking' && 'Summarizing…'}
            {phase === 'speaking' && 'Writing summary…'}
            {phase === 'done' && 'Quick snapshot — not full details'}
          </p>
        </div>
      </div>

      <div className="ai-overview__intro ai-overview__intro--crisp">
        <p>
          {introText}
          {!introDone && phase !== 'thinking' && <span className="ai-cursor">|</span>}
        </p>
      </div>

      {showBullets && phase === 'done' && (
        <div className="ai-overview__highlights">
          <p className="ai-overview__highlights-label">Key points</p>
          <ul className="ai-overview__highlight-list">
            {content.highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {content.footnote && (
            <p className="ai-overview__footnote">{content.footnote}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AISummary;
