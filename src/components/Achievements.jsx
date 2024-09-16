import React from 'react';
import award from "../assets/Award.png";
import codeRush from "../assets/codeRush.jpg";
import designathon2024 from "../assets/gallery/WINNERS.jpeg";

export default function Achievements() {
    const achievements = [
        {
            title: "Hexaware Learning Ambassador",
            description: "Recognized as a Knowledge Ninja and awarded the Learning Award for Q4 2023 at Hexaware, demonstrating a strong commitment to continuous learning and skill enhancement.",
            icon: <TrophyIcon className="w-10 h-10 text-purple-600" />,
            image: award,
            gradient: "from-purple-100 to-purple-200",
        },
        {
            title: "Designathon 2023",
            description: "Secured the second position in the Designathon event hosted by Hexaware in 2023, excelling in designing the functional UI for the Performance Management System, earning the Runner Award.",
            icon: <AwardIcon className="w-10 h-10 text-yellow-600" />,
            gradient: "from-yellow-100 to-yellow-200",
        },
        {
            title: "CodeRush - 2024",
            description: "Achieved the 3rd prize at CodeRush – 2024, a prestigious two-day coding sprint focused on Natural Language Processing (NLP), showcasing proficiency and innovation in software development, organized by Hexaware.",
            icon: <SparklesIcon className="w-10 h-10 text-blue-600" />,
            image: codeRush,
            gradient: "from-blue-100 to-blue-200",
        },
        {
            title: "Maverick Designathon - 2024",
            description: "Won the Maverick Gen AI Designathon 2024, organized by Hexaware Technologies, with the innovative 'AI Powered Panel Slot Allocation' application, showcasing exceptional AI and software development skills.",
            icon: <StarIcon className="w-10 h-10 text-green-600" />,
            image: designathon2024,
            gradient: "from-green-100 to-green-200",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
            <header className="space-y-1 text-center">
                    <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Achievements</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index} className={`bg-gradient-to-br ${achievement.gradient} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    {achievement.icon}
                                    <h3 className="text-xl font-semibold ml-3">{achievement.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{achievement.description}</p>
                                {achievement.image && (
                                    <div className="mt-4 h-68 overflow-hidden rounded-lg">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
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

function BadgeIcon(props) {
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
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
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