import React from 'react';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactUsPage = () => {
  const { ref: refHeading, inView: inViewHeading } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refContact, inView: inViewContact } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refMap, inView: inViewMap } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-8 px-4 sm:px-6 md:px-8 lg:px-24 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-contact.jpg')" }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={inViewHeading ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          ref={refHeading}
        >
          Contact Us
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-lg text-gray-600 text-center mb-8 md:mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inViewHeading ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are here to help you with any questions or concerns. Feel free to reach out to us using the contact details below or drop us a message directly.
        </motion.p>
        
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inViewContact ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.4 }}
          ref={refContact}
        >
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-2xl sm:text-3xl mr-2" />
              <span className="text-lg">+1 (234) 567-890</span>
            </motion.a>
            <motion.a
              href="mailto:info@company.com"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-2xl sm:text-3xl mr-2" />
              <span className="text-lg">info@company.com</span>
            </motion.a>
            <motion.a
              href="mailto:info@company.com"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaComments className="text-2xl sm:text-3xl mr-2" />
              <span className="text-lg">Send Message</span>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className="relative"
          variants={fadeInUp}
          initial="hidden"
          animate={inViewMap ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.6 }}
          ref={refMap}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Find Us Here</h3>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=74.7529,13.3350,74.7581,13.3404&layer=mapnik"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
            className="cursor-pointer"
            onClick={() => window.open('https://www.openstreetmap.org/?mlat=13.3377&mlon=74.7555#map=16/13.3377/74.7555', '_blank')}
          ></iframe>
          <div className="text-center mt-4">
            <a
              href="https://www.openstreetmap.org/?mlat=13.3377&mlon=74.7555#map=16/13.3377/74.7555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on OpenStreetMap
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUsPage;
