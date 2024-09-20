import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroTaxi from './Components/HeroTaxi';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactUsPage';
import TermsAndConditions from './Pages/TermsAndConditions';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* Terms and Conditions Route */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Home Page with Different Sections
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroTaxi />
      {/* About Section */}
      <section id="about">
        <AboutPage />
      </section>
      {/* Services Section */}
      <section id="services">
        <ServicesPage />
      </section>
      {/* Contact Section */}
      <section id="contact">
        <ContactUsPage />
      </section>
    </>
  );
};

export default App;
