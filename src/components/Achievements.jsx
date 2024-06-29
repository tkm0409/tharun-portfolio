import award from "../assets/Award.png";
import codeRush from "../assets/codeRush.jpg";
import designathon2024 from "../assets/Designathon2024.jpg"

export default function Achievements() {
    return (
        <section key="1" className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container px-4 md:px-6"
            >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Check out some of the accomplishments, awards, and milestones I've achieved.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    <div className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300"
                        style={{
                            background:
                                "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                        }}
                    >
                        <TrophyIcon className="mb-4 h-8 w-8 text-gray-900" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Hexaware Learning Ambassador</h3>
                            <p className="text-sm text-gray-500">
                                Recognized as a <b><i>Knowledge Ninja</i></b> and awarded the Learning Award for <b><i>Q4 2023 at Hexaware</i></b>, demonstrating a strong commitment to continuous learning and skill enhancement.
                            </p>
                            <img
                                alt="Certificate"
                                className="rounded-lg hover:scale-125 transition-transform hover:translate-x-2"
                                height={150}
                                src={award}
                                style={{
                                    aspectRatio: "200/150",
                                    objectFit: "cover",
                                }}
                                width={200}
                                draggable="false"
                            />
                        </div>

                    </div>
                    <div className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300"
                        style={{ background: "linear-gradient(143.6deg, rgba(255, 223, 128, 0) 20.79%, rgba(255, 215, 0, 0.5) 40.92%, rgba(255, 223, 128, 0) 70.35%)" }}>
                        <AwardIcon className="mb-4 h-8 w-8 text-gray-900" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Designathon 2023</h3>
                            <p className="text-sm text-gray-500">
                                Secured the second position in the Designathon event hosted by <b><i>Hexaware</i></b> in 2023, where I excelled in designing the functional <b><i>UI</i></b> for the <b><i>Performance Management System</i></b>, earning the Runner Award.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300"
                        style={{
                            background:
                                "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                        }}>
                        <SparklesIcon className="mb-4 h-8 w-8 text-gray-900" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">CodeRush - 2024</h3>
                            <p className="text-sm text-gray-500">
                                Achieved the <b><i>3rd prize</i></b> at CodeRush – 2024, a prestigious two-day coding sprint focused on <b><i>Natural Language Processing (NLP)</i></b>, showcasing proficiency and innovation in software development, organized by Hexaware.
                            </p>
                            <img
                                alt="Certificate"
                                className="rounded-lg hover:scale-125 transition-transform hover:translate-x-2"
                                height={150}
                                src={codeRush}
                                style={{
                                    aspectRatio: "200/150",
                                    objectFit: "cover",
                                }}
                                width={200}
                                draggable="false"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300"
                        style={{
                            background: "linear-gradient(143.6deg, rgba(255, 223, 128, 0) 20.79%, rgba(255, 215, 0, 0.5) 40.92%, rgba(255, 223, 128, 0) 70.35%)"
                        }}
                    >
                        <StarIcon className="mb-4 h-8 w-8 text-gray-900" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Maverick Designathon - 2024</h3>
                            <p className="text-sm text-gray-500">
                            Won the Maverick <b><i>Gen AI</i></b> Designathon <b><i>2024</i></b>, organized by Hexaware Technologies, with the innovative 'AI Powered Panel Slot Allocation' application, showcasing exceptional AI and software development skills.
                            </p>
                            <img
                                alt="Certificate"
                                className="rounded-lg hover:scale-125 transition-transform hover:translate-x-2"
                                height={150}
                                src={designathon2024}
                                style={{
                                    aspectRatio: "200/150",
                                    objectFit: "cover",
                                }}
                                width={200}
                                draggable="false"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
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