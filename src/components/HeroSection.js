import cutoutImage from '../assets/Tharun Kumar Cutout.png';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAwareNav from './ScrollAwareNav';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    // Rotating keywords for the hero section
    const keywords = [
        { text: 'RAG-based', color: 'text-orange-600 dark:text-orange-400' },
        { text: 'Multi-modal', color: 'text-emerald-600 dark:text-emerald-400' },
        { text: 'Production-ready', color: 'text-orange-600 dark:text-orange-400' },
        { text: 'Enterprise-ready', color: 'text-emerald-600 dark:text-emerald-400' },
        { text: 'Agentic', color: 'text-orange-600 dark:text-orange-400' },
    ];

    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        }, 2500); // Change every 2.5 seconds

        return () => clearInterval(interval);
    }, [keywords.length]);

    const preventContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <section className="relative min-h-[550px] md:min-h-screen w-full flex flex-col overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Light Mode Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-blue-50/40 to-white/80 dark:opacity-0 transition-opacity duration-500"></div>

                {/* Dark Mode Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-950 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>

                {/* Accents */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay animate-pulse delay-1000"></div>
            </div>

            <ScrollAwareNav />

            <div className="relative flex-grow flex items-center justify-center w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">

                {/* Background Text Layer - Behind Image */}
                <div className="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden">
                    <h1 className="text-[17vw] sm:text-[19vw] font-black text-gray-200/60 dark:text-gray-800 leading-none tracking-tighter whitespace-nowrap animate-fade-in-up transform translate-y-10 sm:translate-y-0">
                        THARUN
                    </h1>
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between md:min-h-[600px]">

                    {/* MOBILE LAYOUT - Circular Photo Card with Details Below */}
                    <div className="md:hidden w-full flex flex-col items-center justify-center px-4 py-8 space-y-6 relative">
                        {/* Mobile Background Text */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-0 select-none overflow-hidden">
                            <h1 className="text-[20vw] font-black text-gray-200/50 dark:text-gray-800/70 leading-none tracking-tighter whitespace-nowrap animate-fade-in-up">
                                THARUN
                            </h1>
                        </div>

                        {/* Circular Photo Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Decorative Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 blur-xl opacity-40 animate-pulse"></div>

                            {/* Photo Card */}
                            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                <img
                                    src={cutoutImage}
                                    alt="Tharun Kumar"
                                    className="w-full h-full object-cover object-top scale-110 -translate-x-4"
                                    draggable="false"
                                    onContextMenu={preventContextMenu}
                                />

                                {/* Bottom Gradient Overlay with Text */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-3">
                                    <div className="text-center">
                                        <p className="text-white font-bold text-lg tracking-widest">TKM</p>
                                        <p className="text-white/80 text-xs font-medium">AI Engineer</p>
                                    </div>
                                </div>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50 animate-pulse"></div>
                            </div>
                        </motion.div>

                        {/* Details Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
                        >
                            {/* Greeting */}
                            <h2 className="text-3xl font-extrabold text-center mb-2">
                                <span className="text-gray-900 dark:text-white">Hello, I'm </span>
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                                    Tharun
                                </span>
                            </h2>

                            {/* One-liner with rotating keywords */}
                            <p className="text-base text-gray-700 dark:text-gray-300 font-medium text-center mb-6 leading-relaxed">
                                Applied AI Engineer building{' '}
                                <span className="inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentKeywordIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className={`font-extrabold ${keywords[currentKeywordIndex].color}`}
                                        >
                                            {keywords[currentKeywordIndex].text}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>{' '}
                                AI Solutions.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 w-full">
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-sm text-center rounded-full transition-all hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer shadow-md"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="w-full px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold text-sm text-center rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* DESKTOP LAYOUT - Original Side-by-Side Design */}
                    <motion.div
                        className="hidden md:block absolute right-0 bottom-0 z-10 w-auto pointer-events-none"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={cutoutImage}
                            alt="Tharun Kumar"
                            className="h-[85vh] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            draggable="false"
                            onContextMenu={preventContextMenu}
                        />
                    </motion.div>

                    {/* Desktop Text Content */}
                    <div className="hidden md:flex relative w-[55%] lg:w-1/2 flex-col items-start justify-center text-left z-30 pl-8 lg:pl-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            {/* Greeting */}
                            <h2 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
                                Hello,
                                <br />
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                                    I'm Tharun
                                </span>
                            </h2>

                            {/* One-liner with rotating keywords */}
                            <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium mb-8 leading-relaxed">
                                Applied AI Engineer building{' '}
                                <span className="inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentKeywordIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className={`font-extrabold ${keywords[currentKeywordIndex].color}`}
                                        >
                                            {keywords[currentKeywordIndex].text}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>{' '}
                                AI Solutions.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-base rounded-full transition-all hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer shadow-md"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="px-8 py-3.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold text-base rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
