import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';


import HeroSection from './components/HeroSection';
import ShortStory from './components/ShortStory';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import Achievements from './components/Achievements';
import ParallaxGallery from './components/ParallaxGallery';
import Projects from './components/Projects';
import GoToTop from './components/GoToTop';
import Footer from './components/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider value={{ isDarkMode, toggleTheme }}>
      <div className="App transition-colors duration-300 ease-in-out">
        <HeroSection />
        <ShortStory />
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="certifications">
          <Certifications />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="awards">
          <Achievements />
          <ParallaxGallery />
        </Element>
        <Element name="contact">
          <Contact isDarkMode={isDarkMode} />
        </Element>
        <Footer isDarkMode={isDarkMode} />
        <GoToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
