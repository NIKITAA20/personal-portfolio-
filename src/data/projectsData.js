/** Curated featured projects — domains: mern | data-science | analytics | systems */
export const PROJECT_DOMAINS = [
  { id: 'all', label: 'All' },
  { id: 'mern', label: 'MERN' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'systems', label: 'Systems' },
];

export const projectsData = [
  {
    title: 'Axon (WorkPlace) — AI Workspace Platform',
    href: 'https://github.com/NIKITAA20/WorkPlace',
    demo: 'https://workplace-rouge.vercel.app/',
    domain: 'mern',
    skills: ['Next.js', 'Express', 'MongoDB', 'TypeScript', 'Groq AI', 'Gmail API', 'JWT'],
    points: [
      'AI workspace that syncs Gmail, extracts tasks with priority & deadlines, and organizes them in a Kanban pipeline.',
      'Smart follow-up drafts, Excel analysis with AI insights, Google OAuth, and an admin panel.',
    ],
  },
  {
    title: 'CodeSync — Real-Time Collaborative Coding',
    href: 'https://github.com/NIKITAA20/CodeSync',
    demo: 'https://codesyncnikita.vercel.app/',
    domain: 'mern',
    skills: ['React', 'Node.js', 'Socket.IO', 'Redis', 'PostgreSQL', 'Prisma', 'Judge0'],
    points: [
      'Real-time Monaco editor with live cursors, rooms, roles, chat, and GitHub OAuth + push-to-repo.',
      'Sandboxed multi-language execution via Judge0; Redis-backed presence for online users.',
    ],
  },
  {
    title: 'NapChat — Real-Time Chat & Video Calling',
    href: 'https://github.com/NIKITAA20/NAPCHAT-CHAT-APP',
    demo: 'https://napchat-chat-app.vercel.app/',
    domain: 'mern',
    skills: ['React', 'Node.js', 'Socket.IO', 'WebRTC', 'Redis', 'Express'],
    points: [
      'Private messaging, online presence, unread badges, and HD peer-to-peer video/audio calls.',
      'WebRTC with STUN/TURN, in-call chat, mute/camera toggles, and Redis-backed history.',
    ],
  },
  {
    title: 'Complaint Analysis — MongoDB Aggregation Dashboard',
    href: 'https://github.com/NIKITAA20/COMPLAINT-ANALYSIS-MONGODB-PIPELINE-IMPLEMENTATION',
    demo: 'https://complaint-analysis-mongodb-pipeline.vercel.app/',
    domain: 'mern',
    skills: ['MongoDB', 'Express', 'React', 'Mongoose', 'Recharts', 'Aggregation'],
    points: [
      'Full-stack dashboard where every chart is powered by a real MongoDB aggregation pipeline.',
      'Summary, grouping, and status breakdowns — deployed on Vercel + MongoDB Atlas.',
    ],
  },
  {
    title: 'Marketing Analytics & Campaign Intelligence',
    href: 'https://github.com/NIKITAA20/marketing-analysis-and-campaign-intelligence-platform',
    demo: null,
    domain: 'data-science',
    skills: ['Python', 'SQL', 'Prophet', 'Scikit-learn', 'Pandas', 'Streamlit', 'ETL'],
    points: [
      '1M+ ad records through ETL → SQL → EDA → ML → Streamlit → budget recommendations.',
      'Prophet forecasting, Isolation Forest anomalies, and K-Means campaign clustering.',
    ],
  },
  {
    title: 'AI Traffic Violation Detection System',
    href: 'https://github.com/NIKITAA20/CV-traffic-violation-detection-project',
    demo: null,
    domain: 'data-science',
    skills: ['YOLOv8', 'DeepSORT', 'OpenCV', 'Python', 'MongoDB', 'Streamlit'],
    points: [
      'Detects red-light, wrong-lane, and overspeeding with YOLOv8 + DeepSORT tracking.',
      'Auto calibration, MongoDB logging of snapshots, and a Streamlit monitoring dashboard.',
    ],
  },
  {
    title: 'Customer Intelligence & Business Analytics',
    href: 'https://github.com/NIKITAA20/customer-intelligence-and-bussiness-analytics',
    demo: null,
    domain: 'analytics',
    skills: ['Python', 'PostgreSQL', 'RFM', 'CLV', 'Scikit-learn', 'Streamlit', 'SQL'],
    points: [
      '100K+ Olist orders — star schema, 95 SQL queries, RFM/CLV features, and churn models.',
      'Jupyter + Streamlit dashboards for segments, revenue, and business recommendations.',
    ],
  },
  {
    title: 'Investor Behavior — Power BI Dashboard',
    href: 'https://github.com/NIKITAA20/PowerBi-Project',
    demo: null,
    domain: 'analytics',
    skills: ['Power BI', 'DAX', 'Power Query', 'Survey Analytics'],
    points: [
      'Interactive Power BI dashboard on investor survey data.',
      'Risk tolerance, preferences, and demographic trends turned into actionable insights.',
    ],
  },
  {
    title: 'Shopping Trends Analysis (AICTE)',
    href: 'https://github.com/NIKITAA20/AICTE-INTERN-SHOPPING-TRENDS',
    demo: null,
    domain: 'analytics',
    skills: ['Python', 'EDA', 'Pandas', 'Scikit-learn', 'Power BI'],
    points: [
      'Consumer behavior EDA, statistical analysis, and predictive modeling.',
      'Seasonal/demographic insights presented with Power BI dashboards.',
    ],
  },
  {
    title: 'Node.js Cluster + Worker Threads + Redis',
    href: 'https://github.com/NIKITAA20/nodejs-task-1',
    demo: null,
    domain: 'systems',
    skills: ['Node.js', 'Worker Threads', 'Cluster', 'Redis', 'Caching'],
    points: [
      'Non-blocking CPU-heavy work using Worker Threads and Cluster across cores.',
      'Redis caches heavy results so repeats serve from cache instead of recalculating.',
    ],
  },
  {
    title: 'Kafka + Redis Streaming Demo',
    href: 'https://github.com/NIKITAA20/kafka-redis-demo',
    demo: null,
    domain: 'systems',
    skills: ['Kafka', 'Redis', 'Node.js', 'Event Streaming'],
    points: [
      'Producer → Kafka → Consumer → Redis workflow for real-time message streaming.',
      'Core pattern behind payment/order and backend event pipelines.',
    ],
  },
  {
    title: 'Prisma + Express User API',
    href: 'https://github.com/NIKITAA20/prisma-demo',
    demo: null,
    domain: 'systems',
    skills: ['Prisma', 'Express', 'PostgreSQL', 'REST API', 'Migrations'],
    points: [
      'Type-safe CRUD API with Prisma schema, migrations, and modular routes.',
      'Hands-on ORM modeling against PostgreSQL with Prisma Client.',
    ],
  },
];
