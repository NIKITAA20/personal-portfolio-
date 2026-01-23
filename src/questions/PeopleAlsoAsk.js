import React, { useState } from "react";
import "./PeopleAlsoAsk.css";

const faqList = [
  {
    question: "What is Nikita's highest qualification?",
    answer:
      "Nikita holds a Bachelor of Engineering in Computer Engineering from the University of Mumbai with an impressive CGPA of 8.98.",
  },
  {
    question: "Which technical skills does Nikita excel at?",
    answer:
      "Nikita is proficient in Python, React, MongoDB, Power BI, C++, and Data Analytics, along with a strong foundation in AI/ML concepts.",
  },
  {
    question: "What are some of Nikita's key projects?",
    answer:
      "Her projects include an AI-Powered Resume Builder, Traffic Violation Detection System, and Agricultural Supply Chain Management using Blockchain, IoT, and AI.",
  },
  {
    question: "Which certifications has Nikita completed?",
    answer:
      "She has completed certifications in Data Analytics with Power BI, AI & ML Foundations, and Web Development using React and Firebase.",
  },
  {
    question: "What extracurricular achievements does Nikita have?",
    answer:
      "Nikita was the Sports Captain during SSC and actively participates in hackathons, tech fests, and innovation challenges.",
  },
  {
    question: "Where did Nikita complete her SSC?",
    answer:
      "She completed her SSC from St. Anthony’s Convent School with 93.40%, excelling in both academics and leadership.",
  },
];

const PeopleAlsoAsk = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-card">
      <h3>People also ask</h3>
      {faqList.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "active" : ""}`}
          onClick={() => toggle(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PeopleAlsoAsk;
