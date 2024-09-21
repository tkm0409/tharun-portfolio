import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaRobot, FaCloud, FaDatabase } from 'react-icons/fa';

export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Hexaware Technologies",
            period: "2022-present",
            description: "As a Microsoft full stack engineer at Hexaware Technologies, I specialize in developing innovative applications using cutting-edge technologies such as .NET Core, Angular, and React. My role involves seamlessly integrating these solutions with databases and cloud services, constantly striving for excellence and efficiency. I've also ventured into Robotic Process Automation (RPA) using Automation Anywhere, successfully integrating automation workflows with platforms like Salesforce and ServiceNow to enhance organizational productivity.",
            skills: ["C#", ".NET Core", "Angular", "React", "Azure", "RPA", "Salesforce", "ServiceNow"],
            icon: <FaBriefcase className="text-blue-500" />
        },
        {
            title: "Internship",
            company: "Wipro",
            period: "2022",
            description: "During my internship at Wipro, I immersed myself in Selenium automation, leveraging Java to craft robust and efficient testing solutions. I actively contributed to enhancing automation testing processes, streamlining workflows, and improving overall quality assurance practices.",
            skills: ["Java", "Selenium", "Automation Testing", "Quality Assurance"],
            icon: <FaCode className="text-green-500" />
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Professional Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-center mb-4">
                                {exp.icon}
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-3">{exp.title}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-2.5 py-0.5 rounded">
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
