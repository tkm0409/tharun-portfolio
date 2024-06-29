import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import cutout from '../assets/cutout1.png';
import { TextGenerateEffect } from "./text-generate-effect.tsx";
import { Link } from 'react-scroll';

export default () => {
    const [state, setState] = useState(false);
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    const togglePdfViewer = () => setIsPdfOpen(!isPdfOpen);

    const preventContextMenu = (e) => {
        e.preventDefault();
    };

    const navigation = [
        { title: "Skills", path: "skills" },
        { title: "Certifications", path: "certifications" },
        { title: "Experience", path: "experience" },
        { title: "Education", path: "education" },
        { title: "Awards", path: "awards" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const words =
        "Harnessing over 2 years of hands-on experience, I specialize in sculpting dynamic, user-centric solutions as a seasoned .NET Full Stack Developer and RPA expert. My passion lies in crafting top-tier code and orchestrating flawless user journeys. Proficient across a spectrum of technologies including .NET, C#, ASP.NET, JavaScript, React, SQL Server, and Automation Anywhere, I am adept at integrating applications like ServiceNow, Salesforce, DocuSign, and Jira. Let's ignite innovation together and breathe life into your visionary concepts!";

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="#">
                <img
                    src={logo}
                    width={150}
                    height={80}
                    alt="logo"
                    draggable="false"
                    onContextMenu={preventContextMenu}
                />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative">
            <div
                className={`absolute inset-0 blur-xl h-[580px] pointer-events-none z-0 ${state ? "hidden" : ""
                    }`}
                style={{
                    background:
                        "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                }}
            ></div>
            <header className="relative z-10">
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav
                    className={`pb-5 md:text-sm ${state
                        ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent z-10"
                        : ""
                        }`}
                >
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div
                            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
                                } `}
                        >
                            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className="text-gray-700 hover:text-blue-600"
                                        >
                                            <Link
                                                to={item.path}
                                                className="block text-lg font-bold"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block mt-4 md:mt-0 md:py-3 md:px-6 md:inline">
                                <a
                                    href="https://drive.google.com/file/d/149CLa1y8IXfUwpKUGM7Fl0XniY1fqX7z/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="py-0">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        {!state && (
                            <>
                                <h2 className="text-4xl md:text-5xl mb-4 relative inline-block z-10">
                                    <span>Hi! I'm </span>
                                    <span className="font-bold bg-blue-500 text-white px-2 py-1 rounded">
                                        {" "}
                                        Tharun Kumar{" "}
                                    </span>
                                </h2>

                                <p className="text-2xl text-blue-600 mb-8">
                                    .NET Full Stack Developer/RPA Developer
                                </p>
                            </>
                        )}
                        <p className="text-lg text-gray-700 leading-loose text-justify z-10">
                            <TextGenerateEffect words={words} />
                        </p>
                    </div>
                    <div className="flex-1 hidden md:block">
                        <img
                            src={cutout}
                            className=""
                            alt="profile-cutout"
                            draggable="false"
                            onContextMenu={preventContextMenu}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
