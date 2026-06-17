import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, Bed, Bath, Square, Star, 
  Users, Home, Shield, Award, ChevronRight, 
  Play, Check, Menu, X, Phone, Mail, Calendar,
  Maximize2, Heart, Share2, TrendingUp, DollarSign,
  MessageSquare, Send, User, Building, Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCheck, FaComment, FaFacebook, FaInstagram, FaLinkedinIn, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import logo from '../images/logo.jpg';
import nitish from '../images/nitish.jpg';
import WhyChooseUs from './WhyChooseUs';

const ModernLuxuryRealEstate = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  
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
        <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-sm md:text-lg text-gray-300">{label}</div>
      </div>
    );
  };

  const faqItems = [
    {
      question: "What are the stamp duty and registration charges in Maharashtra?",
      answer: "Stamp duty in Maharashtra is 5% for male property buyers and 6% for female buyers. Registration charges are typically 1% of the property value. There's also a 1% metro cess applicable in municipal corporation areas."
    },
    {
      question: "Can NRIs purchase residential property in India?",
      answer: "Yes, NRIs can purchase both residential and commercial properties in India. They need to comply with FEMA regulations, make payments through Indian bank accounts, and can avail home loans from Indian banks subject to certain conditions."
    },
    {
      question: "What is the process for home loan approval?",
      answer: "The process includes: eligibility check, document submission (income proof, address proof, property documents), bank verification, property valuation, legal scrutiny, and finally loan sanction. Typical processing time is 7-15 working days."
    },
    {
      question: "What documents are required for property registration?",
      answer: "Key documents include: Sale Deed, proof of identity (Aadhar, PAN), address proof, property tax receipts, building approval plan, encumbrance certificate, and no-objection certificates from relevant authorities."
    },
    {
      question: "Is GST applicable on under-construction properties?",
      answer: "Yes, GST of 5% is applicable on under-construction residential properties (without input tax credit). Completed/sold properties ready for possession are exempt from GST as they fall under 'sale of immovable property'."
    },
    {
      question: "What is the difference between carpet area, built-up area, and super built-up area?",
      answer: "Carpet area is the actual usable area within walls. Built-up area includes carpet area plus wall thickness. Super built-up area includes built-up area plus common amenities like lobby, stairs, elevator, etc. RERA mandates carpet area disclosure for transparency."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const featuredProperties = [
    { id: 1, type: "residential", title: "Luxury 4BHK Apartment", price: "₹3.2 Cr", location: "Andheri West, Mumbai", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Premium Residence" },
    { id: 2, type: "commercial", title: "Grade A Office Space", price: "₹8.5 Cr", location: "BKC, Mumbai", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Commercial" },
    { id: 3, type: "residential", title: "Penthouse with Sea View", price: "₹7.8 Cr", location: "Juhu, Mumbai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Luxury Living" },
    { id: 4, type: "commercial", title: "Retail Showroom", price: "₹4.2 Cr", location: "Lower Parel, Mumbai", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "High Footfall" },
    { id: 5, type: "residential", title: "Garden View Apartments", price: "₹1.9 Cr", location: "Thane West, Mumbai", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Family Homes" },
    { id: 6, type: "commercial", title: "IT Park Office Space", price: "₹12.5 Cr", location: "Pune, Maharashtra", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "IT Hub" },
  ];

  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Mehta",
      role: "Business Owner, Andheri",
      content: "Nitish Mahajan helped me find the perfect commercial space for my expanding business. His market knowledge and negotiation skills saved me over ₹50 lakhs!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      transaction: "₹4.2 Cr Office Space Purchase",
      location: "BKC, Mumbai",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "IT Professional, Pune",
      content: "As a first-time home buyer, I was nervous. Nitish Mahajan guided me through every step - from property selection to legal verification and loan approval. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      transaction: "₹1.8 Cr Apartment",
      location: "Hinjewadi, Pune",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Amit Khanna",
      role: "Real Estate Investor",
      content: "Professional, transparent, and results-driven. Nitish Mahajan identified an undervalued property that has already appreciated 25% in just 6 months. Will work with him again.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      transaction: "₹3.5 Cr Investment Property",
      location: "Thane, Mumbai",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Doctor, South Mumbai",
      content: "Found my dream home exactly as I wanted. The entire process was seamless and Nitish Mahajan handled all paperwork meticulously. Trustworthy and dedicated professional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      transaction: "₹6.2 Cr Sea View Apartment",
      location: "Worli, Mumbai",
      date: "December 2023"
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.type === activeFilter);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const TestimonialCard = ({ testimonial, isActive }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg ${isActive ? 'border-l-4 border-yellow-400' : 'border border-gray-200'}`}
      >
        <div className="flex items-center mb-4 md:mb-6">
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 p-0.5">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-[8px] md:text-xs" />
            </div>
          </div>
          <div className="ml-3 md:ml-4">
            <h4 className="text-base md:text-xl font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-xs md:text-base text-gray-600">{testimonial.role}</p>
            <div className="flex items-center mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 fill-current text-xs md:text-sm" />
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-sm md:text-lg text-gray-700 italic mb-4 md:mb-6">"{testimonial.content}"</p>
        
        <div className="pt-4 md:pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
            <div>
              <div className="font-bold text-sm md:text-base text-gray-900">{testimonial.transaction}</div>
              <div className="text-xs md:text-sm text-gray-500">{testimonial.location} • {testimonial.date}</div>
            </div>
            <div className="px-3 py-1 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-xs md:text-sm">
              Completed
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628] shadow-lg py-2 md:py-3' : 'bg-[#0a1628]/95 py-3 md:py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-10 md:w-25 md:h-15 bg-yellow-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {['Home', 'About Us', 'Contact Us'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link key={item} to={path} className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 text-sm lg:text-base">
                  {item}
                </Link>
              );
            })}
            <button className="bg-yellow-400 text-[#0a1628] px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 hover:scale-105 text-sm lg:text-base">
              Schedule Visit
            </button>
          </div>
          
          <button className="md:hidden text-yellow-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628] shadow-lg py-4 px-6">
            {['Home', 'About Us', 'Contact Us'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link 
                  key={item} 
                  to={path} 
                  className="block py-4 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a] text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <button className="mt-4 w-full bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium text-base">
              Schedule Visit
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80")',
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10 md:mt-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Your Trusted Partner in <span className="text-yellow-400">Premium Residential & Commercial Properties</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 md:gap-5 py-10 md:py-20">
              <Link to="/contact-us">
                <button className="bg-yellow-400 text-[#0a1628] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-lg">
                  Schedule Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <Counter end={26} label="Properties Sold" />
            <Counter end={7} label="Years Experience" />
            <Counter end={100} label="Verified Properties" />
          </div>
        </div>
      </section>

      {/* About Us Section - Mobile First: Image on Top, Content Below */}
      {/* About Us Section - Premium Layout */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="bg-slate-50 rounded-[32px] p-6 sm:p-8 lg:p-14">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Right Image - Moved to top on mobile */}
        <div className="relative order-first lg:order-last">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={nitish}
              alt="Nitish Mahajan"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-top"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl">
            <p className="text-gray-500 text-xs sm:text-sm">
              Successful Transactions
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
              26+
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Premium Deals Closed
            </p>
          </div>
        </div>

        {/* Left Content - Moved to bottom on mobile */}
        <div className="order-last lg:order-first">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="bg-[#0a1628] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              TRUSTED REALTOR
            </span>
            <span className="bg-yellow-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              ★ 7+ YEARS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1628] leading-tight mb-3 sm:mb-6">
            About <br className="lg:hidden" />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-yellow-500 whitespace-nowrap">
              Nitish Mahajan
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 px-1 sm:px-0">
            Nitish Mahajan is a dedicated real estate professional committed to helping homebuyers, investors, and property sellers make informed and confident decisions. With a strong understanding of the real estate market and a client-first approach, he focuses on identifying opportunities that align with each client's goals and budget. Whether you are searching for your dream home, a profitable investment, or assistance in selling a property, Nitish Mahajan provides personalized guidance throughout the entire process.
          </p>

          <div className="flex gap-6 sm:gap-10 mb-6 sm:mb-10 flex-wrap">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">26+</h3>
              <p className="text-gray-500 text-sm sm:text-base">Properties Sold</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">100%</h3>
              <p className="text-gray-500 text-sm sm:text-base">Client Satisfaction</p>
            </div>
          </div>

          <button className="bg-[#0a1628] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-[#0a1628] transition text-sm sm:text-base">
            More About Nitish Mahajan
          </button>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Featured Properties Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 md:mb-6">
              Premium <span className="text-yellow-400">Property Portfolio</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Curated selection of verified residential and commercial properties across prime locations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {[
              { key: 'all', label: 'All Properties' },
              { key: 'residential', label: 'Residential' },
              { key: 'commercial', label: 'Commercial' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeFilter === filter.key 
                    ? 'bg-yellow-400 text-[#0a1628] shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.map((property) => (
              <div 
                key={property.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-yellow-400 text-[#0a1628] px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                    {property.tag}
                  </div>
                  <button 
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={favorites.includes(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'} 
                    />
                  </button>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 md:mb-4">
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-[#0a1628]">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={14} className="mr-1 text-yellow-400" />
                        <span className="text-xs md:text-sm">{property.location}</span>
                      </div>
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-yellow-400">{property.price}</span>
                  </div>
                  
                  <button className="w-full bg-[#0a1628] text-white py-2 md:py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center group/btn text-sm md:text-base">
                    <span>Schedule Visit</span>
                    <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-16">
            <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-yellow-400 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-300 text-sm md:text-base">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium mb-4 md:mb-6 text-sm md:text-base">
              <FaComment className="mr-2 text-yellow-500" /> Client Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 md:mb-6">
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real experiences from homeowners and investors across India
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonialsData.map((testimonial, idx) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <TestimonialCard testimonial={testimonial} isActive={idx === activeTestimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-6 md:mt-12 space-x-3 md:space-x-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <FaArrowLeft className="text-sm md:text-base" />
              </button>
              
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 md:h-3 rounded-full transition-all ${
                      idx === activeTestimonial
                        ? 'bg-yellow-400 w-6 md:w-8'
                        : 'bg-gray-300 w-2 md:w-3 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <FaArrowRight className="text-sm md:text-base" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Agent Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 md:mb-6">
              Meet Your <span className="text-yellow-500">Real Estate Expert</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Professional guidance from industry expert with deep market knowledge
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-[#0a1628] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={nitish}
                  alt="Nitish Mahajan - Real Estate Expert"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent md:hidden"></div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-10 bg-[#0a1628]">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-8 md:w-10 h-1 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400 font-semibold text-xs md:text-base">Founder & CEO</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">Nitish Mahajan</h3>
                <p className="text-yellow-400 text-sm md:text-lg mb-4 md:mb-6">Real Estate Consultant | Aggregator</p>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Successfully closed 26+ property deals</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Specialist in residential luxury apartments and commercial office spaces</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Expert in legal due diligence, property verification, and negotiation</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check size={12} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Trusted advisor for NRIs and first-time home buyers across India</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <button className="bg-yellow-400 text-[#0a1628] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                    <Phone size={16} /> Schedule Appointment
                  </button>
                  <button className="border border-yellow-400 text-yellow-400 px-3 py-2 md:px-3 md:py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                    <Mail size={16} /> Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />

      {/* FAQ Section */}
      <div className="bg-gray-50 py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-3 md:mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 px-4">
              Expert answers to common questions about Indian real estate
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 px-2 md:px-0">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full px-4 py-4 md:px-6 md:py-5 text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm md:text-lg font-semibold text-[#0a1628] pr-4 md:pr-8">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 ml-2 md:ml-4">
                      <svg 
                        className={`w-5 h-5 md:w-6 md:h-6 text-yellow-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`px-4 md:px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'pb-4 md:pb-5' : 'max-h-0'}`}
                  style={{ maxHeight: openIndex === index ? '300px' : '0' }}
                >
                  <div className="border-l-4 border-yellow-400 pl-3 md:pl-4 py-1">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-[#0a1628] rounded-xl md:rounded-2xl shadow-lg mx-2 md:mx-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-yellow-400">Still have questions?</h3>
                <p className="text-sm md:text-base text-gray-300 mt-1 md:mt-2">
                  Need personalized guidance? Contact our expert team for a free consultation.
                </p>
              </div>
              <Link to="/contact-us">
                <button className="px-4 py-2 md:px-6 md:py-3 bg-yellow-400 text-[#0a1628] font-semibold rounded-xl hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-12 md:py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-yellow-400 text-[#0a1628] text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4 shadow-lg">
              📬 Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-3 md:mb-4">
              Contact <span className="text-yellow-500">Real Estate with Nitish Mahajan</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Ready to find your dream property? Reach out to us for a personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a1628] rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-yellow-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-yellow-400/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <div className="p-2 md:p-3 bg-yellow-400 rounded-xl shadow-lg">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-[#0a1628]" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Contact Information</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8 lg:space-y-12">
                  {[
                    {
                      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
                      title: "Phone Number",
                      details: "+91 98159 78773",
                      description: "Available Monday-Saturday, 10am-7pm",
                    },
                    {
                      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
                      title: "Email Address",
                      details: "nm@nitishestate.com",
                      description: "We'll respond within 24 hours",
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group/item"
                    >
                      <div className="p-2 md:p-3 rounded-lg bg-yellow-400 shadow-lg text-[#0a1628]">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm md:text-lg text-white mb-0.5 md:mb-1">{item.title}</h4>
                        <p className="text-yellow-400 font-bold text-xs md:text-sm mb-0.5 md:mb-1 group-hover/item:text-yellow-300 transition-colors">
                          {item.details}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <div className="p-2 md:p-3 bg-yellow-100 rounded-xl shadow-lg">
                    <Send className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0a1628]">Send Message</h3>
                </div>

                <form className="space-y-4 md:space-y-6">
                  {['Your Name', 'Your Email', 'Phone Number'].map((placeholder, index) => (
                    <motion.div
                      key={placeholder}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <input
                          type={placeholder.includes('Email') ? 'email' : 'text'}
                          placeholder={placeholder}
                          className="w-full px-4 py-3 md:px-5 md:py-4 pl-10 md:pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300 text-sm md:text-base"
                        />
                        <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {placeholder.includes('Name') && <User className="w-4 h-4 md:w-5 md:h-5" />}
                          {placeholder.includes('Email') && <Mail className="w-4 h-4 md:w-5 md:h-5" />}
                          {placeholder.includes('Phone') && <Phone className="w-4 h-4 md:w-5 md:h-5" />}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full px-4 py-3 md:px-5 md:py-4 pl-10 md:pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300 resize-none text-sm md:text-base"
                      ></textarea>
                      <div className="absolute left-3 md:left-4 top-4 md:top-6 text-gray-400">
                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-[#0a1628] font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4 md:mb-6">
                <div className="w-20 h-12 md:w-30 md:h-25 bg-yellow-400 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Your trusted partner for premium residential and commercial properties across Mumbai Metropolitan Region.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><Link to="/" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link to="/about-us" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact-us" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">Contact Info</h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center text-sm md:text-base">
                  <Phone size={16} className="mr-2 md:mr-3 text-yellow-400" />
                  <span className="text-gray-400">+91 98159 78773</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <Mail size={16} className="mr-2 md:mr-3 text-yellow-400" />
                  <span className="text-gray-400">nm@nitishestate.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-yellow-400">Connect With Us</h4>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
                Follow us on social media for the latest property updates.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {[<FaFacebook key="fb"/>, <FaInstagram key="ig"/>, <FaLinkedinIn key="in"/>, <FaTwitter key="tw"/>].map((social, idx) => (
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
          
          <div className="border-t border-[#1a2a3a] mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>© {currentYear} Real Estate with Nitish Mahajan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <Link to="/contact-us">
        <button className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-yellow-400 text-[#0a1628] p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50">
          <Phone size={20} />
        </button>
      </Link>
    </div>
  );
};

export default ModernLuxuryRealEstate;
