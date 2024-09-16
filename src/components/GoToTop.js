import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </div>
  );
};

export default GoToTop;
