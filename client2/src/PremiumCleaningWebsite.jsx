import { Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaCheck, FaQuoteLeft, FaArrowRight, FaChevronDown,
  
  FaStar, FaUsers, FaHome, FaShieldAlt, FaLeaf,
  FaCalendarAlt, FaClipboardCheck,
  FaCouch, FaBuilding, FaWater, FaBroom,
  FaThumbsUp, FaAward, FaHeadset, FaTruck,
  
} from 'react-icons/fa';

import { GiBroom, GiVacuumCleaner, GiSoap, GiDrop, GiSpray } from 'react-icons/gi';
import { MdCleaningServices, MdOutlineCleaningServices } from 'react-icons/md';
const XcellentCleaning = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    rooms: '1 Room',
    service: 'Carpet Cleaning Brisbane',
    date: '',
    message: ''
  });

  // Hero floating images - Different for each position
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      position: 'top-right',
      animation: 'float-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      position: 'middle-right',
      animation: 'float-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      position: 'bottom-right',
      animation: 'float-3'
    }
  ];

  const services = [
    {
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning service using advanced steam technology to remove deep-seated dirt, stains, and allergens.',
      icon: <GiVacuumCleaner className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Steam Cleaning', 'Stain Removal', 'Odor Elimination', 'Quick Drying']
    },
    {
      title: 'Bond Cleaning',
      description: '100% bond back guarantee with comprehensive cleaning following real estate standards and checklists.',
      icon: <FaHome className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Full Property Clean', 'Real Estate Approved', 'Final Inspection', 'Guaranteed Results']
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Smooth property handover with meticulous attention to inspection requirements and standards.',
      icon: <FaClipboardCheck className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Complete Clean', 'Kitchen Focus', 'Bathroom Focus', 'Wall Cleaning']
    },
    {
      title: 'Upholstery Cleaning',
      description: 'Revitalize furniture with professional fabric care, stain removal, and odor elimination.',
      icon: <FaCouch className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Fabric Safe', 'Stain Treatment', 'Odor Removal', 'Fabric Protection']
    },
    {
      title: 'House Cleaning',
      description: 'Regular maintenance cleaning for spotless, fresh, and inviting residential spaces.',
      icon: <MdCleaningServices className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Regular Cleaning', 'Deep Cleaning', 'Custom Schedule', 'Eco-Friendly']
    },
    {
      title: 'Pressure Cleaning',
      description: 'Restore outdoor surfaces with high-pressure cleaning technology for driveways and patios.',
      icon: <GiSpray className="text-4xl" />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Driveway Cleaning', 'Patio Restoration', 'Mould Removal', 'Surface Sealing']
    }
  ];

  const allServices = [
    {
      title: 'Carpet Cleaning',
      image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <GiVacuumCleaner />
    },
    {
      title: 'Bond Cleaning',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <FaHome />
    },
    {
      title: 'End of Lease',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <FaClipboardCheck />
    },
    {
      title: 'Upholstery',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <FaCouch />
    },
    {
      title: 'House Cleaning',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <MdCleaningServices />
    },
    {
      title: 'Builder Clean',
      image: 'https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <FaBuilding />
    },
    {
      title: 'Pressure Wash',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <GiSpray />
    },
    {
      title: 'Exit Cleaning',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      icon: <FaBroom />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified Professionals',
      description: 'Our team consists of certified cleaning professionals with extensive training and experience.',
      icon: <FaAward className="text-3xl" />,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Guaranteed Results',
      description: '100% satisfaction guarantee with bond back assurance for all our cleaning services.',
      icon: <FaShieldAlt className="text-3xl" />,
      color: 'from-emerald-500 to-teal-400'
    },
    {
      title: 'Eco-Friendly Solutions',
      description: 'Using environmentally friendly products and sustainable cleaning methods.',
      icon: <FaLeaf className="text-3xl" />,
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for scheduling and emergency cleaning needs.',
      icon: <FaHeadset className="text-3xl" />,
      color: 'from-purple-500 to-violet-400'
    },
    {
      title: 'Advanced Equipment',
      description: 'State-of-the-art cleaning equipment and technology for superior results.',
      icon: <FaTruck className="text-3xl" />,
      color: 'from-orange-500 to-amber-400'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Convenient appointment scheduling including weekends and after-hours.',
      icon: <FaCalendarAlt className="text-3xl" />,
      color: 'from-pink-500 to-rose-400'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Property Manager',
      text: 'Xcellent Cleaning consistently delivers exceptional results. Their bond cleaning service helped our clients get 100% bond returns every time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Office Manager',
      text: 'Our corporate office looks brand new after their professional cleaning. The team is punctual, professional, and thorough.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Emma Williams',
      role: 'Homeowner',
      text: 'The best cleaning service in Brisbane! Our carpets look like new and the whole house feels fresh and clean.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const faqs = [
    {
      question: 'What areas in Brisbane do you service?',
      answer: 'We service all Brisbane suburbs including CBD, South Brisbane, North Brisbane, East Brisbane, West Brisbane, and surrounding areas. Contact us to confirm availability in your specific location.'
    },
    {
      question: 'How quickly can you schedule a cleaning?',
      answer: 'We offer flexible scheduling and can often accommodate same-day or next-day appointments depending on availability. For urgent cleaning needs, give us a call directly.'
    },
    {
      question: 'Are your cleaning products safe for pets and children?',
      answer: 'Yes, we use eco-friendly, non-toxic cleaning products that are safe for pets, children, and people with allergies. All our products are professionally approved for residential use.'
    },
    {
      question: 'Do you provide cleaning equipment and supplies?',
      answer: 'Yes, we bring all necessary professional-grade equipment, cleaning solutions, and supplies. You don\'t need to provide anything except access to water and electricity.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours with a detailed cost estimate.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      suburb: '',
      rooms: '1 Room',
      service: 'Carpet Cleaning Brisbane',
      date: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <GiBroom className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Xcellent Cleaning
                  </div>
                  <div className="text-xs text-gray-500">Brisbane's Premium Service</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Why Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">FAQ</a>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaPhone className="inline mr-2" />
                Book Service
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 p-2 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">Home</a>
                <a href="#services" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">Services</a>
                <a href="#why-us" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">Why Us</a>
                <a href="#testimonials" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">Reviews</a>
                <a href="#faq" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">FAQ</a>
                <button className="w-full text-center px-3 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium mt-2">
                  <FaPhone className="inline mr-2" />
                  Book Service
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Floating Images */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6 border border-blue-400/30">
                <Sparkles className="mr-2 text-blue-300" />
                <span className="text-blue-200 font-medium">Brisbane's #1 Cleaning Service</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Cleaning Services
                </span>
                in Brisbane
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Transform your space with Brisbane's most trusted cleaning professionals. 
                From comprehensive bond cleaning to regular maintenance, we deliver excellence in every corner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <Sparkles className="mr-3 group-hover:rotate-12 transition-transform" />
                  Get Free Quote
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center">
                  <FaPhone className="mr-3" />
                  (07) 1234 5678
                </button>
              </div>

              {/* Stats in Hero */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2000+</div>
                  <div className="text-blue-200 text-sm">Properties Cleaned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-blue-200 text-sm">Bond Return Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-sm">Customer Support</div>
                </div>
              </div>
            </div>

            {/* Right Floating Images */}
            <div className="relative h-[500px] hidden lg:block">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute ${img.position === 'top-right' ? 'top-0 right-0' : 
                               img.position === 'middle-right' ? 'top-1/3 right-8' : 
                               'bottom-0 right-16'} 
                    w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 ${img.animation}`}
                >
                  <img 
                    src={img.url} 
                    alt={`Cleaning Service ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              ))}
              {/* Floating circles */}
              <div className="absolute top-1/4 left-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float-1"></div>
              <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-float-2"></div>
              <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-float-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-4 border border-blue-100">
              <MdOutlineCleaningServices className="mr-2 text-blue-600" />
              <span className="text-blue-600 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Cleaning Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties across Brisbane
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 flex items-center group">
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Mini Grid */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">All Our Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {allServices.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center h-full text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full mb-4 border border-emerald-100">
              <FaThumbsUp className="mr-2 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence in Every Clean
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Hear from satisfied customers across Brisbane
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-white/30"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <FaQuoteLeft className="text-white/20 text-3xl mb-3" />
                <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 p-8 md:p-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4">
                    <Sparkles className="mr-2" />
                    <span>Get Your Quote</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
                  <p className="text-blue-200 mb-6">
                    Fill out the form and we'll get back to you within 30 minutes with a free, no-obligation quote.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <FaPhone className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm">Call Us Anytime</div>
                      <div className="font-bold">(07) 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <FaEnvelope className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm">Email Us</div>
                      <div className="font-bold">info@xcellentcleaning.com.au</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-12 bg-white">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Suburb *</label>
                      <input
                        type="text"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Carpet Cleaning</option>
                      <option>Bond Cleaning</option>
                      <option>End of Lease Cleaning</option>
                      <option>Upholstery Cleaning</option>
                      <option>House Cleaning</option>
                      <option>Pressure Cleaning</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Quote Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-violet-50 rounded-full mb-4 border border-purple-100">
              <FaHeadset className="mr-2 text-purple-600" />
              <span className="text-purple-600 font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 group-hover:from-blue-100 transition-all ${activeFAQ === index ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="text-blue-600" />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'py-4 border-t border-gray-100' : 'max-h-0'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GiBroom className="text-white text-2xl" />
                </div>
                <div className="ml-3">
                  <div className="text-2xl font-bold">Xcellent</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Cleaning
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Brisbane's premier cleaning service provider delivering exceptional results since 2010.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Carpet Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Bond Cleaning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">End of Lease</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Upholstery</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-cyan-400 mr-3" />
                  Brisbane, QLD
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-cyan-400 mr-3" />
                  (07) 1234 5678
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-cyan-400 mr-3" />
                  info@xcellentcleaning.com.au
                </li>
                <li className="flex items-center">
                  <FaClock className="text-cyan-400 mr-3" />
                  Mon-Sun: 7AM-8PM
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Brisbane CBD</li>
                <li>South Brisbane</li>
                <li>North Brisbane</li>
                <li>All Suburbs</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Xcellent Cleaning Brisbane. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }
        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default XcellentCleaning;