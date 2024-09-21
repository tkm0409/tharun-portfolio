import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import cutout from '../assets/cutout1.png';
import { TextGenerateEffect } from "./text-generate-effect.tsx";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import resumePdf from '../assets/THARUN KUMAR MADDALA - RPA Developer.pdf';
import ScrollAwareNav from './ScrollAwareNav';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default () => {
    const [state, setState] = useState(false);
    const [isPdfOpen, setIsPdfOpen] = useState(false);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const togglePdfViewer = () => setIsPdfOpen(!isPdfOpen);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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
        "Harnessing over 2 years of hands-on experience, I specialize in sculpting dynamic, user-centric solutions as a seasoned .NET & Python Full Stack Developer and RPA expert. My passion lies in crafting top-tier code and orchestrating flawless user journeys. Proficient across a spectrum of technologies including Java, Python, C#, ASP.NET, JavaScript, React, Angular, SQL Server, and Automation Anywhere, I am adept at integrating applications like ServiceNow, Salesforce, DocuSign, and Jira. Let's ignite innovation together and breathe life into your visionary concepts!";

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
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
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

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div
                className={`absolute inset-0 blur-xl h-[580px] pointer-events-none z-0 ${state ? "hidden" : ""
                    }`}
                style={{
                    background:
                        "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
                }}
            ></div>
            <ScrollAwareNav />
            <section className="py-12 md:py-20">
                <div className="max-w-screen-xl mx-auto text-gray-600 dark:text-gray-300 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <motion.div 
                        className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl"
                        {...fadeInUp}
                    >
                        {!state && (
                            <>
                                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
                                    <span>Hi! I'm </span>
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                                        Tharun Kumar
                                    </span>
                                </h1>
                                <p className="text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8">
                                    Full Stack Developer & RPA Expert
                                </p>
                            </>
                        )}
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-serif text-justify">
                            <TextGenerateEffect words={words} />
                        </p>
                        <div className="flex space-x-4">
                            <button
                                onClick={togglePdfViewer}
                                className="px-6 py-3 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition duration-300"
                            >
                                View Resume
                            </button>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-6 py-3 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-lg transition duration-300 cursor-pointer"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {isPdfOpen && (
                            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center">
                                <div className="bg-white p-4 rounded-lg w-full max-w-xl">
                                    <Document
                                        file={resumePdf}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} width={500} />
                                    </Document>
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            disabled={pageNumber <= 1}
                                            onClick={() => setPageNumber(pageNumber - 1)}
                                            className="px-3 py-1 bg-indigo-600 text-white rounded-lg disabled:opacity-50 text-sm"
                                        >
                                            Previous
                                        </button>
                                        <p className="text-sm">Page {pageNumber} of {numPages}</p>
                                        <button
                                            disabled={pageNumber >= numPages}
                                            onClick={() => setPageNumber(pageNumber + 1)}
                                            className="px-3 py-1 bg-indigo-600 text-white rounded-lg disabled:opacity-50 text-sm"
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <button
                                        onClick={togglePdfViewer}
                                        className="mt-4 px-3 py-1 bg-red-600 text-white rounded-lg text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                    <motion.div 
                        className="flex-1 mt-12 md:mt-0 hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full max-w-xl mx-auto perspective-1000">
                            <img
                                src={cutout}
                                className="w-full cutout-3d"
                                alt="Tharun Kumar"
                                draggable="false"
                                onContextMenu={preventContextMenu}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
