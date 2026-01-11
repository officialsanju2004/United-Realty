import { Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaCheck, FaQuoteLeft, FaArrowRight, FaChevronDown,
  FaStar, FaUsers, FaHome, FaShieldAlt, FaLeaf,
  FaCalendarAlt, FaClipboardCheck
} from 'react-icons/fa';
import { GiBroom, GiVacuumCleaner, GiSoap, GiWaterDrop } from 'react-icons/gi';

const XcellentCleaning = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
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

  // Hero image slideshow - Using Picsum for reliable placeholder images
  const heroImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Professional cleaner
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Clean office
    'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Carpet cleaning
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' // Sparkling clean
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Service images from Unsplash
  const serviceImages = [
    {
      title: 'Carpet Cleaning',
      image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Professional carpet cleaning service using advanced steam technology.'
    },
    {
      title: 'Bond Cleaning',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: '100% bond back guarantee with comprehensive cleaning.'
    },
    {
      title: 'End of Lease Cleaning',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Smooth property handover with meticulous attention.'
    },
    {
      title: 'Upholstery Cleaning',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Revitalize furniture with professional fabric care.'
    },
    {
      title: 'Exit Cleaning',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Complete move-out cleaning covering all areas.'
    },
    {
      title: 'House Cleaning',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Regular maintenance cleaning for spotless homes.'
    },
    {
      title: 'Builder Cleaning',
      image: 'https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Post-construction cleaning removing all dust and debris.'
    },
    {
      title: 'Pressure Cleaning',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Restore outdoor surfaces with high-pressure cleaning.'
    }
  ];

  const services = [
    {
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning service using advanced steam technology to remove deep-seated dirt, stains, and allergens. We restore your carpets to like-new condition with our commercial-grade equipment.',
      details: [
        'Deep steam cleaning technology',
        'Stain removal treatment',
        'Odor elimination',
        'Allergen reduction',
        'Quick drying process'
      ],
      icon: <GiVacuumCleaner className="text-3xl" />
    },
    {
      title: 'Bond Cleaning',
      description: 'Get your full bond refund guaranteed with our comprehensive bond cleaning service. We follow real estate agency checklists meticulously, ensuring every corner meets inspection standards.',
      details: [
        '100% bond back guarantee',
        'Real estate approved',
        'Full property deep clean',
        'Carpet steam cleaning included',
        'Window and blind cleaning'
      ],
      icon: <FaHome className="text-3xl" />
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Ensure a smooth property handover with our end of lease cleaning service. We transform your property to meet real estate standards, focusing on high-traffic areas and commonly inspected zones.',
      details: [
        'Complete property clean',
        'Kitchen degreasing',
        'Bathroom sanitization',
        'Wall mark removal',
        'Final inspection preparation'
      ],
      icon: <FaClipboardCheck className="text-3xl" />
    },
    {
      title: 'Upholstery Cleaning',
      description: 'Revitalize your furniture with our professional upholstery cleaning service. We remove dirt, stains, and allergens from sofas, chairs, and curtains using safe, effective methods.',
      details: [
        'Fabric-safe cleaning solutions',
        'Stain treatment',
        'Odor removal',
        'Quick drying',
        'Fabric protection application'
      ],
      icon: <GiSoap className="text-3xl" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of highly trained, experienced cleaning professionals with years of industry experience.',
      icon: <FaUsers className="text-3xl" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive, transparent pricing with no hidden fees and cost-effective packages.',
      icon: <FaShieldAlt className="text-3xl" />
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Environmentally friendly cleaning products and sustainable methods for safe spaces.',
      icon: <FaLeaf className="text-3xl" />
    },
    {
      title: 'Quality Guarantee',
      description: 'Unmatched cleaning excellence with meticulous attention to every detail.',
      icon: <FaStar className="text-3xl" />
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored services with flexible scheduling and personalized cleaning plans.',
      icon: <FaCalendarAlt className="text-3xl" />
    },
    {
      title: 'Satisfaction Promise',
      description: '100% satisfaction guarantee with commitment to making things right.',
      icon: <FaCheck className="text-3xl" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Paddington, Brisbane',
      rating: [1, 2, 3, 4, 5],
      text: 'Xcellent Cleaning transformed our rental property for the final inspection. We received our full bond back without any issues. Highly professional team!',
      service: 'Bond Cleaning'
    },
    {
      name: 'Michael Chen',
      location: 'Fortitude Valley',
      rating: [1, 2, 3, 4, 5],
      text: 'Our office carpets were in terrible condition. Xcellent Cleaning revived them completely. The team was punctual and professional!',
      service: 'Commercial Cleaning'
    },
    {
      name: 'Emma Williams',
      location: 'New Farm',
      rating: [1, 2, 3, 4, 5],
      text: 'As a property manager, I\'ve worked with many cleaning companies. Xcellent Cleaning stands out for their reliability and quality service.',
      service: 'End of Lease Cleaning'
    }
  ];

  const cleaningTips = [
    {
      title: 'Carpet Maintenance',
      tip: 'Regular vacuuming and immediate stain treatment extend carpet life. Use doormats to reduce dirt entry.',
      image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Kitchen Hygiene',
      tip: 'Clean kitchen surfaces daily and regularly degrease range hoods to maintain air quality and prevent hazards.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Bathroom Care',
      tip: 'Use squeegees on shower screens after use and ensure proper ventilation to prevent mold growth.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Seasonal Cleaning',
      tip: 'Schedule deep cleaning during season changes including window tracks, ceiling fans, and behind appliances.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60'
    }
  ];

  const faqs = [
    {
      question: 'Is the cost for all the services predefined?',
      answer: 'No, the cost depends on your specific needs. We provide transparent quotes after assessing area size, cleaning requirements, and additional services needed.'
    },
    {
      question: 'Can I get customized cleaning service?',
      answer: 'Yes, we specialize in customized solutions tailored to your specific requirements with flexible scheduling.'
    },
    {
      question: 'Do you work on weekends?',
      answer: 'Yes, we offer flexible scheduling including weekends, evenings, and after-hours appointments.'
    },
    {
      question: 'What cleaning products do you use?',
      answer: 'We use professional-grade, eco-friendly cleaning products that are safe for families, pets, and the environment.'
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                  <GiBroom className="text-white text-xl" />
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold text-gray-900">Xcellent</span>
                  <span className="text-2xl font-bold text-orange-600 ml-1">Cleaning</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">FAQ</a>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <FaPhone className="inline mr-2" />
                Book Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
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
            <div className="md:hidden bg-white border-t shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded">Home</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded">Services</a>
                <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded">Why Choose Us</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded">Testimonials</a>
                <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded">FAQ</a>
                <button className="w-full text-center px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium mt-2">
                  <FaPhone className="inline mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Cleaning Service ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Cleaning Services in Brisbane
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-200">
                Professional • Reliable • Exceptional Results
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-10"></div>
              <p className="text-lg mb-10 text-gray-200">
                Transform your space with Brisbane's most trusted cleaning professionals. 
                From comprehensive bond cleaning to regular maintenance, we deliver excellence in every corner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Sparkles className="mr-2" />
                  Get Free Quote
                </button>
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <FaPhone className="mr-2" />
                  (07) 1234 5678
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroImage 
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-8' 
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-sm">
              <div className="text-4xl text-orange-600 mb-3">
                <FaHome />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-gray-600">Properties Cleaned</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-sm">
              <div className="text-4xl text-orange-600 mb-3">
                <FaCheck />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Bond Return Rate</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-sm">
              <div className="text-4xl text-orange-600 mb-3">
                <FaClock />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-sm">
              <div className="text-4xl text-orange-600 mb-3">
                <FaUsers />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Trained Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Cleaning Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties across Brisbane
            </p>
          </div>

          {/* Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className="text-orange-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors duration-300 flex items-center">
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Grid with Images */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">All Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceImages.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                    <button className="mt-3 text-orange-300 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center">
                      View Details
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Xcellent Cleaning?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional Cleaning Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-orange-100">
                    <div className="text-orange-600 mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear what our Brisbane clients say about our cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {testimonial.rating.map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-orange-200 text-3xl mb-3" />
                  <p className="text-gray-700 mb-6 italic pl-4">"{testimonial.text}"</p>
                </div>
                <div className="text-orange-600 text-sm font-medium border-t pt-4">
                  Service: {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl mb-8 text-gray-300">Quick Response • Free Estimate • No Obligation</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Suburb *</label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Property Size</label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option>1 Room / Studio</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option>Carpet Cleaning</option>
                    <option>Bond Cleaning</option>
                    <option>End of Lease Cleaning</option>
                    <option>Upholstery Cleaning</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                  <FaChevronDown className={`text-orange-600 transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'py-4 bg-white' : 'max-h-0'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cleaning Tips & Advice
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <GiBroom className="text-white text-xl" />
                </div>
                <div className="ml-3">
                  <div className="text-2xl font-bold">Xcellent</div>
                  <div className="text-2xl font-bold text-orange-500">Cleaning</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Brisbane's premier cleaning service provider delivering exceptional results since 2010.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Our Services</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  Brisbane, QLD Australia
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-orange-500 mr-2" />
                  (07) 1234 5678
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" />
                  info@xcellentcleaning.com.au
                </li>
                <li className="flex items-center">
                  <FaClock className="text-orange-500 mr-2" />
                  Mon-Sun: 7:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Brisbane CBD</li>
                <li>South Brisbane</li>
                <li>North Brisbane</li>
                <li>All Brisbane Suburbs</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Xcellent Cleaning Brisbane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default XcellentCleaning;