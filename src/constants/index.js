import {
    mobile,
    backend,
    creator,
    web,
    python,
    csharp,
    javascript,
    django,
    postgresql,
    mysql,
    html,
    css,
    bootstrap,
    git,
    docker,
    brightsparkz,
    ee,
    shoecity,
    flowfinance,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
    id: "experience",
    title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sales Consultant & Merchandiser",
      company_name: "Shoe City",
      icon: shoecity,
      iconBg: "#383E56",
      date: "2019 (casual)",
      points: [
        "Build and maintain strong relationships with clients through effective communication and understanding of their needs.",
        "Conduct compelling and persuasive sales presentations to potential clients.",
        "Provide exceptional customer service before, during, and after the sales process.",
        "Monitor and manage inventory levels to prevent stockouts or overstock situations.",
        "Ensure accurate and up-to-date pricing information is displayed for all products.",
      ],
    },
    {
      title: "I.T Technician",
      company_name: "Elroid's Enterprise",
      icon: ee,
      iconBg: "#383E56",
      date: "Nov 2016 - Feb 2023 (full-time)",
      points: [
        "Setting up workstations with computers and necessary peripheral devices.",
        "Stay informed about the features, benefits, and specifications of the products or services offered.",
        "Continuously update knowledge on industry trends and competitive offerings",
        "Provide technical support to end-users, addressing hardware and software-related inquiries.",
        "Communicate technical solutions in a clear and understandable manner.",
      ],
    },
    {
      title: "Python & Math Tutor",
      company_name: "BrightSparkz Tutors",
      icon: brightsparkz,
      iconBg: "#E6DEDD",
      date: "June 2023 - Nov 2023 (part-time)",
      points: [
        "Teach Python data structures and algorithms.",
        "Encourage good programming principles.",
        "Teach pure mathematics.",
        "Present and teach in google meetings.",
        "Review and document learner progress.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Flow",
      description:
        "Web-based platform that allows users to manage and visualize their incomes, expenses and investments.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: flowfinance,
      live_link: "https://google.com/",
      source_code_link: "https://github.com/ethandiedericks/flow",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Portfolio website featuring my projects and experience with technologies like React.js, Three.js, Email JS, Vite, and Tailwind CSS.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      live_link: "https://google.com/",
      source_code_link: "https://github.com/ethandiedericks/three-dee-portfolio",
    },
     
    
  ];
  
  export { services, technologies, experiences, projects };