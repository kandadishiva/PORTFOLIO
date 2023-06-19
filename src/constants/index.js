import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    baskethunt,
    aicte,
    carrent,
    jobit,
    tripguide,
    python,
    Java,
    c,
    sql,
    Django,
    machinelearning,
    epicure,
    dancestudio,
    digit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
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
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name:"Python",
      icon: python,
    },
    {
      name:"Java",
      icon: Java,
    },
    {
      name:"C",
      icon:c,
    },
    {
      name:"Django",
      icon: Django,
    },
    {
      name:"Sql",
      icon: sql,
    },
    {
      name:"Machine Learning",
      icon: machinelearning,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "It and Web Developer",
      company_name: "BasketHunt",
      icon: baskethunt,
      iconBg: "white",
      date: "April 2023 - June 2023",
      points: [
        "Developed a chat application using Node.js, firebase",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "AI and ML Virtual Internship",
      company_name: "AICTE",
      icon: aicte,
      iconBg: "#E6DEDD",
      date: "May 2023 - June 2023",
      points: [
        "Learnt about the various applications of AI and ML in the industry and how to implement them.",
        "Learnt baout aws cloud services and its applications in AI and ML",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Epicure",
      description:
        "I've developed a robust solution that allows users to pre-order their meals from any restaurant of their choice. By placing orders in advance, minimizing wait times and maximizing your dining enjoyment.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Aws",
          color: "pink-text-gradient",
        },
      ],
      image: epicure,
      liveserver_link: "https://epicure1.onrender.com/",
      source_code_link: "https://github.com/kandadishiva/FoodOrderingSystem-Epicure",
    },
    {
      name: "Dance Studio",
      description:
        "An online platform connecting aspiring dancers with choreographers. Offering a fun environment to learn and excel in various dance styles, with opportunities to participate in competitions.",
      tags: [
        {
          name: "Java,html,css",
          color: "blue-text-gradient",
        },
        {
          name: "Jsp",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "pink-text-gradient",
        },
      ],
      image: dancestudio,
      liveserver_link: "https://github.com/kandadishiva/DanceStudio--Online-Lms-Protel-For-DanceScholl",
      source_code_link: "https://github.com/kandadishiva/DanceStudio--Online-Lms-Protel-For-DanceScholl",
    },
    {
      name: "Digit Classification",
      description:
        "Handwritten Digit Recognition Web App: Draw a digit on the interface, and the integrated model predicts the number in real-time. Demonstrates machine learning and web development integration.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: digit,
      liveserver_link: "https://github.com/kandadishiva/MNIST-HandWrittenDigitClassification",
      source_code_link: "https://github.com/kandadishiva/MNIST-HandWrittenDigitClassification",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };