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
    flowfinance,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "I.T Technician",
      company_name: "Elroid's Enterprise",
      icon: ee,
      iconBg: "#383E56",
      date: "Nov 2016 - Feb 2023",
      points: [
        "Setting up workstations with computers and necessary peripheral devices.",
        "Checking computer hardware to ensure functionality.",
        "Installing and configuring appropriate software and functions according to specifications.",
        "Developing and maintaining local networks in ways that optimise performance.",
        "Ensuring security and privacy of networks and computer systems", 
        "Providing orientation and guidance to users on how to operate new software and computer equipment.",
        "Performing troubleshooting to diagnose and resolve problems.",
      ],
    },
    {
      title: "Python & Math Tutor",
      company_name: "BrightSparkz Tutors (part-time)",
      icon: brightsparkz,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
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