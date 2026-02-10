import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain } from 'react-icons/fa';

export default function Projects() {
    const projects = [
        {
            title: "Enterprise-Wide Process Automation",
            role: "Lead RPA Developer & Solution Architect",
            description: "Led the design and implementation of enterprise-scale RPA solutions automating complex business processes across multiple platforms. Developed and deployed automation workflows integrating Salesforce CRM operations, Jira project management tasks, DocuSign document workflows, and ServiceNow IT service management processes using Automation Anywhere, significantly reducing manual effort and improving operational efficiency.",
            skills: ["Automation Anywhere", "Salesforce", "Jira", "DocuSign", "ServiceNow"],
            icon: <FaRobot className="text-primary-500" />,
            gradient: "from-primary-50 to-accent-500/5"
        },
        {
            title: "GenAI Discovery",
            role: "GenAI Developer & Solution Architect",
            description: "Developed intelligent automation solutions leveraging Generative AI technologies to enhance enterprise processes. Built agentic AI prototypes using OpenAI Agents SDK and LangChain, integrating with Salesforce APIs and vector databases for context-aware automation. Explored and implemented LLM-powered solutions for knowledge extraction, document processing, and intelligent workflow orchestration.",
            skills: ["OpenAI Agents SDK", "LangChain", "Python", "Salesforce APIs", "Vector Databases", "LLMs"],
            icon: <FaBrain className="text-glow-500" />,
            gradient: "from-accent-500/5 to-glow-500/5"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-28">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`bg-gradient-to-br ${project.gradient} dark:bg-gray-800/80 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/50 dark:hover:border-primary-600/50`}
                        >
                            <div className="flex items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                                    {project.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1">{project.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="bg-white/80 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium px-3 py-1 rounded-full border border-primary-200/50 dark:border-primary-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
