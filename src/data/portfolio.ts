import HeroProfile from "@/assets/projects/HeroProfile.webp";
import AboutMe from "@/assets/projects/AboutMe.webp";
import FinOrbit from "@/assets/projects/FinOrbit.webp";
import AnyCommerce from "@/assets/projects/AnyCommerce.webp";
import AlliensVsBalloons from "@/assets/projects/AlliensVsBalloons.webp";

import VoteChain from "@/assets/projects/VoteChain.webp";
import FleetVault from "@/assets/projects/FleetVault.webp";


export const portfolioData = {
    name: "Jeremy Solano",
    profileImage: HeroProfile,
    aboutImage: AboutMe,
    socials: {
        linkedin: "https://www.linkedin.com/in/jerermy-michel-solano-fr%C3%ADas-10ba9b218/",
        github: "https://github.com/JeremyJS20",
        email: "jsjeremy4@gmail.com",
        phone: "+1-829-264-4164"
    },
    roles: {
        en: "Fullstack Engineer",
        es: "Ingeniero Fullstack"
    },
    location: {
        en: "located in Santo Domingo, Dominican Republic 🇩🇴",
        es: "ubicado en Santo Domingo, República Dominicana 🇩🇴"
    },
    tagline: {
        en: "Passionate about building scalable web solutions and efficient backend systems.",
        es: "Apasionado por construir soluciones web escalables y sistemas backend eficientes."
    },
    summary: {
        en: "I'm <strong>Jeremy Solano</strong>. My fascination with technology started as a kid, but it was during my last year of high school, after being introduced to <strong>web development</strong>, that I realized this was what I wanted to do.\n\nToday, I'm pursuing a degree in <strong>Software Engineering</strong> at <strong>UNAPEC</strong> while building software that solves real-world problems. I've worked on <strong>healthcare systems</strong>, <strong>integrations</strong> between organizations, <strong>cloud-based solutions</strong>, and, more recently, initiatives involving <strong>AI-powered identity verification</strong>.\n\nWhat motivates me most is understanding how things work and finding better ways to build them. I'm always looking for the next challenge, whether it's learning a new technology, improving an existing system, or creating solutions that make a meaningful impact on the people who use them.",
        es: "Soy <strong>Jeremy Solano</strong>. Mi fascinación por la tecnología comenzó cuando era niño, pero fue durante mi último año de secundaria, después de ser introducido al <strong>desarrollo web</strong>, que me di cuenta de que esto era lo que quería hacer.\n\nHoy en día, estoy cursando la carrera de <strong>Ingeniería de Software</strong> en <strong>UNAPEC</strong> mientras construyo software que resuelve problemas del mundo real. He trabajado en <strong>sistemas de salud</strong>, <strong>integraciones</strong> entre organizaciones, <strong>soluciones basadas en la nube</strong> y, más recientemente, en iniciativas que involucran <strong>verificación de identidad impulsada por IA</strong>.\n\nLo que más me motiva es entender cómo funcionan las cosas y encontrar mejores formas de construirlas. Siempre estoy buscando el próximo desafío, ya sea aprender una nueva tecnología, mejorar un sistema existente o crear soluciones que tengan un impacto significativo en las personas que las usan."
    },
    experienceYears: 4,
    experience: [
        {
            role: {
                en: "Fullstack Engineer",
                es: "Ingeniero Fullstack"
            },
            company: "Unipago",
            period: {
                en: "2024 — Present",
                es: "2024 — Presente"
            },
            description: {
                en: "At <strong>Unipago</strong>, I've had the opportunity to work on systems that connect different players across the <strong>healthcare ecosystem</strong>. From <strong>integrations</strong> and <strong>APIs</strong> to <strong>cloud solutions</strong>, I enjoy solving the kind of problems where <strong>reliability</strong>, <strong>scalability</strong>, and real-world impact matter. More recently, I've also explored how <strong>AI</strong> can enhance <strong>identity verification</strong> experiences through technologies like <strong>AWS Rekognition</strong> and <strong>Bedrock</strong>.",
                es: "En <strong>Unipago</strong>, he tenido la oportunidad de trabajar en sistemas que conectan a diferentes actores del <strong>ecosistema de la salud</strong>. Desde <strong>integraciones</strong> y <strong>APIs</strong> hasta <strong>soluciones en la nube</strong>, disfruto resolviendo el tipo de problemas donde la <strong>confiabilidad</strong>, la <strong>escalabilidad</strong> y el impacto en el mundo real importan. Más recientemente, también he explorado cómo la <strong>IA</strong> puede mejorar las experiencias de <strong>verificación de identidad</strong> a través de tecnologías como <strong>AWS Rekognition</strong> y <strong>Bedrock</strong>."
            },
            featured: true
        },
        {
            role: {
                en: "Fullstack Engineer",
                es: "Ingeniero Fullstack"
            },
            company: "CAM Informática",
            period: {
                en: "2022 — 2024",
                es: "2022 — 2024"
            },
            description: {
                en: "Contributed to the development of a Human Resource Management System (HRMS). Developed frontend components using React and TypeScript. Implemented backend functionality using .NET (C#) and SQL Server. Collaborated on requirements analysis and system stability improvements.",
                es: "Contribuí al desarrollo de un Sistema de Gestión de Recursos Humanos (HRMS). Desarrollé componentes frontend utilizando React y TypeScript. Implementé funcionalidad backend utilizando .NET (C#) y SQL Server. Colaboré en el análisis de requisitos y mejoras en la estabilidad del sistema."
            },
            featured: false
        }
    ],
    education: [
        {
            school: "UNAPEC",
            degree: {
                en: "Software Engineering",
                es: "Ingeniería de Software"
            },
            period: "2023 — 2028"
        },
        {
            school: "ITLA",
            degree: {
                en: "Software Development",
                es: "Desarrollo de Software"
            },
            period: "2018 — 2022"
        }
    ],
    projects: [
        {
            title: "FleetVault",
            description: {
                en: "A premium car rental and logistics platform designed for efficient vehicle management, customer bookings, and integrated payment processing.",
                es: "Una plataforma premium de alquiler de vehículos y logística diseñada para una gestión de flota eficiente, reservas de clientes y procesamiento de pagos integrado."
            },
            image: FleetVault,
            tags: ["ReactJS", "TailwindCSS", "TypeScript", "Express.js", "Prisma", "PostgreSQL", "Stripe", "AI Assisted"],
            links: {
                code: "https://github.com/JeremyJS20/FleetVault",
                preview: "https://fleet-vault-enterprise.vercel.app"
            }
        },
        {
            title: "VoteChain",
            description: {
                en: "An institutional-grade digital voting platform with biometric verification, leveraging blockchain technology for secure, immutable record-keeping.",
                es: "Una plataforma de votación digital de grado institucional con verificación biométrica, que utiliza tecnología blockchain para un registro seguro e inmutable."
            },
            image: VoteChain,
            tags: ["ReactJS", "TailwindCSS", "TypeScript", "Express.js", "Blockchain", "AI Assisted"],
            links: {
                code: "https://github.com/JeremyJS20/votechain",
                preview: "https://votechain-one.vercel.app"
            }
        },
        {
            title: "FinOrbit",

            description: {
                en: "A comprehensive personal finance management system designed to track daily expenses, manage income sources, and visualize budget trends with intuitive dashboards.",
                es: "Un sistema de control financiero personal para el seguimiento de gastos diarios, gestión de ingresos y visualización de presupuestos con paneles intuitivos."
            },
            image: FinOrbit,
            tags: ["Django", "TailwindCSS", "JavaScript", "PostgreSQL", "AI Assisted"],
            links: {
                code: "https://github.com/JeremyJS20/PersonalFinanceManagement",
                preview: "https://personal-finance-management-azure.vercel.app"
            }
        },
        {
            title: "AnyCommerce",
            description: {
                en: "A dynamic e-commerce marketplace where users can seamlessly buy and sell curated products. Optimized for high performance with a clean, modern interface and robust product management features.",
                es: "Un marketplace dinámico de comercio electrónico donde los usuarios pueden comprar y vender productos de forma fluida. Optimizado para un alto rendimiento con una interfaz limpia y moderna, y potentes funciones de gestión de productos."
            },
            image: AnyCommerce,
            tags: ["ReactJS", "TailwindCSS", "TypeScript", "FastAPI", "Stripe", "AI Assisted"],
            links: {
                code: "https://github.com/JeremyJS20/Anycommerce-Frontend",
                preview: "https://anycommerce-frontend.vercel.app"
            }
        },
        {
            title: "Aliens vs Balloons",
            description: {
                en: "An engaging web-based arcade game where you command a UFO to protect the atmosphere. Your mission is to prevent ascending balloons from reaching space by popping them with precision and speed.",
                es: "Un entretenido juego de arcade web donde diriges un OVNI para proteger la atmósfera. Tu misión es evitar que los globos que ascienden lleguen al espacio explotándolos con precisión y velocidad."
            },
            image: AlliensVsBalloons,
            tags: ["Web Game", "HTML", "JavaScript", "Phaser 3"],
            links: {
                code: "https://github.com/JeremyJS20/ProyectoAlienVSBalloons",
                preview: "https://aliens-vs-balloons.onrender.com"
            }
        }
    ],
    skills: [
        { name: "TypeScript", icon: "Code", logo: "https://svgl.app/library/typescript.svg" },
        {
            name: "ReactJS",
            icon: "MonitorSmartphone",
            logo: {
                light: "https://svgl.app/library/react_light.svg",
                dark: "https://svgl.app/library/react_dark.svg"
            }
        },
        { name: "Angular", icon: "Layout", logo: "https://svgl.app/library/angular.svg" },
        { name: "Node.js", icon: "Server", logo: "https://svgl.app/library/nodejs.svg" },
        {
            name: "Express.js",
            icon: "Server",
            logo: {
                light: "https://svgl.app/library/expressjs.svg",
                dark: "https://svgl.app/library/expressjs_dark.svg"
            }
        },
        { name: "Python", icon: "Terminal", logo: "https://svgl.app/library/python.svg" },
        { name: "FastAPI", icon: "Zap", logo: "https://svgl.app/library/fastapi.svg" },
        { name: "PostgreSQL", icon: "Database", logo: "https://svgl.app/library/postgresql.svg" },
        {
            name: "MongoDB",
            icon: "Leaf",
            logo: {
                light: "https://svgl.app/library/mongodb-icon-light.svg",
                dark: "https://svgl.app/library/mongodb-icon-dark.svg"
            }
        },
        {
            name: "AWS",
            icon: "Cloud",
            logo: {
                light: "https://svgl.app/library/aws_light.svg",
                dark: "https://svgl.app/library/aws_dark.svg"
            }
        }
    ]
};
