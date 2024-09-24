import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import car1 from '../assets/innovaa.jpg';
import car2 from '../assets/innovacryst.jpg';
import car3 from '../assets/etiosm.jpg';
import temp from '../assets/tempt.jpg';
import bus from '../assets/bus.jpg';
// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500, // Slow down the speed for smoother transitions
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  touchThreshold: 10, // Reduce touch sensitivity
  adaptiveHeight: true, // Adjust the height dynamically
};

// AboutPage component
export default function AboutPage() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative min-h-screen py-16 px-4 md:px-8 lg:px-24 overflow-hidden bg-gray-100">
      <div className="relative h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:pl-8 md:pr-16 lg:pl-24 lg:pr-32 space-y-12 md:space-y-0 md:space-x-12">
        <motion.div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -150 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -150 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            Discover Our Premium Fleet
          </motion.h2>
          <motion.p
  className="text-lg md:text-xl text-gray-700 mb-6"
  initial={{ opacity: 0, y: 50 }}
  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  With over <span className="font-bold text-blue-600">500+ satisfied passengers</span> and a diverse fleet of vehicles, 
  including the elegant <span className="font-bold text-blue-600">Innova, Crysta</span>, the sleek <span className="font-bold text-blue-600">Etios</span>, 
  the spacious <span className="font-bold text-blue-600">Tempo Traveller</span>, and our comfortable <span className="font-bold text-blue-600">Tourist Bus</span>, 
  we offer unparalleled comfort and reliability for every journey. Whether you're traveling solo or with a group, we have the perfect ride for you. 
  Contact us today to experience luxury and convenience like never before.
</motion.p>

        </motion.div>

        <motion.div
          ref={sliderRef}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 150 }}
          animate={sliderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Slider {...sliderSettings}>
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={car1} alt="Stylish Sedan" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
                <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Innova</p>
              </div>
            </div>
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={car2} alt="Luxury SUV" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
                <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Crysta</p>
              </div>
            </div>
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={car3} alt="Comfort Cruiser" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
                <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Etios</p>
              </div>
            </div>
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={temp} alt="Comfort Cruiser" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
                <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Tempo</p>
              </div>
            </div>
            <div className="px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={bus} alt="Comfort Cruiser" className="w-full h-[24rem] md:h-[34rem] object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-3xl"></div>
                <p className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold rounded-b-3xl">Tourist bus</p>
              </div>
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
