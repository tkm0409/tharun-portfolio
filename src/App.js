import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import Achievements from './components/Achievements';
import ParallaxGallery from './components/ParallaxGallery';
import GoToTop from './components/GoToTop';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
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

      <Element name="education">
        <Education />
      </Element>

      <Element name="awards">
        {/* <Awards /> */}
        <Achievements />
        <ParallaxGallery />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      {isScrolled && <GoToTop />}
    </React.Fragment>
  );
}

export default App;
