import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, MapPin, Bed, Bath, Square, Star, 
  Users, Home, Shield, Award, ChevronRight, 
  Play, Check, Menu, X, Phone, Mail, Calendar,
  Maximize2, Heart, Share2, TrendingUp, DollarSign,
  MessageSquare, Send, User, Building, Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCheck, FaComment, FaFacebook, FaInstagram, FaLinkedinIn, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import logo from '../images/logo.jpeg';
import nitish from '../images/nitish.jpeg';

const ModernLuxuryRealEstate = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  
  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Scroll effect
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

  // Animated counters
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
        <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-lg text-gray-300">{label}</div>
      </div>
    );
  };

  // FAQ items
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

  // Property data
  const featuredProperties = [
    { id: 1, type: "residential", title: "Luxury 4BHK Apartment", price: "₹3.2 Cr", location: "Andheri West, Mumbai", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Premium Residence" },
    { id: 2, type: "commercial", title: "Grade A Office Space", price: "₹8.5 Cr", location: "BKC, Mumbai", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Commercial" },
    { id: 3, type: "residential", title: "Penthouse with Sea View", price: "₹7.8 Cr", location: "Juhu, Mumbai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Luxury Living" },
    { id: 4, type: "commercial", title: "Retail Showroom", price: "₹4.2 Cr", location: "Lower Parel, Mumbai", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "High Footfall" },
    { id: 5, type: "residential", title: "Garden View Apartments", price: "₹1.9 Cr", location: "Thane West, Mumbai", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "Family Homes" },
    { id: 6, type: "commercial", title: "IT Park Office Space", price: "₹12.5 Cr", location: "Pune, Maharashtra", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, tag: "IT Hub" },
  ];

  // Indian Testimonials
  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Mehta",
      role: "Business Owner, Andheri",
      content: "Nitish helped me find the perfect commercial space for my expanding business. His market knowledge and negotiation skills saved me over ₹50 lakhs!",
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
      content: "As a first-time home buyer, I was nervous. Nitish guided me through every step - from property selection to legal verification and loan approval. Highly recommended!",
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
      content: "Professional, transparent, and results-driven. Nitish identified an undervalued property that has already appreciated 25% in just 6 months. Will work with him again.",
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
      content: "Found my dream home exactly as I wanted. The entire process was seamless and Nitish handled all paperwork meticulously. Trustworthy and dedicated professional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      transaction: "₹6.2 Cr Sea View Apartment",
      location: "Worli, Mumbai",
      date: "December 2023"
    }
  ];

  // Filter properties
  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.type === activeFilter);

  // Toggle favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, isActive }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-2xl p-8 shadow-lg ${isActive ? 'border-l-4 border-yellow-400' : 'border border-gray-200'}`}
      >
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-yellow-400 p-0.5">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-xs" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600">{testimonial.role}</p>
            <div className="flex items-center mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-gray-900">{testimonial.transaction}</div>
              <div className="text-sm text-gray-500">{testimonial.location} • {testimonial.date}</div>
            </div>
            <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium">
              Completed
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation - Navy Blue 80% */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628] shadow-lg py-3' : 'bg-[#0a1628]/95 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-15 bg-yellow-400 rounded-lg flex items-center justify-center">
              <img src={logo} className=' object-cover h-full w-full rounded-xl'/>
            </div>
            <span className="text-2xl font-bold text-white">Real Estate with Nitish</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About Us', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-yellow-400 font-medium transition-colors duration-300">
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
              Schedule Visit
            </button>
          </div>
          
          <button className="md:hidden text-yellow-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628] shadow-lg py-4 px-6">
            {['Home', 'About Us', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-3 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a]">
                {item}
              </a>
            ))}
            <button className="mt-4 w-full bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium">
              Schedule Visit
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section - NO BLUE OVERLAY, NATURAL IMAGE, MORE GAP */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80")',
        }}>
          {/* NO BLUE OVERLAY - Removed */}
        </div>
        
        <div className="container mx-auto px-6 relative z-10 mt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Your Trusted Partner in <span className="text-yellow-400">Premium Real Estate</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md">
              With over a decade of excellence, we deliver unparalleled expertise in residential and commercial property investments across India's most promising markets.
            </p>
            <p className="text-lg text-white/90 mb-10 drop-shadow-md">
              From meticulous legal verification to strategic negotiations, our comprehensive services ensure your property journey is seamless, transparent, and rewarding.
            </p>
            <div className="flex flex-wrap gap-5 py-20">
              <button className="bg-yellow-400 text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg">
                Explore Properties
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Counter end={45} label="Properties Sold" />
            <Counter end={12} label="Luxury Partners" />
            <Counter end={10} label="Satisfied Clients" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              About <span className="text-yellow-500">Real Estate with Nitish</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your trusted advisor in Mumbai's dynamic real estate market
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={nitish}
                  alt="Luxury Property" 
                  className="w-full h-126 object-fit"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 to-transparent"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-600 font-semibold">Our Story</span>
              </div>
              <h3 className="text-3xl font-bold text-[#0a1628] mb-6">Excellence in Real Estate Since 2012</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Real Estate with Nitish has established itself as a premier real estate consultancy firm in Mumbai Metropolitan Region. Our founder, Nitish, brings over 12 years of hands-on experience in residential and commercial property transactions, having successfully closed deals worth over ₹200 crores.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What sets us apart is our unwavering commitment to transparency, legal due diligence, and client-first approach. We don't just sell properties—we build lifelong relationships by guiding our clients through every step of their property journey.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1628]">100% Legal Verification</h4>
                    <p className="text-sm text-gray-500">Comprehensive due diligence</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1628]">Best Price Guarantee</h4>
                    <p className="text-sm text-gray-500">Expert negotiation skills</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1628]">End-to-End Support</h4>
                    <p className="text-sm text-gray-500">From search to registration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1628]">Trusted Advisor</h4>
                    <p className="text-sm text-gray-500">Recognized industry expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Premium <span className="text-yellow-500">Property Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Curated selection of verified residential and commercial properties across prime locations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Properties' },
              { key: 'residential', label: 'Residential' },
              { key: 'commercial', label: 'Commercial' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key 
                    ? 'bg-yellow-400 text-[#0a1628] shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div 
                key={property.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-[#0a1628] px-3 py-1 rounded-full text-sm font-medium">
                    {property.tag}
                  </div>
                  <button 
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      size={20} 
                      className={favorites.includes(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'} 
                    />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0a1628]">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1 text-yellow-500" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-yellow-600">{property.price}</span>
                  </div>
                  
                  <button className="w-full bg-[#0a1628] text-white py-3 rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center group/btn">
                    <span>Schedule Visit</span>
                    <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium mb-6">
              <FaComment className="mr-2 text-yellow-500" /> Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Real experiences from homeowners and investors across India
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonialsData.map((testimonial, idx) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} isActive={idx === activeTestimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
                className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <FaArrowLeft />
              </button>
              
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeTestimonial
                        ? 'bg-yellow-400 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)}
                className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Agent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Meet Your <span className="text-yellow-500">Real Estate Expert</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional guidance from industry expert with deep market knowledge
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-[#0a1628] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <img 
                  src={nitish}
                  alt="Nitish - Real Estate Expert"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10 bg-[#0a1628]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-1 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400 font-semibold">Founder & CEO</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Nitish Kumar</h3>
                <p className="text-yellow-400 text-lg mb-6">Real Estate Consultant | 12+ Years Experience</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={14} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300">Successfully closed 45+ property deals worth over ₹200+ crores</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={14} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300">Specialist in residential luxury apartments and commercial office spaces</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={14} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300">Expert in legal due diligence, property verification, and negotiation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={14} className="text-[#0a1628]" />
                    </div>
                    <p className="text-gray-300">Trusted advisor for NRIs and first-time home buyers across India</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2">
                    <Phone size={18} /> Schedule a Call
                  </button>
                  <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-2">
                    <Mail size={18} /> Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1628] sm:text-5xl mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert answers to common questions about Indian real estate
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#0a1628] pr-8">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <svg 
                        className={`w-6 h-6 text-yellow-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
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
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'pb-5' : 'max-h-0'}`}
                  style={{ maxHeight: openIndex === index ? '300px' : '0' }}
                >
                  <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#0a1628] rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-yellow-400">Still have questions?</h3>
                <p className="mt-2 text-gray-300">
                  Need personalized guidance? Contact our expert team for a free consultation.
                </p>
              </div>
              <button className="px-6 py-3 bg-yellow-400 text-[#0a1628] font-semibold rounded-xl hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact-us" className="py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-[#0a1628] text-sm font-semibold rounded-full mb-4 shadow-lg">
              📬 Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              Contact <span className="text-yellow-500">Real Estate with Nitish</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ready to find your dream property? Reach out to us for a personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a1628] rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-yellow-400 rounded-xl shadow-lg">
                    <MessageSquare className="w-6 h-6 text-[#0a1628]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Contact Information</h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Phone Number",
                      details: "+91 98765 43210",
                      description: "Available Monday-Saturday, 10am-7pm",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email Address",
                      details: "nitish@realestatewithnitish.com",
                      description: "We'll respond within 24 hours",
                    },
                    {
                      icon: <Home className="w-6 h-6" />,
                      title: "Office Location",
                      details: "Andheri West, Mumbai - 400053",
                      description: "Visit us by appointment",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group/item"
                    >
                      <div className="p-3 rounded-lg bg-yellow-400 shadow-lg text-[#0a1628]">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-white mb-1">{item.title}</h4>
                        <p className="text-yellow-400 font-bold text-xl mb-1 group-hover/item:text-yellow-300 transition-colors">
                          {item.details}
                        </p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
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
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-yellow-100 rounded-xl shadow-lg">
                    <Send className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0a1628]">Send Message</h3>
                </div>

                <form className="space-y-6">
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
                          className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {placeholder.includes('Name') && <User className="w-5 h-5" />}
                          {placeholder.includes('Email') && <Mail className="w-5 h-5" />}
                          {placeholder.includes('Phone') && <Phone className="w-5 h-5" />}
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
                        rows="5"
                        className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300 resize-none"
                      ></textarea>
                      <div className="absolute left-4 top-6 text-gray-400">
                        <MessageSquare className="w-5 h-5" />
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
                      className="w-full bg-yellow-400 text-[#0a1628] font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 text-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
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
      <footer className="bg-[#0a1628] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-20 h-15 bg-yellow-400 rounded-lg flex items-center justify-center">
                
              <img src={logo} className=' object-cover h-full w-full rounded-xl'/>
           
                </div>
                <span className="text-2xl font-bold">Real Estate with Nitish</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium residential and commercial properties across Mumbai Metropolitan Region.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">nitish@realestatewithnitish.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">Andheri West, Mumbai - 400053</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Connect With Us</h4>
              <p className="text-gray-400 mb-6">
                Follow us on social media for the latest property updates.
              </p>
              <div className="flex space-x-4">
                {[<FaFacebook key="fb"/>, <FaInstagram key="ig"/>, <FaLinkedinIn key="in"/>, <FaTwitter key="tw"/>].map((social, idx) => (
                  <div 
                    key={idx}
                    className="w-10 h-10 bg-[#1a2a3a] rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a1628] cursor-pointer transition-colors duration-300 text-gray-400 hover:text-[#0a1628]"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1a2a3a] mt-12 pt-8 text-center text-gray-400">
            <p>© {currentYear} Real Estate with Nitish. All rights reserved. | Designed with ❤️ in Mumbai</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-[#0a1628] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50">
        <Phone size={24} />
      </button>
    </div>
  );
};

export default ModernLuxuryRealEstate;
