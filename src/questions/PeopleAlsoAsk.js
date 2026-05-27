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
      'Her projects include an AI-Powered Resume Builder, Traffic Violation Detection System, and Agricultural Supply Chain Management using Blockchain, IoT, and AI.',
  },
  {
    question: 'Which certifications has Nikita completed?',
    answer:
      'She has completed certifications in Data Analytics with Power BI, AI & ML Foundations, and Web Development using React and Firebase.',
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
