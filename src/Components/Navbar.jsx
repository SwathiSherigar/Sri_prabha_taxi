import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg'; // Replace with your logo path

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(70); // Default height

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - 50 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    // Update navbar height dynamically
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    // Call once to set initial height
    updateNavbarHeight();

    // Update navbar height on window resize
    window.addEventListener('resize', updateNavbarHeight);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 w-full p-4 bg-gray-900 text-white shadow-lg z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold text-white">
            Sri Prabha Tour and Travels
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-navbarHeight} // Dynamic offset
              className={`cursor-pointer ${
                activeSection === 'home' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight} // Dynamic offset
              className={`cursor-pointer ${
                activeSection === 'about' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-navbarHeight} // Dynamic offset
              className={`cursor-pointer ${
                activeSection === 'services' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight} // Dynamic offset
              className={`cursor-pointer ${
                activeSection === 'contact' ? 'text-blue-500' : 'text-gray-400'
              } transition-colors duration-300`}
            >
              Contact
            </Link>
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
              } transition-colors duration-300`}
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
              } transition-colors duration-300`}
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
              } transition-colors duration-300`}
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
              } transition-colors duration-300`}
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
