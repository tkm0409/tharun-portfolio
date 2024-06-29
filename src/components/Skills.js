import { color } from 'framer-motion';
import React from 'react';

export default function Skills() {
    const gradientId = 'ColorGradient';


    return (
        
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-8">
                <div className="text-center">
                    <h2 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Skills & Expertise</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        I have a wide range of skills in web development, including front-end and back-end technologies.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="card">
                        <div className="card-content">
                            <CodeIcon className="icon" style={{color:"Gold"}}/>
                            <div className="text-container">
                                <h3 className="title">Front-end</h3>
                                <p className="description">HTML, CSS, JavaScript, Angular, React</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <ServerIcon className="icon" style={{color:"blue"}}/>
                            <div className="text-container">
                                <h3 className="title">Back-end</h3>
                                <p className="description">Java, Python, C#</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <DatabaseIcon className="icon" style={{color:"violet"}}/>
                            <div className="text-container">
                                <h3 className="title">Databases</h3>
                                <p className="description">MySQL, PostgreSQL, SQL Server</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
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


function DatabaseIcon(props) {
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
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function ServerIcon(props) {
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
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}

