import React from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import Achievements from './components/Achievements';
import ParallaxGallery from './components/ParallaxGallery';
import GoToTop from './components/GoToTop';

function App() {
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
        <Achievements />
        <ParallaxGallery />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      <GoToTop />
    </React.Fragment>
  );
}

export default App;
