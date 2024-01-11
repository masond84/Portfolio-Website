import { meta, shopify, starbucks, tesla, HPC, Tampa, codakid, drobots } from "../assets/images";
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
    typescript,
    django,
    excel,
    python,
    DealCloud,
    gradcap,
    chart,
    realestate,
    mental
} from "../assets/icons";

// SKILLS
export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        percentage: "80",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        percentage: "80",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        percentage: "80",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        percentage: "80",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        percentage: "80",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        percentage: "80",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
        percentage: "80",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        percentage: "80",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
        percentage: "80",
    },
    {
        imageUrl: excel,
        name: "Excel",
        type: "Data Analysis",
        percentage: "80",   
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Scripting Language",
        percentage: "80",              
    },
    {
        imageUrl: shopify,
        name: "Shopify",
        type: "E-Commerce",
        percentage: "80",
    },
    {
        imageUrl: DealCloud,
        name: "DealCloud",
        type: "State Management",
        percentage: "80",
    },
];

// EXPERIENCES
export const experiences = [
    {
        title: "Data Analyst Intern",
        company_name: "Hyde Park Capital",
        icon: HPC,
        iconBg: "#f2e6c1",
        date: "April 2023 - December 2023",
        points: [
            "Maintained and managed databases such as Deal Cloud - tracking sensitive data such as Clients, Prospects, and Engagements.",
            "Utilized applications to identify qualified leads suitable for M&A investing.",
            "Utilized excel for data manipulation, cleaning, and optimization to support strategic decision making at my firm.",
            "Developed Algorithms and Applications to automate data cleaning processes using various programming languages.",
            "Gained a comprehensive understanding of M&A investment banking processes while demonstrating professionalism, and effective time management.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "The University of Tampa",
        icon: Tampa,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - Aug 2023",
        points: [
            "Oversaw the planning, development, and maintenance of the client's website, ensuring seamless functionality and user satisfaction.",
            "Worked closely with the client to assess and address website requirements, playing a pivotal role in enhancing site performance and user experience.",
            "Maintained regular and productive communication with the client to align website development with the Administrator's broader goals and initiatives.",
            "Adapted a flexible work model, collaborating efficiently with my client both in-person and remotely to manage website operation effectively.",
        ],
    },
    {
        title: "Programming Tutor",
        company_name: "CodaKid",
        icon: codakid,
        iconBg: "#a2d2ff",
        date: "Apr 2022 - May 2023",
        points: [
            "Evaluated and monitored the work of each student, enhancing their computational skills and understanding of coding languages.",
            "Simplified complex topics for children, breaking them down into easily understandable concepts.",
            "Developed remote instruction using the Zoom video platform, enabling children to learn and implement various coding languages.",
            "Created detailed lesson plans to enhance the technical skills of students, administering them to ensure effective learning.",
            "Maintained academic records and performance analysis of children, identifying areas for improvement and addressing them through ongoing support.",
        ],
    },
    {
        title: "STEM Camp Instrutor",
        company_name: "Drobots Robotics",
        icon: drobots,
        iconBg: "#ededed",
        date: "Jun 2022 - Aug 2022",
        points: [
            "Utilized drone technology and code-based learning to foster a collaborative, project-based learning environment in a positive educational setting.",
            "Mentored children between the ages of six and twelve, inspiring them to become lifelong learners with a strong sense of curiosity, confidence, and teamwork.",
            "Implemented self-exploratory and project-based learning techniques with real-world STEM applications for children, promoting hands-on experience in a stimulating learning environment.",
            "Instructed free-flying drone challenges, enhancing knowledge of coding drones in a dynamic, action-packed learning atmosphere.",
        ],
    },
];

//SOCIALS
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/masond84',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/devin-r-mason/',
    }
];

// PROJECTS
export const projects = [
    {
        iconUrl: gradcap,
        theme: 'btn-back-red',
        name: 'Student Resource Center',
        description: 'Developed a web application provides open-source resources for Student Leaders and Administrators looking to become adept in a variety of skills. ',
        link: 'https://github.com/masond84/Resilient_School_Leaders',
    },
    {
        iconUrl: chart,
        theme: 'btn-back-green',
        name: 'Lead Scoring Application',
        description: 'Created a full-stack software to rank  Lead Lists in order to designate quality leads and corresponding scores for each lead.',
        link: 'https://github.com/masond84/DataSiftPro',
    },
    {
        iconUrl: realestate,
        theme: 'btn-back-blue',
        name: 'Real-Estate Auction Web Scraper',
        description: 'Created an automated web scraper that recurringly gets foreclosure auctions and researches respective data for all Counties in Florida.',
        link: 'https://github.com/masond84/Florida-Foreclosure-Web-Scraper',
    },
    {
        iconUrl: mental,
        theme: 'btn-back-pink',
        name: 'Therapist ChatBot',
        description: 'Built a ChatGPT clone tailored to providing mental health advice and companionship to a user through text prompts and Natural Language Processing.',
        link: 'https://github.com/masond84/Therpy-GPT',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Corporate Contact Data Scraper',
        description: 'Developed a web scraper application to scrape Contact data from the Association for Corporate Growth, providing respective data for fintech decision making.',
        
    },
];