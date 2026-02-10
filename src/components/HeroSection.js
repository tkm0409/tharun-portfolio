import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
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
        { title: "Projects", path: "projects" },
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
        "With over 3 years of hands-on experience, I specialize in building intelligent automation solutions as an Applied AI Engineer. My expertise spans GenAI technologies including agentic AI frameworks like OpenAI Agents SDK and LangChain, along with Python, LLM integration, and vector databases. Proficient in deploying AI-powered solutions on AWS and Azure cloud platforms, I drive innovation by bridging cutting-edge AI with enterprise automation. Let's build something extraordinary together!";

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="#">
                <Logo className="h-12 w-auto" />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 p-2 rounded-lg transition-colors duration-200"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
        <div className="relative bg-gradient-to-br from-gray-50 via-primary-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
            <div
                className={`absolute inset-0 blur-xl h-[580px] pointer-events-none z-0 ${state ? "hidden" : ""}`}
                style={{
                    background:
                        "linear-gradient(143.6deg, rgba(102, 126, 234, 0) 20.79%, rgba(118, 75, 162, 0.2) 40.92%, rgba(240, 147, 251, 0.15) 70.35%)",
                }}
            ></div>
            <ScrollAwareNav />
            <section className="py-16 md:py-24">
                <div className="max-w-screen-xl mx-auto text-gray-600 dark:text-gray-300 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <motion.div
                        className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl"
                        {...fadeInUp}
                    >
                        {!state && (
                            <>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
                                    <span>Hi! I'm </span>
                                    <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-glow-500 text-transparent bg-clip-text">
                                        Tharun Kumar
                                    </span>
                                </h1>
                                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-8">
                                    Applied AI Engineer
                                </p>
                            </>
                        )}
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-sans text-justify">
                            <TextGenerateEffect words={words} />
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={togglePdfViewer}
                                className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                            >
                                View Resume
                            </button>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-6 py-3 text-primary-600 dark:text-primary-400 font-semibold border-2 border-primary-500/50 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-xl transition-all duration-300 cursor-pointer text-center"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {isPdfOpen && (
                            <div className="fixed inset-0 z-50 overflow-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
                                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl w-full max-w-xl shadow-2xl">
                                    <Document
                                        file={resumePdf}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} width={Math.min(500, window.innerWidth - 80)} />
                                    </Document>
                                    <div className="mt-4 flex justify-between items-center">
                                        <button
                                            disabled={pageNumber <= 1}
                                            onClick={() => setPageNumber(pageNumber - 1)}
                                            className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 text-sm font-medium transition-colors hover:bg-primary-700"
                                        >
                                            Previous
                                        </button>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Page {pageNumber} of {numPages}</p>
                                        <button
                                            disabled={pageNumber >= numPages}
                                            onClick={() => setPageNumber(pageNumber + 1)}
                                            className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 text-sm font-medium transition-colors hover:bg-primary-700"
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <button
                                        onClick={togglePdfViewer}
                                        className="mt-4 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
                        <div className="relative w-full max-w-xl mx-auto">
                            <img
                                src={cutout}
                                className="w-full drop-shadow-2xl"
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
