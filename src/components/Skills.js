import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-primary-50/20 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative">
            <div className="container px-4 md:px-6 mx-auto space-y-12 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                        Skills & Expertise
                    </h2>
                    <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        With a diverse skill set spanning web development, Microsoft technologies, and RPA, I bring a comprehensive approach to solving complex technical challenges.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ icon: Icon, title, description, color }) {
    return (
        <motion.div
            className="rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/50 dark:hover:border-primary-600/50"
            whileHover={{ scale: 1.03, y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-500/10 dark:from-primary-900/30 dark:to-accent-500/10 flex items-center justify-center">
                    <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}

const skillsData = [
    {
        icon: CodeIcon,
        title: "Front-end Development",
        description: "Proficient in creating responsive and interactive user interfaces using modern frameworks and libraries such as React, Angular, and Blazor. Strong foundation in HTML5, CSS3, and JavaScript ES6+.",
        color: "#FFD700"
    },
    {
        icon: ServerIcon,
        title: "Back-end Development",
        description: "Experienced in building robust server-side applications using C#, ASP.NET Core, and Python. Skilled with Spring Boot for Java-based solutions and proficient in designing scalable APIs and microservices.",
        color: "#4169E1"
    },
    {
        icon: DatabaseIcon,
        title: "Database Management",
        description: "Skilled in designing and optimizing database structures using SQL Server, MySQL, and PostgreSQL. Experience with NoSQL databases like CosmosDB for scalable data solutions.",
        color: "#8A2BE2"
    },
    {
        icon: CloudIcon,
        title: "Cloud & DevOps",
        description: "Proficient in deploying and managing applications on Azure and AWS cloud platforms. Experienced with CI/CD pipelines, Docker for containerization, and cloud-native architectures.",
        color: "#87CEEB"
    },
    {
        icon: RobotIcon,
        title: "Robotic Process Automation",
        description: "Expertise in designing and implementing RPA solutions using Automation Anywhere and Microsoft Power Automate to streamline business processes and increase efficiency.",
        color: "#FFA500"
    },
    {
        icon: ToolsIcon,
        title: "Tools & Frameworks",
        description: "Proficient in .NET ecosystem including Entity Framework and LINQ. Experienced with Git, GitHub, VS Code, and ServiceNow for collaborative development and service management.",
        color: "#32CD32"
    },
    {
        icon: AIIcon,
        title: "AI & GenAI",
        description: "Experienced with Generative AI technologies including OpenAI Agents SDK, LangChain, LLM integration, vector databases, and MCP. Building agentic AI solutions for enterprise process automation.",
        color: "#f093fb"
    }
];

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function DatabaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function ServerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}


function CloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function RobotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="10" x="3" y="11" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" x2="8" y1="16" y2="16" />
            <line x1="16" x2="16" y1="16" y2="16" />
        </svg>
    )
}


function ToolsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 22v-6h6" />
            <path d="M3 16c3.5-3.5 7-7 10.5-10.5" />
            <path d="M13.5 5.5 18 2l4 4-3.5 3.5" />
            <path d="M16 10c-1.7 1.7-3.3 3.3-5 5" />
            <path d="M8 16c1.7-1.7 3.3-3.3 5-5" />
        </svg>
    )
}

function AIIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4z" />
            <path d="M9 8v2" />
            <path d="M15 8v2" />
            <path d="M12 8v8" />
            <path d="M8 14h8" />
            <path d="M7 18l-2 4" />
            <path d="M17 18l2 4" />
            <path d="M12 18v4" />
        </svg>
    )
}

