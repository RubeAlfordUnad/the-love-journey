import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import logo from '../images/logo-Photoroom.png'; // <-- Import your logo

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="videos/love.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Brand Name and Logo */}
      <motion.div
        className="absolute top-10 left-10 z-20 flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full backdrop-blur-lg shadow-lg group"
        variants={brandVariants}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        {/* Logo with Glow on Hover */}
        <div className="relative w-12 h-12">
          <img
            src={logo}
            alt="The Love Journey Logo"
            className="w-full h-full object-contain animate-pulse group-hover:scale-110 transition-transform duration-300"
          />
          {/* Soft glow effect behind */}
          <div className="absolute inset-0 rounded-full bg-pink-400 opacity-30 blur-lg scale-110 hidden group-hover:block"></div>
        </div>

        {/* Company Name with Gradient */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-rose-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent transition-all duration-500 group-hover:brightness-125">
          The Love Journey
        </h1>
      </motion.div>

      {/* Center Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          <Typewriter
            words={[
              'Your match, your journey.',
              'Every step crafted with care.',
              'Discover meaningful love.',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <motion.button
          className="mt-6 py-3 px-8 text-lg rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-400 text-white font-semibold shadow-md hover:shadow-2xl hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.08 }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
}
