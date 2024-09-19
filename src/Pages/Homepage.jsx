import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import HeroTaxi from '../Components/HeroTaxi';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactUsPage from './ContactUsPage'; 

const Homepage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <HeroTaxi />
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={servicesRef}>
        <ServicesPage />
      </div>
      <div ref={contactRef}>
        <ContactUsPage />
      </div>
    </div>
  );
};

export default Homepage;
