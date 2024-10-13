import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
} from "../assets";
import codSoft from "../assets/company/codSoft.png"
import game from "../assets/company/game.png"
import unity from "../assets/company/unity.png"
import book from "../assets/company/book.png"
import express from "../assets/tech/express.png";
import cpp from "../assets/tech/cpp.png";
import canva from "../assets/tech/canva.png";
import AR from "../assets/AR discoveries.png";
import whack from "../assets/whack-a-mole.png";
import inventory from "../assets/book inventory.png";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Unity Game Developer",
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
    name: "HTML 5",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name:"Express JS",
    icon: express
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name:"unity",
    icon: unity,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "CodSoft",
    icon: codSoft,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Completed a one-month virtual internship focused on front-end web development.",
      "Showcased skills in HTML, CSS, and JavaScript, working on various web projects.",
      "Collaborated with cross-functional teams to develop efficient and responsive web designs.",
      "Utilized best practices for web development to ensure a smooth user experience."
    ],
  }
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
  }
];

const projects = [
  {
    name: "Whack-A-Mole Game",
    description: "A Unity-based game where players score points by hitting moles that randomly pop up, showcasing proficiency in game development using C#.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "unity",
        color: "pink-text-gradient",
      },
    ],
    image: whack,
    source_code_link: "https://github.com/rohit0235/whack_a_mole",
  },
  {
    name: "AR Discoveries",
    description: "An AR-based educational app designed to help primary students learn through interactive 3D models of animals, planets, and gadgets, enhancing learning engagement.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "vuforia",
        color: "green-text-gradient",
      },
      {
        name: "augmented reality",
        color: "pink-text-gradient",
      },
    ],
    image: AR,
    source_code_link: "https://github.com/amanrahangdale24/Augmented-reality-based-learning-for-primary-students",
  },
  {
    name: "Mini Book Inventory",
    description: "A full-featured MERN stack web application that allows users to browse, purchase books, and features an admin dashboard for managing books and orders, along with login and sign-up authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/amanrahangdale24/mini-book-inventory",
  },  
  
];

export { services, technologies, experiences, testimonials, projects };