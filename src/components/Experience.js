import { motion } from 'framer-motion';
import { FaLaptopCode, FaBriefcase, FaBuilding } from 'react-icons/fa';

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 sm:pl-32 py-6 group"
        >
            {/* Timeline Line - Animated */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-2 sm:left-0 top-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 origin-top"
            ></motion.div>

            {/* Timeline Connector Dot */}
            <div className="absolute left-[0.2rem] sm:-left-[0.35rem] top-10 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500 shadow-lg z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-accent-500"></div>

            {/* Date - Desktop ONLY (Left Side) */}
            <div className="hidden sm:block absolute left-[-200px] top-8 w-40 text-right">
                <span className="text-xl font-bold text-gray-400 dark:text-gray-500 group-hover:text-primary-500 transition-colors duration-300">
                    {experience.period}
                </span>
            </div>

            {/* Card Content */}
            <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group-hover:-translate-y-1">
                {/* Mobile Date */}
                <div className="sm:hidden mb-2 inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400">
                    {experience.period}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                            {experience.title}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 font-medium">
                            <FaBuilding className="mr-2 text-primary-500" />
                            {experience.company}
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-primary-500 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            {experience.icon}
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                    {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 rounded-lg border border-primary-100 dark:border-primary-900/20 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Hexaware Technologies",
            period: "Jun 2022 - Present",
            description: "Specializing in full-stack development with .NET Core, Angular, and React. Leading initiatives in RPA using Automation Anywhere and pioneering GenAI solutions with OpenAI Agents SDK. A key contributor to technical excellence, mentoring junior developers, and driving innovation in enterprise automation.",
            skills: ["React", ".NET Core", "Azure", "RPA", "GenAI", "Python", "System Design"],
            icon: <FaBriefcase size={20} />
        },
        {
            title: "Project Intern",
            company: "Wipro",
            period: "Mar 2022 - Jun 2022",
            description: "Focused on quality assurance automation, leveraging Java and Selenium to build robust testing frameworks. Contributed to CI/CD pipeline optimization and enhanced software reliability through comprehensive test strategies.",
            skills: ["Java", "Selenium", "TestNG", "CI/CD", "Automation", "Quality Assurance"],
            icon: <FaLaptopCode size={20} />
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        Career Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Experience</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
