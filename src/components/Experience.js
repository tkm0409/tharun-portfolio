import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Hexaware Technologies",
            period: "Jun 2022 - Present",
            description: "As a Microsoft full stack engineer at Hexaware Technologies, I specialize in developing innovative applications using cutting-edge technologies such as .NET Core, Angular, and React. My role involves seamlessly integrating these solutions with databases and cloud services, constantly striving for excellence and efficiency. I've also ventured into Robotic Process Automation (RPA) using Automation Anywhere, successfully integrating automation workflows with platforms like Salesforce and ServiceNow to enhance organizational productivity. Additionally, I spearheaded the GenAI Discovery initiative, developing intelligent automation prototypes using OpenAI Agents SDK and LangChain. I actively mentor junior developers, coordinate UAT activities, and participate in stakeholder meetings to align technical solutions with business objectives.",
            skills: ["C#", ".NET Core", "Angular", "React", "Azure", "RPA", "Salesforce", "ServiceNow", "Python", "DocuSign", "Jira", "OpenAI Agents", "LangChain"],
            icon: <FaBriefcase className="text-primary-500" />
        },
        {
            title: "Intern",
            company: "Wipro",
            period: "Mar 2022 - Jun 2022",
            description: "During my internship at Wipro in Bangaluru, I immersed myself in Selenium automation, leveraging Java to craft robust and efficient testing solutions. I actively contributed to enhancing automation testing processes using TestNG, streamlining CI/CD pipelines, and improving overall quality assurance practices.",
            skills: ["Java", "Selenium", "TestNG", "CI/CD", "Automation Testing", "Quality Assurance"],
            icon: <FaCode className="text-accent-500" />
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 md:py-28">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Experience
                </motion.h2>
                <div className="relative">
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-glow-500 hidden sm:block"></div>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative sm:pl-16 md:pl-20"
                            >
                                <div className="absolute left-1.5 md:left-5.5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 z-10 hidden sm:flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/50 dark:hover:border-primary-600/50">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-accent-500/10 dark:from-primary-900/30 dark:to-accent-500/10 flex items-center justify-center mr-3">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                                            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{exp.company} | {exp.period}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium px-3 py-1 rounded-full border border-primary-200/50 dark:border-primary-700/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
