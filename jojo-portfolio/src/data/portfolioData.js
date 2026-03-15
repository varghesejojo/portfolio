// data.js
export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export const SKILLS = {
  Frontend: [
    { name: "React.js", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Bootstrap", color: "#7952B3" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
  ],
  Backend: [
    { name: "Python", color: "#3776AB" },
    { name: "Django", color: "#44B78B" },
    { name: "DRF", color: "#A30000" },
    { name: "REST API", color: "#FF6C37" },
  ],
  Mobile: [
    { name: "Flutter", color: "#54C5F8" },
    { name: "Dart", color: "#0175C2" },
  ],
  Databases: [
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MySQL", color: "#4479A1" },
  ],
  Tools: [
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#aaa" },
    { name: "Postman", color: "#FF6C37" },
    { name: "Selenium", color: "#43B02A" },
    { name: "BeautifulSoup", color: "#888" },
  ],
  Other: [
    { name: "SEO", color: "#34A853" },
    { name: "Web Scraping", color: "#FF9800" },
    { name: "WordPress", color: "#21759B" },
  ],
};

export const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Dee & Lee Limited",
    period: "2023 – Present",
    type: "Full-time",
    colorA: "#06b6d4",
    colorB: "#3b82f6",
    projects: [
      {
        name: "Abhivridhi Exam Platform",
        desc: "Built a comprehensive exam system for NEET, JEE & KEAM. Developed the React web app and Flutter mobile app, along with Django REST APIs for dynamic question generation and exam workflows.",
        tags: ["React", "Flutter", "Django REST", "PostgreSQL"],
      },
      {
        name: "Medzen Hospital System",
        desc: "Full-featured hospital management system with appointment booking, patient records management, and billing — powered by Django and MongoDB.",
        tags: ["Django", "MongoDB", "Python", "REST API"],
      },
    ],
  },
  {
    role: "Python Django Developer Intern",
    company: "Inmakes Infotech",
    period: "2022 – 2023",
    type: "Internship",
    colorA: "#8b5cf6",
    colorB: "#7c3aed",
    projects: [],
  },
];

export const PROJECTS = [
  {
    name: "WE SHOP",
    desc: "Full-featured e-commerce platform built with Django. Includes product listings, cart management, user authentication, and order tracking.",
    tags: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/varghesejojo",
    accentA: "rgba(6,182,212,0.15)",
    accentB: "rgba(59,130,246,0.08)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    name: "TODO App",
    desc: "Clean and responsive task management application. Supports task creation, completion tracking, filtering, and local persistence.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/varghesejojo",
    accentA: "rgba(139,92,246,0.15)",
    accentB: "rgba(124,58,237,0.08)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    name: "Indian Music Player",
    desc: "Browser-based music player featuring a curated library of Indian music. Custom audio controls, playlist management, and a sleek modern UI.",
    tags: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
    github: "https://github.com/varghesejojo",
    accentA: "rgba(249,115,22,0.15)",
    accentB: "rgba(239,68,68,0.08)",
    border: "rgba(249,115,22,0.25)",
  },
];

export const TECH_STACK = [
  { name: "React.js", emoji: "⚛️" },
  { name: "Django", emoji: "🐍" },
  { name: "Flutter", emoji: "💙" },
  { name: "Python", emoji: "🐍" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "MySQL", emoji: "🗄️" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "Tailwind", emoji: "🎨" },
  { name: "Git", emoji: "📦" },
  { name: "Postman", emoji: "📮" },
  { name: "Bootstrap", emoji: "🅱️" },
  { name: "Selenium", emoji: "🤖" },
  { name: "REST API", emoji: "🔌" },
];