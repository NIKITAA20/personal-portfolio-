import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PeopleAlsoAsk.css';

const faqList = [
  {
    question: "What is Nikita's highest qualification?",
    answer:
      'Nikita holds a Bachelor of Engineering in Computer Engineering from the University of Mumbai with an impressive CGPA of 8.98.',
  },
  {
    question: 'Which technical skills does Nikita excel at?',
    answer:
      'Nikita is proficient in Python, React, MongoDB, Power BI, C++, and Data Analytics, along with a strong foundation in AI/ML concepts.',
  },
  {
    question: "What are some of Nikita's key projects?",
    answer:
      'Highlights include Axon (AI Gmail workspace), CodeSync (real-time collaborative coding), NapChat (chat + WebRTC calls), a MongoDB complaint analytics dashboard, YOLO traffic-violation detection, Opportune AI career assistant, and end-to-end marketing/customer intelligence platforms — all on github.com/NIKITAA20.',
  },
  {
    question: 'Which certifications has Nikita completed?',
    answer:
      'Credentials include DB Academy (Database Developer, Practitioner & Administrator), HP LIFE Data Science & Analytics, Infosys Springboard Java, Forage simulations with Accenture and JPMorgan Chase, SQL Bootcamp, DevTown C++/DSA, and MLSC–VCET Git & Python challenges.',
  },
  {
    question: 'What extracurricular achievements does Nikita have?',
    answer:
      'Nikita was the Sports Captain during SSC and actively participates in hackathons, tech fests, and innovation challenges.',
  },
  {
    question: 'Where did Nikita complete her SSC?',
    answer:
      'She completed her SSC from St. Anthony’s Convent School with 93.40%, excelling in both academics and leadership.',
  },
];

const PeopleAlsoAsk = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-card">
      <h3>
        <span className="faq-card__sparkle">✦</span>
        People also ask
      </h3>
      {faqList.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
          onClick={() => toggle(index)}
        >
          <div className="faq-question">
            {item.question}
            <motion.span
              className="arrow"
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              ▼
            </motion.span>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                <div className="faq-answer__inner">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default PeopleAlsoAsk;
