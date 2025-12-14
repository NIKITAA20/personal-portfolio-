// AISummary.jsx
import React, { useEffect, useState } from "react";
import './AISummary.css';

const profileData = {
  name: "Nikita",
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
  ]
};

const AISummary = ({ section }) => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    if (section === "education") {
      const generatedSummary = profileData.education.map((edu, index) => ({
        id: index,
        title: `${edu.degree} (${edu.institution}, ${edu.year})`,
        details: edu.highlights.map((h, i) => `• ${h}`),
        cgpa: edu.cgpa
      }));
      setSummary(generatedSummary);
    }
    // Add other sections if needed
  }, [section]);

  if (section !== "education") return null;

  return (
    <div className="ai-summary-container">
      <h3>AI SUMMARY</h3> {/* Renamed header */}
      {summary.map(edu => (
        <div key={edu.id} className="education-card">
          <h4>{edu.title} <span className="cgpa">({edu.cgpa})</span></h4>
          <ul>
            {edu.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AISummary;
