import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: backend,
  },
  {
    title: "Full-Stack Web",
    icon: web,
  },
  {
    title: "Python / Django",
    icon: creator,
  },
  {
    title: "AI / ML Projects",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: backend,
  },
  {
    name: "Django",
    icon: web,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQLite / SQL",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: docker,
  },
  {
    name: "VS Code",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Softpro India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Worked on Quality Product Analysis using real-world datasets.",
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) using Python.",
      "Extracted actionable insights to support product quality improvement and business decision-making.",
      "Gained hands-on experience with Python-based data analysis workflows.",
    ],
  },
  {
    title: "B.Tech - Computer Science Engineering",
    company_name: "Babu Banarasi Das Northern India Institute of Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - May 2026",
    points: [
      "Final-year undergraduate (SGPA: 7.2/10).",
      "Relevant coursework: Data Structures, Algorithms, Databases, Machine Learning.",
    ],
  },
  {
    title: "Intermediate (CBSE)",
    company_name: "Loyola High School",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2020 - May 2022",
    points: [
      "Completed Intermediate education (CBSE).",
    ],
  },
  {
    title: "High School (CBSE)",
    company_name: "Nalanda Heritage School",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Mar 2020",
    points: [
      "Completed High School (CBSE).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-Powered Travel Application",
    description:
      "AI-based travel platform with an intelligent chatbot and user matchmaking based on shared interests and travel preferences. Focused on scalable backend architecture and personalized user experience.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and order handling. Built with Django and SQLite, focusing on performance, usability, and secure data handling.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quality Product Analysis",
    description:
      "Data analysis project applying EDA and visualization techniques to interpret real-world product quality datasets and provide actionable insights to improve product standards.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "data-analysis",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
