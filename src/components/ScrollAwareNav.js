import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';

const ScrollAwareNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navigation = [
    { title: "Skills", path: "skills" },
    { title: "Certifications", path: "certifications" },
    { title: "Experience", path: "experience" },
    { title: "Projects", path: "projects" },
    { title: "Education", path: "education" },
    { title: "Achievements", path: "awards" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Logo className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/30"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none p-2 rounded-lg transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="px-4 pt-3 pb-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default ScrollAwareNav;
