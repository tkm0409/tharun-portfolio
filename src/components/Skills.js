import React from 'react';

export default function Skills() {
    const gradientId = 'ColorGradient';
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 space-y-4 md:space-y-8 lg:space-y-10">
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Skills & Expertise</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I'm a full stack developer with expertise in Microsoft technologies as well as Java, Python, FastAPI, and RPA using Automation Anywhere. Here are some of my skills.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Frontend Skills */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-left">Frontend</h2>
                            <div className="space-y-4">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{ stopColor: '#007ACC', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: '#61DAFB', stopOpacity: 1 }} />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill={`url(#${gradientId})`}>ANGULAR</tspan>
                                            </text>
                                        </svg>
                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">Angular</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Frontend development with Angular framework</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{ stopColor: '#61DAFB', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: '#282c34', stopOpacity: 1 }} />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill={`url(#${gradientId})`}>REACT</tspan>
                                            </text>
                                        </svg>
                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">React</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Frontend development with React framework</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Backend Skills */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-left">Backend</h2>
                            <div className="space-y-4">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#228B22" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#00FF00" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill="url(#greenGradient)">JAVA</tspan>
                                            </text>
                                        </svg>


                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">Java</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Backend development with Spring Boot, Hibernate, Java EE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#228B22" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#00FF00" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill="url(#greenGradient)">PYTHON</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">Python</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Backend development, data analysis, scripting</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#228B22" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#00FF00" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill="url(#greenGradient)">FastAPI</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">FastAPI</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Building APIs with Python using FastAPI framework</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Database Skills */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-left">Databases</h2>
                            <div className="space-y-4">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#FF6347" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#DC143C" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill="url(#redGradient)">SQL</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">SQL</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Database management and querying using SQL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#FF6347" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#DC143C" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40">
                                                <tspan fill="url(#redGradient)">SQL Server</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">SQL Server</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Microsoft SQL Server database administration and development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tools Skills */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-left">Tools</h2>
                            <div className="space-y-4">
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="300" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#8552f3" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="20">
                                                <tspan fill="url(#yellowGradient)">Version Control</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">Version Control</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Git for version control and collaboration</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 dark:border-gray-800">
                                        <svg width="300" height="50" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#8552f3" stopOpacity="1" />
                                                    <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="20">
                                                <tspan fill="url(#yellowGradient)">Cloud Technologies</tspan>
                                            </text>
                                        </svg>

                                        <div className="space-y-1 text-sm">
                                            <h3 className="font-bold">Cloud Technologies</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Microsoft Azure for cloud computing and services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
