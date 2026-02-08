/**
 * Single source of truth for portfolio content.
 * Edit this file only to update site content.
 */

export const personalInfo = {
  name: "Aravinth Raj J",
  role: "Senior Front-End Developer",
  tagline: "Building scalable, user-focused web applications with React & modern JavaScript",
  email: "aravinthraj42@gmail.com",
  phone: "+91-8124483546",
  location: "India",
  avatar: "/Aravinth_Profile.jpg",
  resumeUrl: "/Aravinth_Resume.pdf",
  /** Hero section: set to your image URL when ready (e.g. Unsplash link or "/hero-bg.jpg" for public/hero-bg.jpg). Leave empty to use gradient only. */
  heroBackgroundImage: "",
  /** Optional: different image for dark mode. Set to null to use same as heroBackgroundImage. */
  heroBackgroundImageDark: null,
};

export const about = {
  headline: "About Me",
  summary: `Senior Front-End Developer with 4.7+ years of experience designing and delivering scalable, user-focused web applications using React JS, Next JS and modern JavaScript frameworks. Adept at responsive UI development, state management, and performance optimization. Certified in multiple web technologies and recognized for strong problem solving, mentoring, and driving efficient, maintainable solutions in agile environments.`,
};

export const skills = {
  headline: "Tech Stack & Skills",
  categories: [
    {
      name: "Technical",
      items: [
        "React.js",
        "React Hooks",
        "Redux",
        "JavaScript (ES6+)",
        "React-Query",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "HTML5",
        "CSS3",
        "SASS",
        "Bootstrap",
        "Responsive Web Design",
        "MUI",
        "Tailwind CSS",
        "JSP",
        "Gen AI",
        "Prompting AI",
        "Troubleshooting",
        "Production Bug Resolution",
      ],
    },
    {
      name: "Soft Skills",
      items: [
        "Agile Methodologies",
        "Problem Solving",
        "Analytical Thinking",
        "Communication",
        "Collaboration",
        "Knowledge Sharing",
        "Client Interaction",
      ],
    },
    {
      name: "Tools & IDE",
      items: [
        "Git",
        "GitHub",
        "Github Actions",
        "Jenkins",
        "Postman",
        "Swagger",
        "ESLint",
        "Splunk",
        "Rally",
        "React DevTools",
        "Chrome DevTools",
        "NPM",
        "Docker",
        "VS Code",
        "IntelliJ",
        "WebStorm",
        "Cursor AI",
        "GitHub Copilot",
        "Claude AI",
      ],
    },
    {
      name: "Platforms",
      items: ["Windows", "Mac", "Linux"],
    },
  ],
};

export const experience = [
  {
    id: "1",
    company: "Thought Minds",
    role: "Senior Software Engineer",
    duration: "Feb 2025 – Present",
    location: "",
    projects: [
      {
        name: "Fragomen Educational Services (FES)",
        techStack: ["React.js", "JavaScript", "MUI", "Tailwind", "Redux", "React Query", ".NET VB C#", "SQL", "AWS"],
        achievements: [
          "Built an agile, full-stack application from scratch, defining business flow, user flow and development strategy.",
          "Analyzed core business needs and implemented end-to-end UI and business logic.",
          "Owned module setup including state management, routing, and styling.",
          "Developed key features such as bulk operations and social media integration.",
          "Provided hands-on technical guidance to interns and junior developers by assigning tasks, monitoring progress, and offering full technical support to ensure timely, high-quality delivery.",
          "Accelerated delivery using AI-driven coding tools like Cursor and GitHub Copilot.",
        ],
      },
      {
        name: "ClearlyRated – Rating Website for Company and Customers",
        techStack: ["React.js", "JavaScript", "HTML", "CSS/SCSS"],
        duration: "Feb 2025 – Mar 2025",
        achievements: [
          "Redesigned the client website based on the provided Figma design, ensuring visually appealing user interface.",
          "Delivered 3-5 fully functional pages within a two-week sprint, maintaining high-quality standards.",
          "Ensured the complete responsiveness of the website across all devices by optimizing pages for various screen sizes.",
          "Provided guidance and mentorship to junior developers and interns, supporting their growth and assisting with their projects to ensure successful outcomes.",
        ],
      },
    ],
  },
  {
    id: "2",
    company: "Infosys",
    role: "System Engineer",
    duration: "Jul 2021 – Dec 2024",
    location: "",
    projects: [
      {
        name: "American Express – Card Service US Client",
        techStack: ["React.js", "JavaScript", "Java", "JSP"],
        achievements: [
          "Working in Agile Development Methodologies, directly interacting with Clients and Product Teams.",
          "Delivered 15+ new features using React Hooks and state Management ensuring 100% responsiveness.",
          "Managed React form data using state and props in both Functional and Class Components.",
          "Contributed numerous pull requests with 100% unit testing to the client's Git repository.",
          "Reviewed 20+ pull requests weekly, improving code quality and adherence to coding standards.",
          "Wrote unit tests for React components, achieving 100% test coverage with Jest and React Testing Library.",
          "Automated deployment processes using Jenkins CI/CD pipeline for seamless production rollouts.",
          "Resolved over 50+ production issues, minimizing downtime and ensuring client satisfaction.",
          "Managed Linux file systems, including PDF file movements and permission checks.",
          "Migrated legacy applications built on monolithic architecture using JSP to modern React-based UIs.",
          "Documented legacy application features to facilitate migration to React UI.",
          "Mentored 5+ junior developers, conducting knowledge-sharing sessions and improving team productivity.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "1",
    title: "Portfolio Website (Legacy)",
    description: "Designed and developed a professional personal portfolio website to showcase skills, projects, and certifications.",
    techStack: ["React JS", "CSS", "GitHub Pages"],
    highlights: [
      "Built using React JS for dynamic content rendering and CSS for responsive styling.",
      "Ensured mobile-first design, providing an optimal viewing experience across various devices.",
      "Incorporated best practices, improving usability for a wider audience.",
      "Deployed on GitHub Pages for easy public access and fast loading times.",
    ],
    link: "https://aravinthraj42.github.io/aravinth-profile-portfolio/",
    linkLabel: "Live Demo",
    demoUrl: "https://aravinthraj42.github.io/aravinth-profile-portfolio/",
  },
  {
    id: "2",
    title: "Hex Node Clone",
    description: "Developed a pixel-perfect responsive clone of a hexagonal-themed website, showcasing advanced UI design and implementation skills.",
    techStack: ["React JS", "CSS", "Netlify"],
    highlights: [
      "Built using React JS for component-based architecture and modern CSS techniques for styling.",
      "Recreated original layout and animations with precision, focusing on user experience and smooth interactions.",
      "Designed with cross-browser compatibility, ensuring consistent appearance across major web browsers.",
      "Deployed on Netlify for fast and reliable hosting, enabling quick access for reviewers and stakeholders.",
    ],
    link: "https://hex-node-clone.netlify.app/",
    linkLabel: "Live Demo",
    demoUrl: "https://hex-node-clone.netlify.app/",
  },
  {
    id: "3",
    title: "WhatsApp Commerce Platform",
    description: "Designed and developed a mobile-first WhatsApp-based commerce platform that enables local businesses to showcase products, manage carts, and receive customer orders directly via WhatsApp without requiring a traditional backend.",
    techStack: ["React JS", "Tailwind CSS", "MUI", "Formik", "Vercel/Netlify"],
    highlights: [
      "Built using React JS for component-based architecture and Tailwind CSS + MUI for modern, responsive UI design.",
      "Implemented a dynamic product catalog with multiple categories and items using a JSON-based data structure for easy scalability.",
      "Developed a cart system with add/remove functionality, real-time price calculation, and order summary.",
      "Integrated Formik for user data collection (name, phone, email, address, pincode) with validation.",
      "Implemented WhatsApp Click-to-Chat integration, automatically generating structured order messages and redirecting users to WhatsApp for seamless order placement.",
      "Designed with a mobile-first approach, ensuring optimal user experience across smartphones and tablets.",
      "Built reusable UI components such as Category Tabs, Product Cards, Cart View, and Order Form for maintainability and extensibility.",
      "Deployed as a static web application on cloud hosting platforms (Vercel/Netlify) for fast access and easy sharing with clients.",
    ],
    link: "https://go-delivery-mu.vercel.app/",
    linkLabel: "Go Delivery – Live Demo",
    demoUrl: "https://go-delivery-mu.vercel.app/",
    demos: [
      { label: "Go Delivery – Grocery & daily essentials", url: "https://go-delivery-mu.vercel.app/" },
      { label: "Jeyam Fancy Store – Fancy items & gifts", url: "https://jeyam-fancy-store.vercel.app/" },
    ],
  },
  {
    id: "4",
    title: "Current Portfolio Website",
    description: "A premium, modern personal portfolio built with Next.js App Router, featuring dark/light theme, glassmorphism UI, Framer Motion animations, and a single data source for all content. Includes an AI Assistant widget for profile intro.",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    highlights: [
      "Built with Next.js App Router (App Router) for optimal performance and SEO.",
      "Single source of truth (data.js) for all content — easy to edit and maintain.",
      "Dark + Light theme support with persistent preference via localStorage.",
      "Glassmorphism cards, gradient mesh background, and subtle grid overlay for a premium look.",
      "Section reveal animations and hover effects using Framer Motion.",
      "Fully responsive layout for desktop, tablet, and mobile.",
      "Floating AI Assistant widget (bottom-right) for quick profile intro — available while scrolling.",
      "Resume download, contact section with social links, and achievements/certifications showcase.",
      "Deployed on Vercel for fast global delivery and serverless hosting.",
    ],
    link: "#",
    linkLabel: "Live Demo",
    demoUrl: "#",
    demoPlaceholder: "Add your Vercel URL here after deployment",
  },
];

export const certifications = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/054b2c2bd6af"
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/dab281d59884"
  },
  {
    name: "Infosys Certified React JS Web Developer",
    issuer: "Infosys",
    link: null
  },
  {
    name: "Infosys Certified Front-End Web Developer",
    issuer: "Infosys",
    link: null
  },
  {
    name: "Infosys Global Agile Developer Certification",
    issuer: "Infosys",
    link: null
  },
];

export const awards = [
  "Thought Minds – The Creative Coder -React Frontend Excellence",
  "Thought Minds Super Squad – FES Team Q3 Excellence",
  "Thought Minds Team Excellence – FES Annual Awards",
  "Infosys DX Unit Rise Awards – Rookie of the Quarter",
  "Infosys Insta Awards – 100% Client Deliverables Achievement",
];

export const achievements = {
  headline: "Achievements & Certifications",
  certifications,
  awards,
  additional: [
    "Participated in Design Day Event, WONG DOODY Studio, Bangalore.",
    "Attended offline Workshop Series on Front-End Development, Bangalore DC.",
  ],
};

export const education = [
  {
    degree: "B.Sc. in Mathematics",
    institution: "Hindustan College of Arts and Science, Bharathiar University",
    location: "Coimbatore",
    duration: "2018 – 2021",
  },
  {
    degree: "M.C.A. – Master of Computer Application",
    institution: "Madras University (Distance Education)",
    location: "Chennai",
    duration: "2023 – 2025",
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aravinth-raj-developer", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/aravinthraj42", icon: "github" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/aravinthraj42", icon: "code" },
];

/** Profile & demo URLs for Contact/Footer or link sections */
export const profileLinks = [
  { name: "Portfolio (Legacy)", url: "https://aravinthraj42.github.io/aravinth-profile-portfolio/" },
  { name: "Hex Node Clone", url: "https://hex-node-clone.netlify.app/" },
  { name: "HackerRank – React Certificate", url: "https://www.hackerrank.com/certificates/iframe/054b2c2bd6af" },
  { name: "HackerRank – JavaScript Certificate", url: "https://www.hackerrank.com/certificates/iframe/dab281d59884" },
];

export const contact = {
  headline: "Get In Touch",
  subheadline: "Open to new opportunities and collaborations. Let's connect!",
  email: personalInfo.email,
  phone: personalInfo.phone,
};

/** AI Assistant mock messages for the intro chat */
export const aiAssistantMessages = [
  {
    id: "1",
    type: "bot",
    text: "Hi! I'm here to give you a quick tour of this portfolio.",
  },
  {
    id: "2",
    type: "bot",
    text: "This is Aravinth Raj J — a Senior Front-End Developer with 4.3+ years of experience in React, Next.js, and modern JavaScript.",
  },
  {
    id: "3",
    type: "bot",
    text: "Scroll down to explore his work experience at Thought Minds & Infosys, projects, skills, and certifications. Feel free to download his resume or reach out!",
  },
];
