import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust this value to set your offset
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-800 text-neutral-300 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-700 p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span className="text-lg font-semibold">Get connected with us:</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-blue-500 transition-colors">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-pink-500 transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-green-500 transition-colors">
            <FaWhatsapp className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-blue-400 transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-blue-600 transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-xl">About Us</h6>
            <p>We provide reliable taxi booking services that ensure a safe and comfortable journey to your destination...</p>
          </div>

          {/* Our Services Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">Our Services</h6>
            <p className="mb-4 cursor-pointer text-neutral-300 hover:underline" onClick={() => handleScrollToSection('services')}>Innova</p>
            <p className="mb-4 cursor-pointer text-neutral-300 hover:underline" onClick={() => handleScrollToSection('services')}>Etios</p>
            <p className="mb-4 cursor-pointer text-neutral-300 hover:underline" onClick={() => handleScrollToSection('services')}>Crysta</p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">Useful Links</h6>
            <p className="mb-4"><Link to="/terms" className="text-neutral-300 hover:underline">Terms and Conditions</Link></p>
            <p className="mb-4 cursor-pointer text-neutral-300 hover:underline" onClick={() => handleScrollToSection('contact')}>Contact Us</p>
            <a href="tel:9945439756" className="text-gray-400 hover:text-white">
      Support/Help Center
    </a>                                 
          </div>

          {/* Location & Contact Section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-xl">Contact & Location</h6>
            <p className="mb-4"><span className="font-semibold">Address:</span> Ambalapady, N.H.-66 Udupi-576 101</p>
            <p className="mb-4"><span className="font-semibold">Phone:</span> +91 9945439756</p>
            <p className="mb-4"><span className="font-semibold">Email:</span>sriprabhatoursndtravels@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="text-center text-neutral-500 p-4">
        <span>&copy; 2024 Taxi Booking. All rights reserved.</span>
      </div>
    </footer>
  );
}
