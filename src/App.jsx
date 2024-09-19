import React from 'react';
import Navbar from './Components/Navbar';
import HeroTaxi from './Components/HeroTaxi';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactUsPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
     
      <Navbar />
      <HeroTaxi />
      <AboutPage />
      <ServicesPage />
      <ContactUsPage />
      <Footer />
      
    </div>
  );
}

export default App;
