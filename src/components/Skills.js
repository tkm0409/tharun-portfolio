import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaRobot, FaBrain } from 'react-icons/fa';

const SkillCard = ({ icon: Icon, title, description, color, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
        >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color.replace('from-', 'from-white/50 to-').replace('to-', '')} dark:from-gray-800 dark:to-gray-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const skillsData = [
        {
            icon: FaBrain,
            title: "AI & GenAI",
            description: "Building intelligent agents and automation workflows using state-of-the-art LLMs and frameworks. Specialized in RAG architectures and agentic AI.",
            color: "from-purple-500 to-pink-500",
            skills: ["OpenAI API", "LangChain", "Vector DBs", "RAG", "Prompt Engineering", "Python"]
        },
        {
            icon: FaCode,
            title: "Front-end Development",
            description: "Crafting responsive, performant, and accessible user interfaces with modern React ecosystem and component libraries.",
            color: "from-blue-400 to-cyan-400",
            skills: ["React", "Angular", "Tailwind CSS", "Framer Motion", "TypeScript", "HTML5/CSS3"]
        },
        {
            icon: FaServer,
            title: "Back-end Development",
            description: "Designing robust APIs and microservices architectures. Experienced in building scalable server-side logic and database integrations.",
            color: "from-emerald-500 to-teal-500",
            skills: ["Node.js", ".NET Core", "C#", "Python", "REST APIs", "Microservices"]
        },
        {
            icon: FaRobot,
            title: "Robotic Process Automation",
            description: "Automating complex business processes to improve efficiency and reduce manual effort using enterprise-grade RPA tools.",
            color: "from-orange-500 to-amber-500",
            skills: ["Automation Anywhere", "Power Automate", "Process Mining", "Bot Development"]
        },
        {
            icon: FaDatabase,
            title: "Database Management",
            description: "Architecting efficient data storage solutions with both SQL and NoSQL databases, ensuring data integrity and performance.",
            color: "from-indigo-500 to-blue-600",
            skills: ["SQL Server", "PostgreSQL", "MongoDB", "CosmosDB", "Redis"]
        },
        {
            icon: FaCloud,
            title: "Cloud & DevOps",
            description: "Deploying and managing scalable applications on major cloud platforms with CI/CD pipelines and containerization.",
            color: "from-sky-500 to-blue-500",
            skills: ["Azure", "AWS", "Docker", "CI/CD", "Git", "Kubernetes"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
                    >
                        A comprehensive toolkit for building modern, scalable, and intelligent applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={index} {...skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
