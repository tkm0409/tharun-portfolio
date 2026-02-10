import React, { useState } from 'react';
import award from "../assets/Award.png";
import codeRush from "../assets/codeRush.jpg";
import designathon2024 from "../assets/gallery/WINNERS.jpeg";
import designathon2023 from "../assets/Designathon2023.jpg";
import algomaniac2024 from "../assets/Algomaniac2024.jpg"; // Add this import

export default function Achievements() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const achievements = [
        {
            title: "Hexaware Learning Ambassador",
            description: "Recognized as a Knowledge Ninja and awarded the Learning Award for Q4 2023 at Hexaware, demonstrating a strong commitment to continuous learning and skill enhancement.",
            icon: <TrophyIcon className="w-10 h-10 text-purple-600" />,
            image: award,
            imageOverlay: "Knowledge Ninja Award",
            gradient: "from-purple-200 to-yellow-200",
        },
        {
            title: "Maverick Designathon - 2024",
            description: "Won the Maverick Gen AI Designathon 2024, organized by Hexaware Technologies, with the innovative 'AI Powered Panel Slot Allocation' application, showcasing exceptional AI and software development skills.",
            icon: <StarIcon className="w-10 h-10 text-green-600" />,
            image: designathon2024,
            imageOverlay: "AI Innovation Winner",
            gradient: "from-green-100 to-red-200",
        },
        {
            title: "CodeRush - 2024",
            description: "Achieved the 3rd prize at CodeRush – 2024, a prestigious two-day coding sprint focused on Natural Language Processing (NLP), showcasing proficiency and innovation in software development, organized by Hexaware.",
            icon: <SparklesIcon className="w-10 h-10 text-blue-600" />,
            image: codeRush,
            imageOverlay: "CodeRush Winner",
            gradient: "from-blue-100 to-green-100",
        },
        {
            title: "Designathon 2023",
            description: "Secured the second position in the Designathon event hosted by Hexaware in 2023, excelling in designing the functional UI for the Performance Management System, earning the Runner Award.",
            icon: <AwardIcon className="w-10 h-10 text-yellow-600" />,
            image: designathon2023,
            imageOverlay: "Runner Award",
            gradient: "from-yellow-100 to-blue-200",
        },
        {
            title: "Algomaniac 2024",
            description: "Participated in Algomaniac 2024, a competitive programming contest that challenges participants to solve complex algorithmic problems, demonstrating advanced problem-solving skills and coding proficiency.",
            icon: <CodeIcon className="w-10 h-10 text-indigo-600" />,
            image: algomaniac2024,
            imageOverlay: "Algorithmic Excellence",
            gradient: "from-indigo-100 to-pink-100",
        },
        {
            title: "Rockstar of the Month - 2024",
            description: "Awarded 'Rockstar of the Month' at Hexaware Technologies in 2024 for outstanding performance, exceptional contributions to project delivery, and consistent demonstration of excellence in AI-driven automation solutions.",
            icon: <StarIcon className="w-10 h-10 text-orange-600" />,
            image: null,
            imageOverlay: "Rockstar Award",
            gradient: "from-orange-100 to-red-100",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <header className="text-center mb-14">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500 pb-4">Achievements</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className={`bg-gradient-to-br ${achievement.gradient} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 border border-gray-200/30`}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center mr-3">
                                        {achievement.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{achievement.description}</p>
                                {achievement.image && (
                                    <div
                                        className="mt-4 h-68 overflow-hidden rounded-xl relative"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className={`absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-3 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                            <p className="text-center text-sm font-semibold">{achievement.imageOverlay}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AwardIcon(props) {
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
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    )
}

function SparklesIcon(props) {
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
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    )
}

function TrophyIcon(props) {
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
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )
}

function StarIcon(props) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

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