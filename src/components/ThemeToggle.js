import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-700' : 'bg-primary-200'
        }`}
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`flex h-6 w-6 transform items-center justify-center rounded-full shadow-md ring-0 transition-all duration-300 ${isDarkMode ? 'translate-x-[1.6rem] bg-gray-800 text-yellow-400' : 'translate-x-1 bg-white text-yellow-500'
          }`}
      >
        {isDarkMode ? (
          <FaMoon className="h-3.5 w-3.5" />
        ) : (
          <FaSun className="h-3.5 w-3.5" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;