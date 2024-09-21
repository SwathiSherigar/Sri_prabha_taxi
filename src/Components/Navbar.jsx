import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import logo from '../assets/logos.jpg';

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

  const handleLogoClick = () => {
    if (!isHome) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <nav ref={navbarRef} className="fixed top-0 w-full p-2 bg-white text-gray-800 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="pr-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {isHome ? (
            <>
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`cursor-pointer ${activeSection === 'home' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`cursor-pointer ${activeSection === 'about' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`cursor-pointer ${activeSection === 'services' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`cursor-pointer ${activeSection === 'contact' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink
                  to="/"
                  className={`cursor-pointer ${location.pathname === '/' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll('about')}
                  className={`cursor-pointer ${location.pathname === '/about' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll('services')}
                  className={`cursor-pointer ${location.pathname === '/services' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll('contact')}
                  className={`cursor-pointer ${location.pathname === '/contact' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border border-gray-700 rounded text-gray-900 hover:text-gray-800 hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <ul className="flex flex-col items-center py-4 space-y-2">
          {isHome ? (
            <>
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`block px-4 py-2 ${activeSection === 'home' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`block px-4 py-2 ${activeSection === 'about' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`block px-4 py-2 ${activeSection === 'services' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  className={`block px-4 py-2 ${activeSection === 'contact' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                  onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink
                  to="/"
                  className={`block px-4 py-2 ${location.pathname === '/' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateAndScroll('about');
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${location.pathname === '/about' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateAndScroll('services');
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${location.pathname === '/services' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateAndScroll('contact');
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 ${location.pathname === '/contact' ? 'text-blue-950' : 'text-blue-500'} text-sm hover:text-blue-700 transition-colors`}
                >
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
