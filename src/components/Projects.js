import { motion } from 'framer-motion';
import { FaRobot, FaBrain } from 'react-icons/fa';
import { MagicCard } from './ui/MagicCard';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="h-full" // Ensure full height for grid
        >
            <MagicCard className="h-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800" gradientColor={project.colorHex}>
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-3xl -z-10`} />

                <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
                    {/* Header: Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {project.icon}
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                                    <span className={`inline-block w-2 h-2 rounded-full ${project.statusColor}`}></span>
                                    {project.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                        {project.description}
                    </p>

                    {/* Tech Stack - Modern Pill Style */}
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Footer decoration line */}
                        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full opacity-20 group-hover:opacity-100 transition-all duration-500`} />
                    </div>
                </div>
            </MagicCard>
        </motion.div>
    );
};

export default function Projects() {
    const projects = [
        {
            title: "Process Automation Suite",
            role: "Lead RPA Architect",
            statusColor: "bg-emerald-500",
            description: "Architected and deployed enterprise-scale RPA bots automating critical workflows across Salesforce, Jira, and ServiceNow. Reduced manual processing time by 40% and improved data accuracy, directly impacting operational efficiency for thousands of employees.",
            skills: ["Automation Anywhere", "Salesforce API", "Jira", "ServiceNow", "C#"],
            icon: <FaRobot size={28} />,
            gradient: "from-emerald-500 to-teal-500",
            colorHex: "#10b981" // Emerald-500
        },
        {
            title: "GenAI Discovery Platform",
            role: "AI Solution Architect",
            statusColor: "bg-purple-500",
            description: "Pioneered the development of intelligent agents using OpenAI SDK and LangChain. Built a RAG-based document analysis system that allows users to query internal knowledge bases with natural language, leveraging vector databases for semantic search.",
            skills: ["OpenAI", "LangChain", "Python", "Vector DB", "RAG"],
            icon: <FaBrain size={28} />,
            gradient: "from-purple-600 to-indigo-600",
            colorHex: "#9333ea" // Purple-600
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-300 text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        Innovation & Impact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
                    >
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Showcasing solutions that bridge the gap between complex enterprise needs and cutting-edge AI technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12Perspective">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
