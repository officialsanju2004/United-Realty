// src/components/sections/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Robert & Sarah Johnson",
      role: "Home Buyers, Beverly Hills",
      content: "PremiumEstate made our dream home a reality. Their attention to detail and market expertise saved us over $200,000 on our purchase. The entire process was seamless and professional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      transaction: "$4.2M Villa Purchase",
      duration: "45 Days to Close"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Real Estate Investor",
      content: "As an investor with multiple properties, I rely on their insights. They've consistently identified undervalued properties with high appreciation potential. My portfolio has grown 35% in 2 years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      transaction: "8 Properties Acquired",
      duration: "2+ Years Partner"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer, NYC",
      content: "Navigating the NYC market was overwhelming, but my agent guided me through every step. Found a perfect apartment in my budget within 3 weeks. Couldn't be happier!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      transaction: "$1.8M Condo Purchase",
      duration: "3 Weeks Search"
    },
    {
      id: 4,
      name: "David & Lisa Park",
      role: "Luxury Property Sellers",
      content: "Sold our Hamptons estate for 15% above asking price in a competitive market. Their marketing strategy and buyer network were exceptional. Highest recommendation!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      transaction: "$8.5M Estate Sale",
      duration: "28 Days on Market"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "500+", label: "Happy Families" },
    { value: "$2.5B+", label: "Property Value Sold" }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6">
            <IoCheckmarkCircle className="text-blue-600" />
            <span className="text-blue-600 font-semibold">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Thousands
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Testimonial Carousel */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Main Testimonial Display */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 md:p-12"
                  >
                    <div className="flex items-start mb-8">
                      <FaQuoteLeft className="text-4xl text-blue-500/30 mr-4 flex-shrink-0" />
                      <div>
                        <div className="flex mb-4">
                          {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                          "{testimonials[activeIndex].content}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonials[activeIndex].name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonials[activeIndex].role}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-blue-600">
                          {testimonials[activeIndex].transaction}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[activeIndex].duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center space-x-6 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaChevronLeft className="text-gray-700" />
                </button>
                
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all"
                >
                  {isAutoPlaying ? <FaPause /> : <FaPlay />}
                </button>
                
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaChevronRight className="text-gray-700" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Content */}
          <div>
            {/* Video Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Video Testimonials
                  </h3>
                  <div className="aspect-video bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                    {/* Video Thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                          <FaPlay className="text-white text-2xl ml-1" />
                        </div>
                        <p className="text-white text-sm">Watch Client Stories</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Hear directly from our clients about their real estate journey
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Clients Trust Us
              </h3>
              <div className="space-y-4">
                {[
                  "Transparent Communication",
                  "Market Expertise",
                  "Negotiation Skills",
                  "End-to-End Support",
                  "After-sale Service"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IoCheckmarkCircle className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            
          </div>
        </div>

{/* Company Logos - Professional Version */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  viewport={{ once: true }}
  className="mt-20 pt-16 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8"
>
  <div className="text-center mb-12">
    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 font-semibold rounded-full text-sm mb-4">
      TRUSTED BY INDUSTRY LEADERS
    </span>
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
      Featured in Leading Publications
    </h3>
  </div>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
    {["Forbes", "Wall Street Journal", "Bloomberg", "Business Insider", "Architectural Digest", "Luxury Portfolio"].map((logo, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      >
        <div className="text-center">
          <div className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
            {logo}
          </div>
          <div className="text-xs text-gray-500 mt-2 font-medium">
            {["Magazine", "Newspaper", "Media", "Digital", "Design", "Luxury"][index]}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
  
  <div className="text-center mt-12 pt-8 border-t border-gray-100">
    <p className="text-gray-600 text-sm">
      Recognized by top-tier media outlets worldwide
    </p>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Testimonials;