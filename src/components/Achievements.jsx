import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaCode, FaLaptopCode, FaAward } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

import award from "../assets/Award.png";
import codeRush from "../assets/codeRush.jpg";
import designathon2024 from "../assets/gallery/WINNERS.jpeg";
import designathon2023 from "../assets/Designathon2023.jpg";
import algomaniac2024 from "../assets/Algomaniac2024.jpg";
import techGuru from "../assets/TechGuru.jpg";
import designathon2025 from "../assets/Designathon-2025.jpg";
import rockstar2024 from "../assets/RockStar 2024.jpg";

const achievements = [
    {
        title: "Tech Guru Award",
        subtitle: "Q3 2025",
        description: "Honored with the Tech Guru Award at Hexaware Technologies for exceptional technical expertise and innovative contributions.",
        icon: <FaTrophy className="w-6 h-6" />,
        image: techGuru,
        tag: "Excellence",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-200 dark:border-amber-800"
    },
    {
        title: "GenAI Designathon",
        subtitle: "Runner Up - 2025",
        description: "Secured runner-up position with a Smart Recruitment Application, demonstrating advanced AI capabilities in HR technology.",
        icon: <FaMedal className="w-6 h-6" />,
        image: designathon2025,
        tag: "Innovation",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-200 dark:border-emerald-800"
    },
    {
        title: "Rockstar of the Month",
        subtitle: "December 2024",
        description: "Awarded for outstanding performance and consistent demonstration of excellence in AI-driven automation solutions.",
        icon: <FaStar className="w-6 h-6" />,
        image: rockstar2024,
        tag: "Performance",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-200 dark:border-rose-800"
    },
    {
        title: "Hexaware Ambassador",
        subtitle: "Knowledge Ninja",
        description: "Recognized as a Knowledge Ninja and awarded the Learning Award for Q4 2023 for commitment to continuous learning.",
        icon: <FaAward className="w-6 h-6" />,
        image: award,
        tag: "Learning",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-200 dark:border-purple-800"
    },
    {
        title: "Maverick Designathon",
        subtitle: "Winner - 2024",
        description: "Won the Maverick Gen AI Designathon with the 'AI Powered Panel Slot Allocation' application.",
        icon: <IoSparkles className="w-6 h-6" />,
        image: designathon2024,
        tag: "Winner",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-200 dark:border-blue-800"
    },
    {
        title: "CodeRush NLP Sprint",
        subtitle: "3rd Place - 2024",
        description: "Achieved 3rd prize in a prestigious two-day coding sprint focused on Natural Language Processing (NLP).",
        icon: <FaCode className="w-6 h-6" />,
        image: codeRush,
        tag: "Hackathon",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-200 dark:border-cyan-800"
    },
    {
        title: "Designathon 2023",
        subtitle: "Runner Up",
        description: "Secured second position for designing the functional UI for the Performance Management System.",
        icon: <FaLaptopCode className="w-6 h-6" />,
        image: designathon2023,
        tag: "UI/UX",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-200 dark:border-yellow-800"
    },
    {
        title: "Algomaniac 2024",
        subtitle: "Top Performer",
        description: "Competed in a high-intensity algorithmic contest, solving complex problems and demonstrating coding proficiency.",
        icon: <FaCode className="w-6 h-6" />,
        image: algomaniac2024,
        tag: "Algorithm",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-200 dark:border-indigo-800"
    },
];

const AchievementCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900/50 border ${item.border} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500`}
        >
            {/* Image Section */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-black/80 backdrop-blur-md ${item.color} shadow-sm`}>
                    {item.tag}
                </div>
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                {/* Icon overlaid on image bottom-left */}
                <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 shadow-md ${item.color}`}>
                    {item.icon}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                            {item.title}
                        </h3>
                        <p className={`text-xs font-semibold uppercase tracking-wider ${item.color} mt-1`}>
                            {item.subtitle}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {item.description}
                </p>

                {/* Decoration */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 rounded-full blur-3xl opacity-20 ${item.bg.replace('/10', '/30')}`} />
            </div>
        </motion.div>
    );
};

export default function Achievements() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-4 tracking-tight">
                        Honors & Awards
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Recognition for dedication, innovation, and technical excellence in software development and competitive programming.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                    {achievements.map((item, index) => (
                        <AchievementCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}