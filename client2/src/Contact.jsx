import React, { useEffect, useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, User, MessageSquare,
  Facebook, Instagram, Linkedin, Twitter, Clock,
  CheckCircle, Building, Users, Star, Award, Shield,
  Calendar, Heart, ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import nitish from '../images/nitish.jpg';
import { FaWhatsapp ,FaYoutube,FaFacebook} from 'react-icons/fa';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'residential'
  });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
  };

  // Quick contact cards
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 98159 78773",
      description: "Available Monday-Saturday, 10am-7pm",
      action: "Call Now",
      link: "tel:+919815978773"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "nm@nitishestate.com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      link: "mailto:nm@nitishestate.com"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
      title: "Free Consultation",
      description: "Get expert advice without any charges"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
      title: "Fast Response",
      description: "We reply within 24 hours"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
      title: "Expert Guidance",
      description: "7+ years of industry experience"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
      title: "100% Transparent",
      description: "No hidden charges, clear communication"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628] shadow-lg py-3' : 'bg-[#0a1628]/95 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-25 h-15 bg-yellow-400 rounded-lg flex items-center justify-center">
              <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-yellow-400 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about-us" className="text-white hover:text-yellow-400 font-medium transition-colors duration-300">
              About Us
            </Link>
            <Link to="/contact-us" className="text-yellow-400 font-medium transition-colors duration-300">
              Contact Us
            </Link>
            <button className="bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
              Schedule Visit
            </button>
          </div>
          
          <button className="md:hidden text-yellow-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628] shadow-lg py-4 px-6">
            <Link to="/" className="block py-3 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a]">
              Home
            </Link>
            <Link to="/about-us" className="block py-3 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a]">
              About Us
            </Link>
            <Link to="/contact-us" className="block py-3 text-yellow-400 font-medium border-b border-[#1a2a3a]">
              Contact Us
            </Link>
            <button className="mt-4 w-full bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium">
              Schedule Visit
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-400 font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" /> Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Start Your <span className="text-yellow-400">Real Estate Journey</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Reach out to us for expert guidance on residential and commercial properties across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-12 relative z-20">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-xl mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-2">{card.title}</h3>
                <p className="text-yellow-500 font-semibold mb-1">{card.details}</p>
                <p className="text-gray-500 text-sm mb-4">{card.description}</p>
                <a href={card.link} className="text-yellow-500 font-medium hover:text-yellow-600 transition-colors inline-flex items-center">
                  {card.action} <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Send className="w-6 h-6 text-yellow-500" />
                </div>
                <h2 className="text-3xl font-bold text-[#0a1628]">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="investment">Investment</option>
                    <option value="nri">NRI Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your property requirements..."
                    ></textarea>
                    <MessageSquare className="absolute left-4 top-6 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-[#0a1628] font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Right - Contact Info & Nitish */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Nitish Profile Card */}
              <div className="bg-[#0a1628] rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-yellow-400 p-1">
                        <img 
                          src={nitish} 
                          alt="Nitish Mahajan"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-[#0a1628]"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Nitish Mahajan</h3>
                      <p className="text-yellow-400">Real Estate Consultant</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    With over 7 years of experience in the Indian real estate market, Nitish specializes in helping clients find their dream homes and profitable investments. He provides end-to-end support from property selection to legal verification and loan assistance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#1a2a3a] px-3 py-2 rounded-lg text-center flex-1 min-w-[80px]">
                      <p className="text-yellow-400 font-bold">26+</p>
                      <p className="text-gray-400 text-xs">Properties Sold</p>
                    </div>
                    <div className="bg-[#1a2a3a] px-3 py-2 rounded-lg text-center flex-1 min-w-[80px]">
                      <p className="text-yellow-400 font-bold">7+</p>
                      <p className="text-gray-400 text-xs">Years Experience</p>
                    </div>
                    <div className="bg-[#1a2a3a] px-3 py-2 rounded-lg text-center flex-1 min-w-[80px]">
                      <p className="text-yellow-400 font-bold">100%</p>
                      <p className="text-gray-400 text-xs">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0a1628] mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-400" /> Why Contact Us?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors">
                      {benefit.icon}
                      <div>
                        <h4 className="font-semibold text-[#0a1628]">{benefit.title}</h4>
                        <p className="text-gray-500 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
           
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-12 border-t border-[#1a2a3a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-30 h-25 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium residential and commercial properties in Amritsar, Punjab.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link to="/about-us" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact-us" className="text-yellow-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">+91 98159 78773</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">nm@nitishestate.com</span>
                </li>
                
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Connect With Us</h4>
              <p className="text-gray-400 mb-6">
                Follow us on social media for the latest property updates.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {[<FaFacebook key="fb"/>, <FaInstagram key="ig"/>,<FaYoutube key="yt"/>].map((social, idx) => (
                  <div 
                    key={idx}
                    className="w-8 h-8 md:w-10 md:h-10 bg-[#1a2a3a] rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a1628] cursor-pointer transition-colors duration-300 text-gray-400 hover:text-[#0a1628]"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1a2a3a] mt-12 pt-8 text-center text-gray-400">
            <p>© {currentYear} Real Estate with Nitish Mahajan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button - WhatsApp Green */}
           <button 
             onClick={() => window.open("https://wa.me/919815978773", "_blank")} 
             className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50"
           >
             <FaWhatsapp size={24} />
           </button>
    </div>
  );
};

export default Contact;
