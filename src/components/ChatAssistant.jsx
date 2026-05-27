import React, { useEffect, useState } from 'react';
import { MdClose, MdSmartToy } from 'react-icons/md';
import './ChatAssistant.css';

const FAQ = [
  {
    q: 'What is Nikita\'s background?',
    a: 'Nikita is a B.E. Computer Engineering student at VCET (Mumbai University) with a 8.98 CGPA, specializing in data analytics and full-stack development.',
  },
  {
    q: 'What are her top skills?',
    a: 'Python, React, Node.js, Power BI, SQL, and data visualization. She also works with Kafka, Redis, and MongoDB.',
  },
  {
    q: 'Any internship experience?',
    a: 'Yes — 5 internships including MERN at Vervali Systems, Data Analyst at Unified Mentor, and Power BI at Cognifyz.',
  },
  {
    q: 'How can I hire her?',
    a: 'Email nikitasolanki767@gmail.com, connect on LinkedIn, or visit the Contact page to book a call.',
  },
];

function useTypewriter(text, active) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!active || !text) {
      setOut('');
      return undefined;
    }
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [text, active]);
  return out;
}

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const answer = activeIdx !== null ? FAQ[activeIdx].a : '';
  const typed = useTypewriter(answer, activeIdx !== null);

  return (
    <>
      <button
        type="button"
        className={`chat-fab ${open ? 'chat-fab--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Ask about Nikita"
      >
        {open ? <MdClose /> : <MdSmartToy />}
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-panel__head">
            <span className="chat-panel__sparkle">✦</span>
            <div>
              <strong>Ask about Nikita</strong>
              <p>Pick a question below</p>
            </div>
          </div>

          <div className="chat-panel__questions">
            {FAQ.map((item, i) => (
              <button
                key={item.q}
                type="button"
                className={`chat-panel__q ${activeIdx === i ? 'chat-panel__q--active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {item.q}
              </button>
            ))}
          </div>

          {activeIdx !== null && (
            <div className="chat-panel__answer">
              <p>{typed}{typed.length < answer.length && <span className="chat-cursor">|</span>}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
