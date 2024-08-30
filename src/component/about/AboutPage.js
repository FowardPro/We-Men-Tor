// src/component/About/AboutPage.js
import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import MissionSection from './MissionSection';
import CoreValuesSection from './CoreValuesSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <MissionSection />
      <CoreValuesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
