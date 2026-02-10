import { useState } from 'react';
import cutoutImage from '../assets/Tharun Kumar Cutout.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ScrollAwareNav from './ScrollAwareNav';

const HeroSection = () => {

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
                <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between md:min-h-[700px]">

                    {/* Image Layer - Now first in mobile view */}
                    <motion.div
                        className="relative w-full md:absolute md:right-0 md:bottom-0 z-10 md:w-auto flex items-end justify-center md:justify-end pointer-events-none order-1 md:order-2"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={cutoutImage}
                            alt="Tharun Kumar"
                            className="h-[50vh] sm:h-[55vh] md:h-[85vh] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent)] md:[mask-image:none]"
                            draggable="false"
                            onContextMenu={preventContextMenu}
                        />
                    </motion.div>

                    {/* Text Content - Overlays on mobile, left side on desktop */}
                    <div className="absolute md:relative w-full md:w-[55%] lg:w-1/2 flex flex-col items-start justify-center text-left z-30 px-6 md:px-0 md:pl-8 lg:pl-16 top-[15%] md:top-auto order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            {/* Greeting */}
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
                                Hello,
                                <br />
                                <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                                    I'm Tharun
                                </span>
                            </h2>

                            {/* One-liner */}
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-8 leading-relaxed">
                                Applied AI Engineer designing and building beautiful web applications.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-sm sm:text-base rounded-full transition-all hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer shadow-md"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold text-sm sm:text-base rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
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
