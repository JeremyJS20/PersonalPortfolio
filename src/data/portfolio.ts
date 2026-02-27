import HeroProfile from "@/assets/projects/HeroProfile.webp";
import AboutMe from "@/assets/projects/AboutMe.webp";
import FinOrbit from "@/assets/projects/FinOrbit.webp";
import AnyCommerce from "@/assets/projects/AnyCommerce.webp";
import AlliensVsBalloons from "@/assets/projects/AlliensVsBalloons.webp";
import ChatApp from "@/assets/projects/ChatApp.webp";

export const portfolioData = {
    name: "Jerermy Solano",
    profileImage: HeroProfile,
    aboutImage: AboutMe,
    socials: {
        linkedin: "https://www.linkedin.com/in/jerermy-michel-solano-fr%C3%ADas-10ba9b218/",
        github: "https://github.com/JeremyJS20",
        email: "jsjeremy4@gmail.com",
        phone: "+1-829-264-4164"
    },
    roles: {
        en: "Fullstack Developer",
        es: "Desarrollador Fullstack"
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
        en: "I'm <strong>Jerermy Solano</strong>. My fascination with technology started as a kid, but it was in my last year of high school when a teacher taught me the basics of <strong>web development</strong> and everything clicked: I knew I wanted to spend my life building digital solutions.\n\nCurrently, I'm pursuing my degree in <strong>Software Engineering</strong> at <strong>UNAPEC</strong> while focused on developing and maintaining a production <strong>Electronic Health Records (EHR)</strong> system at <strong>Unipago</strong>. I help build integration platforms between medical centers and insurance companies using <strong>Java</strong>, <strong>Python</strong>, and <strong>AWS serverless architectures</strong>.\n\nMy goal is to keep creating software that simplifies lives and solves real-world problems. I'm always chasing the next challenge, whether it's mastering a new framework or finding that one clever optimization that makes everything snap into place.",
        es: "Soy <strong>Jerermy Solano</strong>. Mi fascinación por la tecnología empezó desde niño, aunque fue en mi último año de secundaria cuando un profesor me enseñó lo básico de <strong>desarrollo web</strong> y todo hizo clic: supe que quería dedicar mi vida a construir soluciones digitales.\n\nActualmente, curso la carrera de <strong>Ingeniería de Software</strong> en <strong>UNAPEC</strong> mientras me enfoco en desarrollar y mantener un sistema de <strong>Registro de Salud Electrónico (EHR)</strong> en producción en <strong>Unipago</strong>. Ayudo a construir plataformas de integración entre centros médicos y compañías de seguros utilizando <strong>Java</strong>, <strong>Python</strong> y arquitecturas <strong>serverless en AWS</strong>.\n\nMi objetivo es seguir creando software que simplifique vidas y resuelva problemas del mundo real. Mi meta profesional es siempre estar en busca del próximo desafío, ya sea dominando un nuevo framework o encontrando esa optimización inteligente que haga que todo encaje perfectamente."
    },
    experienceYears: 4,
    experience: [
        {
            role: {
                en: "Fullstack Developer",
                es: "Desarrollador Fullstack"
            },
            company: "Unipago",
            period: {
                en: "2024 — Present",
                es: "2024 — Presente"
            },
            description: {
                en: "Maintain and enhance a production Electronic Health Records (EHR) system. Develop backend services using Java (Spring Boot) and Python (Fast API) to support clinical and insurance workflows. Build integration platforms between Medical Centers and Insurance Companies (ARS). Implement serverless solutions using AWS (Lambda, API Gateway, RDS, S3).",
                es: "Mantener y mejorar un sistema de Registro de Salud Electrónico (EHR) en producción. Desarrollar servicios backend utilizando Java (Spring Boot) y Python (Fast API) para soportar flujos de trabajo clínicos y de seguros. Construir plataformas de integración entre Centros Médicos y Compañías de Seguros (ARS). Implementar soluciones sin servidor utilizando AWS (Lambda, API Gateway, RDS, S3)."
            },
            featured: true
        },
        {
            role: {
                en: "Fullstack Developer",
                es: "Desarrollador Fullstack"
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
            title: "FinOrbit",
            description: {
                en: "<strong>University project</strong> developed with <strong>agentic IDE and AI (Antigravity)</strong>. A system for complete personal finance control: track daily expenses, manage income sources, and visualize budget trends with intuitive dashboards.",
                es: "<strong>Proyecto universitario</strong> desarrollado con <strong>IDE agéntico e IA (Antigravity)</strong>. Un sistema de control financiero personal: seguimiento de gastos diarios, gestión de ingresos y visualización de presupuestos con paneles intuitivos."
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
            tags: ["ECommerce", "ReactJS", "TailwindCSS", "TypeScript", "FastAPI"],
            links: {
                code: "https://github.com/JeremyJS20/AnyCommerce",
                preview: "https://anycommerce.onrender.com/"
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
        },
        {
            title: "ChatApp",
            description: {
                en: "A real-time messaging platform designed for seamless communication. Built with a modern tech stack to ensure low-latency interactions and a responsive user experience.",
                es: "Una plataforma de mensajería en tiempo real diseñada para una comunicación fluida. Construida con un stack moderno para garantizar interacciones de baja latencia y una experiencia de usuario receptiva."
            },
            image: ChatApp,
            tags: ["ReactJS", "TypeScript", "Express.js", "MongoDB", "TailwindCSS"],
            links: {
                code: "https://github.com/JeremyJS20/ReactChatApp2",
                preview: "https://react-chat-app-6vjz.onrender.com"
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
