import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ThemePreferenceDialog from './components/ThemePreferenceDialog';
import HeroSection from './components/HeroSection';
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
  const [showPreferenceDialog, setShowPreferenceDialog] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      setShowPreferenceDialog(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const setThemePreference = (preference) => {
    setIsDarkMode(preference === 'dark');
    localStorage.setItem('theme', preference);
    setShowPreferenceDialog(false);
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleTheme }}>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        {showPreferenceDialog && (
          <ThemePreferenceDialog setThemePreference={setThemePreference} />
        )}
        <nav className="fixed top-0 right-0 m-4 z-50">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </nav>
        <HeroSection />
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="certifications">
          <Certifications />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
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
