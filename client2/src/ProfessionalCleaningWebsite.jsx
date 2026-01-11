import React, { useState, useEffect } from 'react';

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

  // Hero image slideshow
  const heroImages = [
    '/api/placeholder/1600/900?text=Professional+Carpet+Cleaning+Brisbane&bg=3d5a80&color=fff',
    '/api/placeholder/1600/900?text=End+of+Lease+Cleaning+Experts&bg=ee6c4d&color=fff',
    '/api/placeholder/1600/900?text=Commercial+Cleaning+Services&bg=98c1d9&color=333',
    '/api/placeholder/1600/900?text=Builder+Clean+Specialists&bg=293241&color=fff'
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

  // Service images
  const serviceImages = {
    'Carpet Cleaning': '/api/placeholder/400/300?text=Carpet+Cleaning&bg=ee6c4d',
    'Bond Cleaning': '/api/placeholder/400/300?text=Bond+Cleaning&bg=3d5a80',
    'End of Lease Cleaning': '/api/placeholder/400/300?text=Lease+Cleaning&bg=98c1d9',
    'Upholstery Cleaning': '/api/placeholder/400/300?text=Upholstery&bg=293241',
    'Exit Cleaning': '/api/placeholder/400/300?text=Exit+Cleaning&bg=ee6c4d',
    'House Cleaning': '/api/placeholder/400/300?text=House+Cleaning&bg=3d5a80',
    'Builder Cleaning': '/api/placeholder/400/300?text=Builder+Clean&bg=98c1d9',
    'Pressure Cleaning': '/api/placeholder/400/300?text=Pressure+Wash&bg=293241'
  };

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
      icon: '🧹'
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
      icon: '🏠'
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
      icon: '📋'
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
      icon: '🛋️'
    }
  ];

  const allServices = [
    {
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning service using advanced steam technology to remove deep-seated dirt, stains, and allergens.',
      image: '/api/placeholder/600/400?text=Carpet+Cleaning&bg=ee6c4d'
    },
    {
      title: 'Bond Cleaning',
      description: '100% bond back guarantee with comprehensive cleaning following real estate standards.',
      image: '/api/placeholder/600/400?text=Bond+Cleaning&bg=3d5a80'
    },
    {
      title: 'End of Lease Cleaning',
      description: 'Smooth property handover with meticulous attention to inspection requirements.',
      image: '/api/placeholder/600/400?text=Lease+Cleaning&bg=98c1d9'
    },
    {
      title: 'Upholstery Cleaning',
      description: 'Revitalize furniture with professional fabric care and stain removal.',
      image: '/api/placeholder/600/400?text=Upholstery&bg=293241'
    },
    {
      title: 'Exit Cleaning',
      description: 'Complete move-out cleaning covering all areas from ceiling to floor.',
      image: '/api/placeholder/600/400?text=Exit+Cleaning&bg=ee6c4d'
    },
    {
      title: 'House Cleaning',
      description: 'Regular maintenance cleaning for spotless, fresh, and inviting homes.',
      image: '/api/placeholder/600/400?text=House+Cleaning&bg=3d5a80'
    },
    {
      title: 'Builder Cleaning',
      description: 'Post-construction cleaning removing all dust and debris.',
      image: '/api/placeholder/600/400?text=Builder+Clean&bg=98c1d9'
    },
    {
      title: 'Pressure Cleaning',
      description: 'Restore outdoor surfaces with high-pressure cleaning technology.',
      image: '/api/placeholder/600/400?text=Pressure+Wash&bg=293241'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of highly trained, experienced cleaning professionals with years of industry experience.',
      icon: '👨‍🔧'
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive, transparent pricing with no hidden fees and cost-effective packages.',
      icon: '💰'
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Environmentally friendly cleaning products and sustainable methods for safe spaces.',
      icon: '🌿'
    },
    {
      title: 'Quality Guarantee',
      description: 'Unmatched cleaning excellence with meticulous attention to every detail.',
      icon: '⭐'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored services with flexible scheduling and personalized cleaning plans.',
      icon: '📋'
    },
    {
      title: 'Satisfaction Promise',
      description: '100% satisfaction guarantee with commitment to making things right.',
      icon: '✅'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Paddington, Brisbane',
      rating: '★★★★★',
      text: 'Xcellent Cleaning transformed our rental property for the final inspection. We received our full bond back without any issues.',
      image: '/api/placeholder/100/100?text=SJ&bg=ee6c4d&color=fff',
      service: 'Bond Cleaning'
    },
    {
      name: 'Michael Chen',
      location: 'Fortitude Valley',
      rating: '★★★★★',
      text: 'Our office carpets were in terrible condition. Xcellent Cleaning revived them completely. Highly professional team!',
      image: '/api/placeholder/100/100?text=MC&bg=3d5a80&color=fff',
      service: 'Commercial Cleaning'
    },
    {
      name: 'Emma Williams',
      location: 'New Farm',
      rating: '★★★★★',
      text: 'As a property manager, I\'ve worked with many cleaning companies. Xcellent Cleaning stands out for reliability and quality.',
      image: '/api/placeholder/100/100?text=EW&bg=98c1d9&color=333',
      service: 'End of Lease Cleaning'
    }
  ];

  const cleaningTips = [
    {
      title: 'Carpet Maintenance',
      tip: 'Regular vacuuming and immediate stain treatment extend carpet life. Use doormats to reduce dirt entry.',
      image: '/api/placeholder/300/200?text=Carpet+Care&bg=ee6c4d'
    },
    {
      title: 'Kitchen Hygiene',
      tip: 'Clean kitchen surfaces daily and regularly degrease range hoods to maintain air quality.',
      image: '/api/placeholder/300/200?text=Kitchen+Clean&bg=3d5a80'
    },
    {
      title: 'Bathroom Care',
      tip: 'Use squeegees on shower screens after use and ensure proper ventilation to prevent mold.',
      image: '/api/placeholder/300/200?text=Bathroom+Care&bg=98c1d9'
    },
    {
      title: 'Seasonal Cleaning',
      tip: 'Schedule deep cleaning during season changes including window tracks and ceiling fans.',
      image: '/api/placeholder/300/200?text=Seasonal+Clean&bg=293241'
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

  // Floating elements positions
  const floatingElements = [
    { top: '20%', left: '10%', delay: '0s' },
    { top: '40%', right: '15%', delay: '1s' },
    { top: '70%', left: '20%', delay: '2s' },
    { top: '30%', right: '25%', delay: '3s' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-[#ee6c4d] rounded-lg flex items-center justify-center transform rotate-45">
                  <span className="text-white font-bold text-xl -rotate-45">X</span>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold text-gray-900">Xcellent</span>
                  <span className="text-2xl font-bold text-[#ee6c4d] ml-1">Cleaning</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#ee6c4d] font-medium transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-700 hover:text-[#ee6c4d] font-medium transition-colors duration-300">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-[#ee6c4d] font-medium transition-colors duration-300">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#ee6c4d] font-medium transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-[#ee6c4d] font-medium transition-colors duration-300">FAQ</a>
              <button className="bg-[#ee6c4d] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d45a3d] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-[#ee6c4d]">Home</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-[#ee6c4d]">Services</a>
                <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-[#ee6c4d]">Why Choose Us</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-[#ee6c4d]">Testimonials</a>
                <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-[#ee6c4d]">FAQ</a>
                <button className="w-full text-center px-3 py-2 bg-[#ee6c4d] text-white rounded-lg font-medium mt-2">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Hero Images Slider */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Floating Elements */}
        {floatingElements.map((pos, index) => (
          <div
            key={index}
            className={`absolute w-8 h-8 bg-[#ee6c4d] bg-opacity-20 rounded-full animate-float`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDelay: pos.delay
            }}
          />
        ))}
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Premium Cleaning Services in Brisbane
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-up">
              Professional • Reliable • Exceptional Results
            </p>
            <div className="w-32 h-1 bg-[#ee6c4d] mx-auto mb-10 animate-expand"></div>
            <p className="text-lg text-white mb-10 max-w-3xl mx-auto animate-slide-up delay-300">
              Transform your space with Brisbane's most trusted cleaning professionals. 
              From comprehensive bond cleaning to regular maintenance, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
              <button className="bg-[#ee6c4d] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#d45a3d] transition-all duration-300 transform hover:scale-105 shadow-xl">
                Get Free Quote
              </button>
              <button className="bg-white text-[#ee6c4d] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Call: (07) 1234 5678
              </button>
            </div>
          </div>
        </div>
        
        {/* Hero Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroImage ? 'bg-[#ee6c4d] w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2000+', label: 'Properties Cleaned', icon: '🏠' },
              { number: '98%', label: 'Bond Return Rate', icon: '✓' },
              { number: '24/7', label: 'Customer Support', icon: '📞' },
              { number: '50+', label: 'Trained Staff', icon: '👨‍🔧' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#ee6c4d] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
            <div className="w-24 h-1 bg-[#ee6c4d] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties across Brisbane
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${serviceImages[service.title]})` }}
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#ee6c4d] mr-2">•</span>
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#ee6c4d] font-medium text-sm hover:text-[#d45a3d] transition-colors duration-300 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* All Services Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">All Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg">{service.title}</h4>
                      <p className="text-white text-sm opacity-90">{service.description}</p>
                    </div>
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
            <div className="w-24 h-1 bg-[#3d5a80] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400?text=Professional+Team&bg=3d5a80" 
                alt="Professional Cleaning Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-[#ee6c4d] mx-auto mb-8"></div>
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
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-yellow-500 mb-4">{testimonial.rating}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="text-[#ee6c4d] text-sm font-medium">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gradient-to-r from-[#3d5a80] to-[#293241] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl mb-8">Quick Response • Free Estimate • No Obligation</p>
            <div className="w-24 h-1 bg-[#ee6c4d] mx-auto"></div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Property Size</label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee6c4d] focus:border-transparent"
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#ee6c4d] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#d45a3d] transition-all duration-300 transform hover:scale-105 shadow-xl"
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
            <div className="w-24 h-1 bg-[#ee6c4d] mx-auto mb-8"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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

      {/* Cleaning Tips with Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cleaning Tips & Advice
            </h2>
            <div className="w-24 h-1 bg-[#3d5a80] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
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
                <div className="w-10 h-10 bg-[#ee6c4d] rounded-lg flex items-center justify-center transform rotate-45">
                  <span className="text-white font-bold text-xl -rotate-45">X</span>
                </div>
                <div className="ml-3">
                  <div className="text-2xl font-bold">Xcellent</div>
                  <div className="text-2xl font-bold text-[#ee6c4d]">Cleaning</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Brisbane's premier cleaning service provider delivering exceptional results.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-[#ee6c4d] transition-colors duration-300">Our Services</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-[#ee6c4d] transition-colors duration-300">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-[#ee6c4d] transition-colors duration-300">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-[#ee6c4d] transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ee6c4d] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Brisbane, QLD Australia
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ee6c4d] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (07) 1234 5678
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#ee6c4d] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@xcellentcleaning.com.au
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-expand {
          animation: expand 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};

export default XcellentCleaning;