// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight 
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Properties', path: '/properties' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
    ],
    'Services': [
      { name: 'Buy Property', path: '/properties?type=buy' },
      { name: 'Sell Property', path: '/sell' },
      { name: 'Property Valuation', path: '/valuation' },
      { name: 'Property Management', path: '/management' },
      { name: 'Investment Consultation', path: '/investment' },
    ],
    'Property Types': [
      { name: 'Luxury Villas', path: '/properties?type=villa' },
      { name: 'Apartments', path: '/properties?type=apartment' },
      { name: 'Penthouses', path: '/properties?type=penthouse' },
      { name: 'Commercial', path: '/properties?type=commercial' },
      { name: 'Beach Houses', path: '/properties?type=beach' },
    ],
    'Resources': [
      { name: 'Market Reports', path: '/reports' },
      { name: 'Mortgage Calculator', path: '/calculator' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  };

  const contactInfo = [
    { 
      icon: <FaPhone />, 
      text: '+1 (888) 456-7890',
      link: 'tel:+18884567890',
      subtext: 'Mon-Sat: 8AM-8PM'
    },
    { 
      icon: <FaEnvelope />, 
      text: 'info@premiumestate.com',
      link: 'mailto:info@premiumestate.com',
      subtext: '24/7 Email Support'
    },
    { 
      icon: <IoLogoWhatsapp />, 
      text: '+1 (888) 456-7890',
      link: 'https://wa.me/18884567890',
      subtext: 'WhatsApp Chat'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      text: '123 Luxury Avenue',
      link: 'https://maps.google.com',
      subtext: 'Beverly Hills, CA 90210'
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const certifications = [
    'NAR Certified',
    'Luxury Specialist',
    'Top Producer 2024',
    '5-Star Rated'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Brand & Contact */}
            <div>
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-display font-bold text-2xl">U</span>
                  </div>
                  
                   
                  <div>
                    <h2 className="text-3xl font-display font-bold">
                      United<span className="text-primary-400">Reality</span>
                    </h2>
                    <p className="text-gray-400 text-sm">Luxury Real Estate Solutions</p>
                  </div>
                </Link>
                <p className="text-gray-300 mt-6 max-w-md">
                  Transforming real estate experiences with premium service, 
                  market expertise, and unparalleled client satisfaction since 2010.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.includes('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group hover:text-primary-300 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
                      <span className="text-gray-300 group-hover:text-white">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{info.text}</div>
                      <div className="text-sm text-gray-400">{info.subtext}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-primary-300 hover:translate-x-1 transition-all duration-300 flex items-center group"
                        >
                          <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Bar */}
          <div className="py-6 border-y border-gray-800 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <span className="text-gray-400 font-medium">Certified & Recognized:</span>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-sm"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-2xl p-8 mb-12 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Get Exclusive Property Updates
                </h3>
                <p className="text-gray-300">
                  Subscribe to our newsletter for market insights, new listings, 
                  and exclusive investment opportunities.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© Growth Flow Media. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-400">
                MLS# 1234567 | BRE# 01234567
              </span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Trust Badges */}
        <div className="bg-gray-900/50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">A+</div>
                <div className="text-xs text-gray-400">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-400">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;