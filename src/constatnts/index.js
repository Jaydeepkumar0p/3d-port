import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

/* -------------------------- Skills Section -------------------------- */
export const skills = [
    // Frontend Skills
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },

    // Backend Skills
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },

    // Database & State Management
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    // Version Control & Tools
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    // Animation & UI Enhancements
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
];

/* -------------------------- Social Links -------------------------- */
export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/Jaydeepkumar0p",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/jaideep-kumar-000b5424b/",
    },
];

/* -------------------------- Projects -------------------------- */
export const projects = [
    {
        iconUrl: motion,
        theme: "btn-back-red",
        name: "3D Portfolio using Three.js",
        description:
            " As a freelancer I have Developed an interactive 3D portfolio showcasing projects, leveraging Three.js for immersive visual effects.",
        link: "https://port-shatakshi.vercel.app/",
    },
    {
        iconUrl:motion,
        theme:"btn-back-red",
        description:"as mern stack developer i build realtime chat application using mongodb as database and express as backend framework ,react and for real time communication i used socket i.0",
        link:"https://full-stack-chatapp-jwu6.onrender.com/"
            
    },
];

export const experiences = [
    {
        title: "React.js Developer",
        icon: react,
        iconBg: "#accbe1",
        date: "March 2022 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        icon: nextjs,
        iconBg: "#fbc3bc",
        date: "Jan 2023- Feb 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "tcs",
        icon: mongodb,
        iconBg: "#b7e4c7",
        date: "jan 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];
