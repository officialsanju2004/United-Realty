// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isHome ? 'bg-transparent' : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
               <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-display font-bold text-2xl">U</span>
                  </div>
              <span className="text-2xl font-display font-bold text-dark-900">
             United<span className="text-primary-600">Realty</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : isHome ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2  text-white hover:text-primary-600"
                >
                  <FaPhone className="text-sm" />
                  <span className="hidden lg:inline">+1 (234) 567-890</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className={`text-2xl ${isHome ? 'text-white' : 'text-gray-700'}`} />
              ) : (
                <FaBars className={`text-2xl ${isHome ? 'text-white' : 'text-gray-700'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="bg-white shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-2  hover:text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center text-white  space-x-2  hover:text-primary-600"
                  >
                    <FaPhone />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <Link
                    to="/contact"
                    className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-primary-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;