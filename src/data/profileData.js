export const profileData = {
  education: [
    {
      degree: 'B.E. Computer Engineering',
      institution: 'University of Mumbai – VCET',
      year: '2023–2027',
      score: '8.98/10 CGPA',
      highlights: [
        'Web Development, AI & Data Analytics projects',
        'Hackathons & technical fests',
        'MySQL, MongoDB, Power BI, Java, Firebase',
      ],
    },
    {
      degree: 'HSC (Science)',
      institution: 'Annasaheb Vartak College, Vasai',
      year: '2021–2023',
      score: '80%',
      highlights: [
        'C++, HTML, CSS fundamentals',
        'Strong analytical & presentation skills',
      ],
    },
    {
      degree: 'SSC',
      institution: "St. Anthony's Convent School, Vasai",
      year: '2008–2021',
      score: '93.40%',
      highlights: [
        'Sports Captain – leadership & teamwork',
        'Mathematics & logical reasoning foundation',
      ],
    },
  ],
  experience: [
    {
      title: 'MERN Intern',
      company: 'Vervali Systems Ltd Pvt',
      period: 'Dec 2025 – Present',
      summary:
        'Node.js backend with Kafka, Redis, Socket.IO & Elasticsearch — real-time features, caching & search optimization.',
    },
    {
      title: 'Data Analyst Intern',
      company: 'Unified Mentor',
      period: 'Jun – Dec 2025',
      summary:
        'Python, SQL & Power BI pipelines; automated dashboards improved reporting efficiency by 25%.',
    },
    {
      title: 'Power BI Intern',
      company: 'Cognifyz Technologies',
      period: 'Jun – Jul 2025',
      summary:
        'DAX & Power Query dashboards for 1,000+ survey responses; improved campaign targeting by 30%.',
    },
    {
      title: 'Data Analyst Intern',
      company: 'AICTE – Edunet Foundation',
      period: 'Nov – Dec 2024',
      summary:
        'EDA on 5,000+ transactions with clustering & Apriori; cut analysis time by 40%.',
    },
    {
      title: 'Python Developer Intern',
      company: 'Octanet Tech Labs',
      period: 'Aug – Nov 2024',
      summary:
        'Console ATM system with modular Python; reduced code redundancy by 35%.',
    },
  ],
  skills: {
    overview:
      'Nikita blends full-stack development (React, Node.js, MongoDB) with data analytics (Python, SQL, Power BI) and modern infra (Kafka, Redis, Socket.IO). Strong in problem-solving, dashboards, and collaborative delivery.',
    groups: [
      { label: 'Languages', items: ['Python', 'Java', 'C++', 'SQL'] },
      { label: 'Web & Backend', items: ['React', 'Node.js', 'Express', 'MongoDB'] },
      { label: 'Data & BI', items: ['Power BI', 'Pandas', 'NumPy', 'Excel'] },
      { label: 'Tools', items: ['Git', 'Kafka', 'Redis', 'Firebase'] },
    ],
  },
};

/** Crisp AI Overview — short intro + key bullets only */
export const crispSummaries = {
  education: {
    intro:
      'B.E. Computer Engineering at VCET (Mumbai University), CGPA 8.98. Strong SSC (93.4%) & HSC (80%) with focus on programming and analytics.',
    highlights: [
      'Currently at VCET — AI, web & data analytics projects',
      'CGPA 8.98/10 · active in hackathons',
      'Stack: MySQL, MongoDB, Power BI, Java',
    ],
    footnote: 'See full timeline in results →',
  },
  experience: {
    intro:
      '5 internships across MERN backend, data analytics & Power BI — hands-on with real-time systems, dashboards, and Python automation.',
    highlights: [
      'MERN @ Vervali — Kafka, Redis, Socket.IO, Elasticsearch',
      'Data Analyst @ Unified Mentor — 25% faster reporting',
      'Power BI @ Cognifyz — 1K+ survey insights, +30% targeting',
      'Earlier: EDA (5K rows), Python ATM project',
    ],
    footnote: 'Full role details in results →',
  },
  skills: {
    intro:
      'Full-stack + data profile: builds web apps and analytics dashboards, comfortable from SQL to React/Node.',
    highlights: [
      'Languages: Python, Java, C++, SQL',
      'Web: React, Node.js, Express, MongoDB',
      'Data: Power BI, Pandas, Excel, EDA',
      'Infra: Git, Kafka, Redis, Firebase',
    ],
    footnote: 'Proficiency chart below →',
  },
};

export const overviewIntros = crispSummaries;
