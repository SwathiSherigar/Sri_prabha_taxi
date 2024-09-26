import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll'; // Import scroller for smooth scrolling

// import image1 from '../assets/r1.jpeg';
import image2 from '../assets/b11.jpg';
// import image3 from '../assets/e11.jpg';
// import image4 from '../assets/e5.jpg';
import image5 from '../assets/128.jpg';

const images = [image2, image5];

export default function HeroTaxi() {
  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    scroller.scrollTo('services', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70, // Adjust based on your navbar height
    });
  };

  return (
    <section className="relative flex justify-center items-center h-screen overflow-hidden" id="home">
      {/* Dynamic image transition */}
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImage && (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt="Taxi Service"
                className="w-full h-full object-cover" // Ensures image covers the container
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-16">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ride with <span className="text-blue-400">Ease</span>, Ride with <span className="text-blue-400">Us</span>
        </motion.h1>

        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Fast, Reliable & Safe Taxi Services
        </motion.h3>

        <motion.p
          className="text-lg font-light text-gray-300 lg:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Whether it's a quick trip or a long ride, we are here to take you anywhere, anytime with utmost comfort.
        </motion.p>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={scrollToNextSection}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Book Your Ride Now
          </button>

          {/* Animated taxi icon */}
          <AnimatedTaxiIcon />
        </motion.div>
      </div>
    </section>
  );
}

// Animated Taxi Icon
function AnimatedTaxiIcon() {
  return (
    <motion.svg
      width="90"
      height="90"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-6"
      animate={{ x: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M4 12L20 12L18 16L6 16L4 12Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="6" y="10" width="12" height="6" rx="3" fill="blue" />
      <circle cx="7" cy="16" r="1.5" fill="white" />
      <circle cx="17" cy="16" r="1.5" fill="white" />
    </motion.svg>
  );
}
