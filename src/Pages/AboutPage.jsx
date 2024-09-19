import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import car1 from '../assets/1.jpeg';
import car2 from '../assets/2.jpeg';
import car3 from '../assets/3.jpeg';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000, // Slow down the speed of the slider transition
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Hide arrows for touch-based navigation
  swipeToSlide: true, // Enable swiping to slide
  touchThreshold: 100, // Sensitivity for touch detection
};

// AboutPage component
export default function AboutPage() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3,   // Trigger when 30% of the section is visible
  });

  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,   // Trigger when 20% of the section is visible
  });

  return (
    <section id="about" className="relative min-h-screen py-16 px-4 md:px-8 lg:px-24 overflow-hidden bg-gray-100">
      {/* Content Section */}
      <div className="relative h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:pl-8 md:pr-16 lg:pl-24 lg:pr-32 space-y-12 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -150 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Discover Our Premium Fleet
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            With over <span className="font-bold text-blue-600">500+ satisfied passengers</span> and a diverse fleet of vehicles, including the elegant <span className="font-bold text-blue-600">Innova Crysta</span>, the sleek <span className="font-bold text-blue-600">Etios</span>, the spacious <span className="font-bold text-blue-600">Tempo Traveller</span>, and our comfortable <span className="font-bold text-blue-600">Tourist Bus</span>, we offer unparalleled comfort and reliability for every journey. Whether you're traveling solo or with a group, we have the perfect ride for you. Contact us today to experience luxury and convenience like never before.
          </motion.p>
        </motion.div>

        {/* React Slick Photo Section */}
        <motion.div
          ref={sliderRef}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 150 }}
          animate={sliderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Slider {...sliderSettings}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img src={car1} alt="Stylish Sedan" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
              <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Stylish Sedan</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img src={car2} alt="Luxury SUV" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
              <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Luxury SUV</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img src={car3} alt="Comfort Cruiser" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
              <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Comfort Cruiser</p>
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
