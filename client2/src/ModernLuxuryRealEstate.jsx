import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, MapPin, Bed, Bath, Square, Star, 
  Users, Home, Shield, Award, ChevronRight, 
  Play, Check, Menu, X, Phone, Mail, Calendar,
  Maximize2, Heart, Share2, TrendingUp, DollarSign,
  MessageSquare,
  Send,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCheck, FaComment, FaFacebook, FaInstagram, FaLinkedinIn, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
const ModernLuxuryRealEstate = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mortgageValues, setMortgageValues] = useState({
    price: 2500000,
    downPayment: 20,
    interestRate: 3.5,
    loanTerm: 30
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Parallax scroll effect
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
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-lg text-gray-300">{label}</div>
      </div>
    );
  };
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in their original condition. Returns are free of charge, and refunds are processed within 5-7 business days after we receive the returned item."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, expedited shipping takes 2-3 business days, and express shipping delivers within 1-2 business days. Shipping times may vary during peak seasons."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 10-20 business days depending on the destination. Additional customs fees may apply."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order within 24 hours of placing it, provided it hasn't been shipped yet. Please contact our customer support team immediately for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for certain orders over $500."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package in real-time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Floating property cards data
  const floatingProperties = [
    { id: 1, title: "Oceanfront Villa", price: "$8.5M", location: "Malibu, CA", beds: 6, baths: 8, sqft: "12,500", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
    { id: 2, title: "Modern Penthouse", price: "$12.2M", location: "Manhattan, NY", beds: 5, baths: 6, sqft: "8,400", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
    { id: 3, title: "Hillside Mansion", price: "$15.7M", location: "Beverly Hills, CA", beds: 8, baths: 10, sqft: "18,200", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
  ];

  // Featured properties data
  const featuredProperties = [
    { id: 1, type: "villa", title: "Mediterranean Villa", price: "$6,800,000", location: "Miami, FL", beds: 5, baths: 7, sqft: "9,500", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, waterfront: true },
    { id: 2, type: "penthouse", title: "Skyline Penthouse", price: "$9,200,000", location: "Chicago, IL", beds: 4, baths: 5, sqft: "6,800", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true },
    { id: 3, type: "waterfront", title: "Lakefront Estate", price: "$7,500,000", location: "Lake Tahoe, NV", beds: 6, baths: 8, sqft: "10,200", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, waterfront: true },
    { id: 4, type: "villa", title: "Desert Oasis Villa", price: "$5,900,000", location: "Scottsdale, AZ", beds: 5, baths: 6, sqft: "8,700", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true },
    { id: 5, type: "penthouse", title: "Bay View Penthouse", price: "$11,400,000", location: "San Francisco, CA", beds: 3, baths: 4, sqft: "5,200", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, waterfront: true },
    { id: 6, type: "waterfront", title: "Oceanfront Retreat", price: "$14,800,000", location: "Hamptons, NY", beds: 7, baths: 9, sqft: "13,500", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", featured: true, waterfront: true },
  ];

  // Agents data
  const agents = [
    { id: 1, name: "Alexander Sterling", title: "Senior Luxury Specialist", experience: "15 years", propertiesSold: 420, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
    { id: 2, name: "Isabella Montclair", title: "Penthouse Division Director", experience: "12 years", propertiesSold: 380, image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
    { id: 3, name: "Nathaniel Vanderbilt", title: "Waterfront Properties Expert", experience: "18 years", propertiesSold: 510, image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
    { id: 4, name: "Victoria Kensington", title: "International Luxury Director", experience: "14 years", propertiesSold: 395, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
  ];

  const testimonialsData = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Tech Entrepreneur",
    content: "The team found me a perfect investment property that has appreciated 35% in just two years. Exceptional service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    transaction: "$4.8M Villa Purchase",
    location: "Singapore",
    date: "2023-08-15"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Investment Banker",
    content: "Professional, efficient, and incredibly knowledgeable. They navigated a complex international purchase seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    transaction: "$3.2M Penthouse",
    location: "New York",
    date: "2023-10-22"
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Interior Designer",
    content: "Found my dream studio space in the perfect creative neighborhood. The attention to detail was outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    transaction: "$1.5M Commercial Space",
    location: "Los Angeles",
    date: "2023-09-05"
  }
];

// Add video testimonials
const videoTestimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Real Estate Investor",
    videoUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "2:45",
    quote: "The investment guidance I received was invaluable. My portfolio has grown 42% in one year."
  },
  {
    id: 2,
    name: "Jennifer Lee",
    role: "Business Owner",
    videoUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    thumbnail: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "3:20",
    quote: "They found me the perfect commercial space for my business expansion."
  }
];



  // Mortgage calculator logic
  const calculateMortgage = () => {
    const principal = mortgageValues.price * (1 - mortgageValues.downPayment / 100);
    const monthlyRate = mortgageValues.interestRate / 100 / 12;
    const numberOfPayments = mortgageValues.loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }
    
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

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
// Testimonial Card Component - Updated to remove gradients
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl p-8 shadow-lg ${isActive ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-blue-500 p-0.5">
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
              <FaStar key={i} className="text-yellow-500 fill-current" />
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
          <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            Completed
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Video Testimonial Component
const VideoTestimonialCard = ({ testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative">
        {!isPlaying ? (
          <>
            <img src={testimonial.thumbnail} alt={testimonial.name} className="w-full h-64 object-cover" />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <FaPlay className="text-orange-500 text-2xl ml-1" />
              </div>
            </button>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {testimonial.duration}
            </div>
          </>
        ) : (
          <div className="relative h-64">
            <iframe
              src={`${testimonial.videoUrl}&autoplay=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`Testimonial from ${testimonial.name}`}
            ></iframe>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <FaUser className="text-gray-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
        
        <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
        
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500 mr-1" />
          <FaStar className="text-yellow-500" />
        </div>
      </div>
    </div>
  );
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Home className="text-white" size={24} />
            </div>
            <span className={`text-2xl font-bold text-white`}>United Realty</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">            {['Properties', 'Services', 'About', 'Agents', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white hover:text-amber-700 font-medium transition-colors duration-300">
                {item}
              </a>
            ))}
            <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-yellow-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            {['Properties', 'Services', 'About', 'Agents', 'Contact'].map((item) => (
              <a key={item} href="#" className="block py-3 text-gray-700 hover:text-amber-700 font-medium border-b border-gray-100">
                {item}
              </a>
            ))}
            <button className="mt-4 w-full bg-yellow-400 text-white px-6 py-3 rounded-lg font-medium">
              Schedule Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80")',
            transform: `translateY(${window.scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6  relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover <span className="text-amber-400">Extraordinary</span> Luxury Properties
            </h1>
            <p className="text-xl text-gray-200 mb-5">
              Exclusive estates, penthouses, and waterfront villas curated for the world's most discerning clients.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-2 flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 flex items-center bg-white rounded-lg p-3">
                <Search className="text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search by location, property type, or keyword"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <button className="bg-yellow-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center">
                <Search className="mr-2" size={20} />
                Explore Properties
              </button>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={1500} label="Properties Sold" />
            <Counter end={120} label="Luxury Partners" />
            <Counter end={85} label="Countries Served" />
            <Counter end={42} label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Curated <span className="text-amber-600">Luxury</span> Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our handpicked selection of extraordinary properties from around the globe.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'villa', 'penthouse', 'waterfront'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter 
                  ? 'bg-yellow-400 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {filter === 'all' ? 'All Properties' : 
                 filter === 'villa' ? 'Luxury Villas' :
                 filter === 'penthouse' ? 'Penthouses' : 'Waterfront Estates'}
              </button>
            ))}
          </div>
          
          {/* Property Grid */}
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
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.waterfront ? 'Waterfront' : 'Premium'}
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
                      <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-amber-700">{property.price}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600 border-y border-gray-100 py-4 mb-6">
                    <div className="text-center">
                      <Bed className="mx-auto mb-1" size={20} />
                      <span className="font-medium">{property.beds} Beds</span>
                    </div>
                    <div className="text-center">
                      <Bath className="mx-auto mb-1" size={20} />
                      <span className="font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="text-center">
                      <Square className="mx-auto mb-1" size={20} />
                      <span className="font-medium">{property.sqft} Sqft</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-yellow-400 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn">
                    <span>Schedule Viewing</span>
                    <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>

       {/* Testimonials Section with Videos */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium mb-6">
                    <FaComment className="mr-2" /> Client Success Stories
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Trusted by <span className="text-orange-500">
                      Global Elite
                    </span>
                  </h2>
                  <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                    See why top investors and homeowners choose United Realty for their property needs
                  </p>
                </div>
                
                {/* Video Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {videoTestimonials.map((testimonial) => (
                    <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
                
                {/* Text Testimonials Carousel */}
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
                              ? 'bg-orange-500 w-8'
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

    
      {/* Mortgage Calculator */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mortgage <span className="text-amber-400">Calculator</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Estimate your monthly payments with our advanced mortgage calculator. Adjust the parameters to see how different scenarios affect your payment.
              </p>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="mb-8">
                  <div className="flex justify-between text-white mb-2">
                    <span>Property Price</span>
                    <span className="text-2xl font-bold">${mortgageValues.price.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="10000000"
                    step="100000"
                    value={mortgageValues.price}
                    onChange={(e) => setMortgageValues({...mortgageValues, price: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-gray-400 text-sm mt-1">
                    <span>$500K</span>
                    <span>$10M</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-white mb-2">Down Payment</label>
                    <div className="flex items-center bg-white/20 rounded-lg p-3">
                      <input
                        type="number"
                        value={mortgageValues.downPayment}
                        onChange={(e) => setMortgageValues({...mortgageValues, downPayment: parseInt(e.target.value)})}
                        className="w-full bg-transparent text-white outline-none"
                      />
                      <span className="text-white">%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Interest Rate</label>
                    <div className="flex items-center bg-white/20 rounded-lg p-3">
                      <input
                        type="number"
                        step="0.1"
                        value={mortgageValues.interestRate}
                        onChange={(e) => setMortgageValues({...mortgageValues, interestRate: parseFloat(e.target.value)})}
                        className="w-full bg-transparent text-white outline-none"
                      />
                      <span className="text-white">%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Loan Term</label>
                    <div className="flex items-center bg-white/20 rounded-lg p-3">
                      <input
                        type="number"
                        value={mortgageValues.loanTerm}
                        onChange={(e) => setMortgageValues({...mortgageValues, loanTerm: parseInt(e.target.value)})}
                        className="w-full bg-transparent text-white outline-none"
                      />
                      <span className="text-white">years</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Monthly Payment</label>
                    <div className="bg-amber-600 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">
                        ${calculateMortgage().toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-white text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Pre-Approved
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-8xl font-bold text-white/20 mb-6">$</div>
              <div className="text-5xl font-bold text-white mb-8">
                Financing <span className="text-amber-400">Solutions</span>
              </div>
              <p className="text-gray-300 text-lg mb-10">
                Our financial experts work with top-tier lenders to secure the most favorable terms for our clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Jumbo Loans', value: 'Up to $10M' },
                  { label: 'Interest Rates', value: 'As low as 2.9%' },
                  { label: 'Approval Time', value: '24-48 Hours' },
                  { label: 'International Clients', value: 'Welcome' },
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                    <div className="text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Agents */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-amber-600">Expert</span> Agents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our team of luxury real estate specialists brings decades of experience and unparalleled market knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent) => (
              <div 
                key={agent.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                    <p className="text-amber-300">{agent.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{agent.experience}</div>
                      <div className="text-gray-600 text-sm">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{agent.propertiesSold}</div>
                      <div className="text-gray-600 text-sm">Properties Sold</div>
                    </div>
                  </div>
                  
                  <button className="w-full border-2 border-amber-600 text-amber-700 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center">
                    <Phone className="mr-2" size={18} />
                    Contact Agent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-yellow-400 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead in Luxury Real Estate
            </h2>
            <p className="text-amber-100 text-xl mb-10 max-w-2xl mx-auto">
              Subscribe to our exclusive newsletter for early access to new listings, market insights, and luxury lifestyle content.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl outline-none text-gray-900"
                />
                <button className="bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-amber-200 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* CTA Section */}
     <div id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto"
  >
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-2 bg-yellow-400 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
        📬 CONTACT US
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Get In <span className="text-transparent bg-clip-text bg-yellow-400">Touch</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Contact Information - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden group"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-yellow-400 rounded-xl shadow-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Contact Information</h3>
          </div>
          
          <div className="space-y-8">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone Number",
                details: "(802) 555-1234",
                description: "Available Monday-Friday, 9am-6pm",
                gradient: "bg-yellow-400"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Address",
                details: "info@vermontliferealtors.com",
                description: "We'll respond within 24 hours",
                gradient: "bg-green-400"
              },
              {
                icon: <Home className="w-6 h-6" />,
                title: "Office Location",
                details: "59 South Main St., Stowe, VT 05676",
                description: "Visit us at our headquarters",
                gradient: "bg-yellow-400"
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
                <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} shadow-lg`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-white font-bold text-xl mb-1 group-hover/item:text-cyan-300 transition-colors">
                    {item.details}
                  </p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

       
        </div>
      </motion.div>

      {/* Contact Form - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-yellow-400 rounded-xl shadow-lg">
              <Send className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Send Message</h3>
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
                    className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300"
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
                  className="w-full px-5 py-4 pl-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white hover:border-gray-300 resize-none"
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
                className="w-full bg-yellow-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
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
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'pb-5' : 'max-h-0'}`}
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-yellow-400 rounded-2xl shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-blue-100">
                Can't find the answer you're looking for? Please contact our support team.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg">
              Contact Support
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Click on any question to reveal the answer. Click again to collapse.</p>
        </div>
      </div>
    </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Home size={24} />
                </div>
                <span className="text-2xl font-bold">United Realty</span>
              </div>
              <p className="text-gray-400">
                Redefining luxury real estate with unparalleled service, exclusive properties, and global expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Properties', 'Buying Guide', 'Selling Guide', 'About Us', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-amber-400" />
                  <span className="text-gray-400">+1 (888) 888-8888</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-amber-400" />
                  <span className="text-gray-400">info@luxeliving.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-3 text-amber-400" />
                  <span className="text-gray-400">888 Park Avenue, New York, NY</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
              <p className="text-gray-400 mb-6">
                Follow us on social media for the latest luxury listings and market updates.
              </p>
              <div className="flex space-x-4">
                {[<FaFacebook/>, <FaInstagram/>, <FaLinkedinIn/>,<FaTwitter/>].map((social) => (
                  <div 
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© CornerStone Realtors. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50">
        <Phone size={24} />
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ModernLuxuryRealEstate;