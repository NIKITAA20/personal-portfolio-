import React, { useEffect, useState } from "react";
import './AISummary.css';

const profileData = {
  education: [
    {
      degree: "Bachelor of Engineering (Computer)",
      institution: "University of Mumbai – VCET",
      year: "2023–2027",
      cgpa: "8.98/10",
      highlights: [
        "Hands-on projects in Web Development, AI, and Data Analytics",
        "Participated in hackathons and technical fests",
        "Experienced in MySQL, MongoDB, AutoCAD, Power BI, Java, Firebase"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Science Stream)",
      institution: "Annasaheb Vartak College, Vasai",
      year: "2021–2023",
      cgpa: "80%",
      highlights: [
        "Deep interest in Computer Science & Programming",
        "Mastered C++, HTML, and CSS",
        "Demonstrated analytical thinking and creativity"
      ]
    },
    {
      degree: "Secondary School Certificate",
      institution: "St. Anthony's Convent School, Vasai",
      year: "2008–2021",
      cgpa: "93.40%",
      highlights: [
        "Sports Captain – leadership and teamwork",
        "Strong foundation in mathematics and logical reasoning",
        "Consistency, discipline, and time management"
      ]
    }
  ],
  experience: [
    {
      title: "MERN Intern | Vervali Systems Ltd Pvt",
      period: "Dec 2025 – Present",
      summary: "Worked on Node.js backend, real-time features, caching, and search optimizations."
    },
    {
      title: "Data Analyst Intern | Unified Mentor",
      period: "Jun 2025 – Dec 2025",
      summary: "Analyzed structured and unstructured data using Python, SQL, and Power BI; improved reporting efficiency by 25%."
    },
    {
      title: "Power BI Intern | Cognifyz Technologies",
      period: "Jun 2025 – Jul 2025",
      summary: "Designed dashboards with DAX & Power Query; improved campaign targeting by 30%."
    },
    {
      title: "Data Analyst Intern | AICTE – Edunet Foundation",
      period: "Nov 2024 – Dec 2024",
      summary: "Performed EDA on 5,000+ transactions; reduced analysis time by 40%."
    },
    {
      title: "Python Developer Intern | Octanet Tech Labs",
      period: "Aug 2024 – Nov 2024",
      summary: "Built console-based ATM system; applied modular Python programming."
    }
  ],
  // projects, skills can be added similarly
};

const AISummary = ({ section }) => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (!profileData[section]) return;

    let generatedSummary = [];

    if (section === "education") {
      generatedSummary = profileData.education.map((edu, index) => ({
        id: index,
        title: `${edu.degree} (${edu.institution}, ${edu.year})`,
        details: edu.highlights.map(h => `• ${h}`),
        cgpa: edu.cgpa
      }));
    } else if (section === "experience") {
      generatedSummary = profileData.experience.map((exp, index) => ({
        id: index,
        title: exp.title,
        details: [exp.summary],
        cgpa: null
      }));
    }
    // Future: Add projects, skills, etc.

    setSummary(generatedSummary);
  }, [section]);

  if (!profileData[section]) return null;

  return (
    <div className="ai-summary-container">
      <h3>AI SUMMARY</h3>
      {summary.map((item) => (
        <div key={item.id} className="education-card">
          <h4>
            {item.title} {item.cgpa && <span className="cgpa">({item.cgpa})</span>}
          </h4>
          <ul>
            {item.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AISummary;
