import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Departments from './Departments';
import Facilities from './Facilities';
import WhyChooseUs from './WhyChooseUs';
import Treatments from './Treatments';
import BedAdmission from './BedAdmission';
import HealthPackages from './HealthPackages';
import EmergencyCTA from './EmergencyCTA';
import Testimonials from './Testimonials';
import Location from './Location';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Facilities />
      <WhyChooseUs />
      <Treatments />
      <BedAdmission />
      <HealthPackages />
      <EmergencyCTA />
      <Testimonials />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}
