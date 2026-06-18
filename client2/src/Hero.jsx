// src/components/sections/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Counter component for stats
  const Counter = ({ end, duration = 2000, label }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start > end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );
      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <div className="text-center" ref={countRef}>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-sm md:text-lg text-gray-300">{label}</div>
      </div>
    );
  };

  // Main site stats
  const stats = [
    { value: 26, label: 'Properties Sold' },
    { value: 7, label: 'Years Experience' },
    { value: 100, label: 'Verified Properties' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Home Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Animated Background Elements - Updated to main site theme */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          {/* Main Heading - Main site content with more spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 md:mt-16 lg:mt-24"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-lg">
              Your Trusted Partner in <br />
              <span className="text-yellow-400">Premium Residential & Commercial Properties</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 md:mb-14 max-w-3xl mx-auto font-light">
              Find luxury properties and exclusive real estate opportunities with our expert guidance
            </p>
          </motion.div>

          {/* CTA Button - Main site with more spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-20"
          >
            <Link to="/contact-us">
              <button className="bg-yellow-400 text-[#0a1628] px-8 py-4 md:px-10 md:py-5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg">
                Schedule Appointment
              </button>
            </Link>
          </motion.div>

          {/* Stats Section - Main site theme with more spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mt-4 md:mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Counter end={stat.value} label={stat.label} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default Hero;
