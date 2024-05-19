import React from 'react';
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
        {/* <Awards /> */}
        <Achievements />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </React.Fragment>
  );
}

export default App;
