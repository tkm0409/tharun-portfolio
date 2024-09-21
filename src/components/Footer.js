import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer ({ isDarkMode }) {


    return (
        <footer className={`pt-10 relative ${isDarkMode ? 'bg-gray-900' : ''}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        © 2024 Tharun Kumar Portfolio. All rights reserved.
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/tharunkumar0409"
                        className={`mt-4 sm:mt-0 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
