import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full w-11 h-11 flex justify-center items-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 z-50 hover:scale-110 animate-fade-in"
        >
          <FaArrowUp size={14} />
        </div>
      )}
    </>
  );
};

export default GoToTop;
