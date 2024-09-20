import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg'; // Replace with your logo path

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(50); // Reduced height

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
  }, []);

  // Animation variants for the staggered effect for navigation links
  const linkAnimationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  // Custom animation variants for the "Sri Prabha Tours & Travels" text
  const logoTextAnimationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 w-full p-2 bg-gray-900 text-white shadow-lg z-50 transition-colors duration-300"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
          .navbar-logo {
            font-family: 'Playfair Display', sans-serif;
          }
          .navbar-subtitle {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with Padding */}
        <div className="flex items-center">
          <div className="pr-4"> {/* Padding before the logo */}
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Animated Text for Sri Prabha Tour and Travels */}
          <motion.div
            className="flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={logoTextAnimationVariants} // Apply custom animation for text
          >
            <motion.h1
              className="text-xl md:text-2xl font-bold text-white tracking-wide navbar-logo"
              variants={logoTextAnimationVariants}
            >
              Sri Prabha
            </motion.h1>

            <motion.span
              className="text-sm md:text-base text-yellow-400 font-medium navbar-subtitle"
              variants={logoTextAnimationVariants}
            >
              Tour & Travels
            </motion.span>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <motion.div initial="hidden" animate="visible" variants={linkAnimationVariants}>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className={`cursor-pointer ${
                  activeSection === 'home' ? 'text-yellow-500' : 'text-gray-400'
                } transition-colors duration-300 text-sm`}
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div initial="hidden" animate="visible" variants={linkAnimationVariants}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className={`cursor-pointer ${
                  activeSection === 'about' ? 'text-yellow-500' : 'text-gray-400'
                } transition-colors duration-300 text-sm`}
              >
                About
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div initial="hidden" animate="visible" variants={linkAnimationVariants}>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className={`cursor-pointer ${
                  activeSection === 'services' ? 'text-yellow-500' : 'text-gray-400'
                } transition-colors duration-300 text-sm`}
              >
                Services
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div initial="hidden" animate="visible" variants={linkAnimationVariants}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className={`cursor-pointer ${
                  activeSection === 'contact' ? 'text-yellow-500' : 'text-gray-400'
                } transition-colors duration-300 text-sm`}
              >
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            className="text-white focus:outline-none"
            onClick={() =>
              document.getElementById('mobile-menu').classList.toggle('hidden')
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden absolute top-full right-0 bg-gray-800 w-full p-4"
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className={`block ${
                activeSection === 'home' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300 text-sm`}
              onClick={() =>
                document.getElementById('mobile-menu').classList.add('hidden')
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className={`block ${
                activeSection === 'about' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300 text-sm`}
              onClick={() =>
                document.getElementById('mobile-menu').classList.add('hidden')
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className={`block ${
                activeSection === 'services' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300 text-sm`}
              onClick={() =>
                document.getElementById('mobile-menu').classList.add('hidden')
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className={`block ${
                activeSection === 'contact' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300 text-sm`}
              onClick={() =>
                document.getElementById('mobile-menu').classList.add('hidden')
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
