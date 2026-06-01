import { FaLinkedin } from 'react-icons/fa';

export default function Footer ({ isDarkMode }) {
    return (
        <footer className={`pt-10 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
                <div className="py-10 items-center justify-between sm:flex">
                    <div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            &copy; {new Date().getFullYear()} Tharun Kumar Portfolio. All rights reserved.
                        </p>
                        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                            Last updated: June 2026
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/tharunkumar0409"
                        className={`mt-4 sm:mt-0 inline-block transition-colors ${isDarkMode ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'}`}
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
