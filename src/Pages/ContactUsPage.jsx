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
              href="tel:+919945439756"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-2xl sm:text-3xl mr-2" />
              <span className="text-lg">+91 9945439756 </span>
            </motion.a>
            <motion.a
              href="mailto:sriprabhatoursndtravels@gmail.com"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-2xl sm:text-3xl mr-2" />
              <span className="text-lg">sriprabhatoursndtravels@gmail.com</span>
            </motion.a>
            <motion.a
  href="sms:918867453203?body=Hello"
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15528.840310377242!2d74.72005869538539!3d13.337204342202645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb9c568fd461%3A0x312b781c00fe42b1!2sAmbalpadi%2C%20Udupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1726836492593!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Our Location"
  ></iframe>
  <div className="text-center mt-4">
    <a
      href="https://www.google.com/maps/place/Ambalpadi,+Udupi,+Karnataka/@13.3372043,74.7200587,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbcbb9c568fd461:0x312b781c00fe42b1!8m2!3d13.3372043!4d74.7200587!16s%2Fg%2F11b6_v3w5r"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      View on Google Maps
    </a>
  </div>
</motion.div>


      </div>
    </section>
  );
}

export default ContactUsPage;
