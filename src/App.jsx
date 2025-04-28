import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Timeline from './components/Timeline';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col">
      <Home />
      <AboutUs />
      <Timeline />
      <Testimonials />
      <Plans />
      <ContactUs />
      <Footer />
    </div>
  );
}