import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(50);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + navbarHeight + 50;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - 50 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);

  const isHome = location.pathname === '/';

  const navigateAndScroll = (section) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -navbarHeight,
      });
    }
  };

  useEffect(() => {
    if (isHome && location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -navbarHeight,
      });
    }
  }, [isHome, location, navbarHeight]);

  return (
    <nav ref={navbarRef} className="fixed top-0 w-full p-2 bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="pr-6">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <motion.div className="flex flex-col items-start" initial="hidden" animate="visible">
            <motion.h1 className="text-xl font-bold text-white tracking-wide">Sri Prabha</motion.h1>
            <motion.span className="text-sm text-yellow-400 font-medium">Tour & Travels</motion.span>
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {isHome ? (
            <>
              <li>
                <ScrollLink to="home" smooth={true} duration={500} offset={-navbarHeight} className={`cursor-pointer ${activeSection === 'home' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} offset={-navbarHeight} className={`cursor-pointer ${activeSection === 'about' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={500} offset={-navbarHeight} className={`cursor-pointer ${activeSection === 'services' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-navbarHeight} className={`cursor-pointer ${activeSection === 'contact' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink to="/" className={`cursor-pointer ${location.pathname === '/' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Home
                </RouterLink>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('about')} className={`cursor-pointer ${location.pathname === '/about' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('services')} className={`cursor-pointer ${location.pathname === '/services' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('contact')} className={`cursor-pointer ${location.pathname === '/contact' ? 'text-yellow-500' : 'text-gray-400'} text-sm`}>
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center px-3 py-2 border border-gray-700 rounded text-gray-400 hover:text-white hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="flex flex-col items-center py-4 space-y-2">
          {isHome ? (
            <>
              <li>
                <ScrollLink to="home" smooth={true} duration={500} offset={-navbarHeight} className={`block px-4 py-2 ${activeSection === 'home' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} offset={-navbarHeight} className={`block px-4 py-2 ${activeSection === 'about' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={500} offset={-navbarHeight} className={`block px-4 py-2 ${activeSection === 'services' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-navbarHeight} className={`block px-4 py-2 ${activeSection === 'contact' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink to="/" className={`block px-4 py-2 ${location.pathname === '/' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </RouterLink>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('about')} className={`block px-4 py-2 ${location.pathname === '/about' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('services')} className={`block px-4 py-2 ${location.pathname === '/services' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateAndScroll('contact')} className={`block px-4 py-2 ${location.pathname === '/contact' ? 'text-yellow-500' : 'text-gray-400'} text-sm`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
