import React, { useEffect, useState, useRef } from 'react';
import { 
  Search, MapPin, ChevronRight, ChevronLeft, 
  Heart, Star, TrendingUp, Users, Home, 
  Check, X, Menu, Clock, Filter, 
  DollarSign, Maximize2, Bed, Bath, 
  Square, Share2, Phone, Mail, 
  Calendar, ArrowRight, Shield, Zap,
  Play, Target, Compass, Building,
  Globe, Smartphone, Cloud, Cpu,
  MessageSquare, Award, Leaf, Wifi, Send,
  User
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
const ModernRealEstateStartup = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState([500000, 2500000]);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [isTyping, setIsTyping] = useState(true);
  const [typingText, setTypingText] = useState('');
  const typingIndex = useRef(0);
  const typingTexts = [
    "Fiind your perfect home",
   
  ];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const textChangeDelay = 2000;

  // Typing effect for hero section
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (typingIndex.current < typingTexts[currentSlide].length) {
        timeout = setTimeout(() => {
          setTypingText(prev => prev + typingTexts[currentSlide].charAt(typingIndex.current));
          typingIndex.current += 1;
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), textChangeDelay);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(prev => prev.slice(0, -1));
        }, erasingSpeed);
      } else {
        setCurrentSlide((prev) => (prev + 1) % typingTexts.length);
        typingIndex.current = 0;
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [isTyping, typingText, currentSlide]);

  // AI Recommendation simulation
  useEffect(() => {
    const recommendations = [
      "Based on your search, we recommend properties with smart home features and proximity to tech hubs.",
      "Your budget aligns with luxury apartments in emerging neighborhoods with high growth potential.",
      "Considering your preferences, we found eco-friendly properties with sustainable features."
    ];
    const interval = setInterval(() => {
      setAiRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Sample data
  const popularCities = [
    { id: 1, name: "San Francisco", state: "CA", properties: 1240, avgPrice: "$1.2M", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80", trending: true },
    { id: 2, name: "Austin", state: "TX", properties: 980, avgPrice: "$650K", image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80", trending: true },
    { id: 3, name: "Miami", state: "FL", properties: 1560, avgPrice: "$850K", image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" },
    { id: 4, name: "Seattle", state: "WA", properties: 890, avgPrice: "$950K", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80", trending: true },
    { id: 5, name: "Denver", state: "CO", properties: 760, avgPrice: "$550K", image: "https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" },
    { id: 6, name: "Nashville", state: "TN", properties: 540, avgPrice: "$450K", image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" },
  ];
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
  const featuredProperties = [
    { 
      id: 1, 
      title: "Modern Tech Hub Loft", 
      price: "$1,250,000", 
      location: "SoMa, San Francisco", 
      beds: 2, 
      baths: 2, 
      sqft: "1,450", 
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
      type: "apartment",
      featured: true,
      smartHome: true,
      rating: 4.9,
      views: 1240,
      amenities: ["Smart Home", "Gym", "Rooftop", "Concierge"]
    },
    { 
      id: 2, 
      title: "Downtown Luxury Penthouse", 
      price: "$2,800,000", 
      location: "Downtown Austin", 
      beds: 3, 
      baths: 3, 
      sqft: "2,800", 
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
      type: "penthouse",
      featured: true,
      smartHome: true,
      rating: 4.8,
      views: 980,
      amenities: ["Pool", "Gym", "Pet Spa", "EV Charging"]
    },
    { 
      id: 3, 
      title: "Waterfront Smart Condo", 
      price: "$1,750,000", 
      location: "Brickell, Miami", 
      beds: 2, 
      baths: 2, 
      sqft: "1,650", 
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
      type: "condo",
      featured: true,
      smartHome: true,
      rating: 4.7,
      views: 1560,
      amenities: ["Water View", "Smart Home", "Pool", "Security"]
    },
    { 
      id: 4, 
      title: "Minimalist Designer Home", 
      price: "$1,450,000", 
      location: "Capitol Hill, Seattle", 
      beds: 3, 
      baths: 2, 
      sqft: "1,950", 
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w-2068&q=80", 
      type: "house",
      featured: true,
      smartHome: true,
      rating: 4.9,
      views: 890,
      amenities: ["Solar Panels", "EV Ready", "Garden", "Smart Home"]
    },
    { 
      id: 5, 
      title: "Urban Tech Oasis", 
      price: "$950,000", 
      location: "LoDo, Denver", 
      beds: 1, 
      baths: 1, 
      sqft: "950", 
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
      type: "apartment",
      featured: true,
      smartHome: true,
      rating: 4.6,
      views: 760,
      amenities: ["Co-working", "Gym", "Bike Storage", "Smart Lock"]
    },
    { 
      id: 6, 
      title: "Historic Modern Remodel", 
      price: "$1,650,000", 
      location: "Germantown, Nashville", 
      beds: 4, 
      baths: 3, 
      sqft: "2,450", 
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80", 
      type: "house",
      featured: true,
      smartHome: true,
      rating: 4.8,
      views: 540,
      amenities: ["Smart Home", "Wine Cellar", "Garden", "Solar"]
    },
  ];

  const userReviews = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Tech Entrepreneur",
      rating: 5,
      comment: "The AI recommendations matched me with the perfect smart home. The entire process was seamless and transparent.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      property: "Modern Tech Hub Loft",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Remote Developer",
      rating: 5,
      comment: "Loved the virtual tours and smart search features. Found my ideal apartment without leaving my home office.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      property: "Downtown Luxury Penthouse",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      rating: 4,
      comment: "The market insights and neighborhood data helped me make an informed investment decision.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      property: "Waterfront Smart Condo",
      date: "3 weeks ago"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of Smart Homes in 2024",
      excerpt: "How AI and IoT are transforming modern living spaces and increasing property values.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "Mar 15, 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Investing in Emerging Tech Cities",
      excerpt: "A comprehensive guide to identifying the next Silicon Valley for real estate investment.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Investment",
      date: "Mar 10, 2024",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Sustainable Living: Eco-Friendly Features That Sell",
      excerpt: "How green features are becoming must-haves for modern home buyers.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Sustainability",
      date: "Mar 5, 2024",
      readTime: "6 min"
    }
  ];

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      price: "$49",
      period: "month",
      description: "For individual home seekers",
      features: [
        "Property search & filters",
        "Basic AI recommendations",
        "Email notifications",
        "Save up to 50 properties",
        "Virtual tour access"
      ],
      recommended: false
    },
    {
      id: "professional",
      name: "Professional",
      price: "$99",
      period: "month",
      description: "For serious buyers & investors",
      features: [
        "Advanced AI matchmaking",
        "Market trend analysis",
        "Priority support",
        "Unlimited property saves",
        "Investment insights",
        "3D virtual tours",
        "Price change alerts"
      ],
      recommended: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For agencies & teams",
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "API access",
        "Custom AI models",
        "Dedicated account manager",
        "Market prediction tools",
        "Advanced analytics dashboard"
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "How does the AI recommendation system work?",
      answer: "Our AI analyzes your search patterns, preferences, and market data to match you with properties that fit your lifestyle and investment goals."
    },
    {
      question: "Are virtual tours available for all properties?",
      answer: "Yes, 95% of our listings include interactive 3D virtual tours. For remaining properties, we offer video walkthroughs."
    },
    {
      question: "How accurate are the market value estimates?",
      answer: "Our estimates are 97% accurate based on recent sales data, neighborhood trends, and property features."
    },
    {
      question: "Can I schedule viewings through the platform?",
      answer: "Yes, you can schedule in-person or virtual viewings directly through our platform with our verified agents."
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white font-sans overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Home className="text-white" size={22} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-purple-600 bg-clip-text text-transparent">
                  United Realty
                </span>
                <div className="text-xs text-gray-500">AI-Powered Real Estate</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {['Buy', 'Rent', 'Sell', 'Invest', 'About', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-6">
            {['Buy', 'Rent', 'Sell', 'Invest', 'About', 'Resources'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-purple-600 text-white px-6 py-3 rounded-xl font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated typing text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 mb-2">
                {typingText}
                <span className="inline-block w-1 h-12 bg-blue-600 ml-1 animate-pulse align-middle"></span>
              </span>
              <span className="bg-purple-600 bg-clip-text text-transparent">
                Made Smarter with AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover, tour, and secure your next home with our intelligent platform powered by machine learning and real-time market insights.
            </p>

            {/* Smart Search UI */}
            <div className="bg-white rounded-2xl shadow-2xl p-2 mb-8 animate-slide-up">
              <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="flex-1">
                  <div className="flex items-center bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                    <Search className="text-gray-400 mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search by city, neighborhood, or ZIP"
                      className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                    <div className="hidden sm:block ml-3">
                      <Target className="text-blue-500" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                    <Filter className="text-gray-400 mr-3 flex-shrink-0" />
                    <div className="w-full">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Price Range</span>
                        <span>${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="5000000"
                        step="100000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center min-w-[160px]">
                  <Search className="mr-2" size={20} />
                  Find Properties
                </button>
              </div>
              
              {/* Quick filters */}
              <div className="flex flex-wrap justify-center gap-3 px-4 pb-4">
                {['Smart Homes', 'New Listings', 'Virtual Tour', 'Price Drop', 'Luxury'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300 text-sm"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "50K+", label: "Properties Listed", icon: <Home size={20} /> },
                { value: "98%", label: "Satisfaction Rate", icon: <Star size={20} /> },
                { value: "24/7", label: "AI Support", icon: <Cpu size={20} /> },
                { value: "10K+", label: "Virtual Tours", icon: <Globe size={20} /> },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="bg-purple-600 bg-clip-text text-transparent">Popular Cities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover properties in the fastest growing tech and innovation hubs across the country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCities.map((city, index) => (
              <div 
                key={city.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  {city.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp size={14} className="mr-1" />
                      Trending
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    <p className="text-gray-200">{city.state} • {city.properties} properties</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="text-xl font-bold text-white">{city.avgPrice}</div>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium mb-6">
                <Cpu className="mr-2" size={16} />
                AI-Powered Intelligence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Smart <span className="bg-purple-600 bg-clip-text text-transparent">Recommendations</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI analyzes thousands of data points to match you with properties that fit your lifestyle, budget, and future goals.
              </p>
              
              {/* AI Recommendation Display */}
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">AI Insight</h4>
                    <p className="text-gray-600 text-sm">Updated in real-time</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-700 italic">
                    {aiRecommendation || "Analyzing market trends and your preferences..."}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Target />, label: "Personalized Matching", desc: "Based on your behavior" },
                  { icon: <TrendingUp />, label: "Market Predictions", desc: "Accurate price forecasts" },
                  { icon: <Shield />, label: "Risk Analysis", desc: "Investment safety insights" },
                  { icon: <Zap />, label: "Fast Processing", desc: "Real-time updates" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.label}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Animated visualization */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                {/* Map visualization */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-64 h-64">
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      ></div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Cpu className="text-white" size={48} />
                    </div>
                  </div>
                </div>
                
                {/* Floating property cards */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute bg-white rounded-xl p-4 shadow-xl w-48 animate-float"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: i === 1 ? '10%' : i === 2 ? '70%' : '40%',
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-bold text-gray-900">Property Match</div>
                      <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">94%</div>
                    </div>
                    <div className="text-xs text-gray-600">3 bed • 2 bath • 1,450 sqft</div>
                    <div className="text-sm font-bold text-blue-600 mt-2">$1.2M</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="bg-purple-600 bg-clip-text text-transparent">Properties</span>
              </h2>
              <p className="text-xl text-gray-600">
                Handpicked smart homes with modern amenities and prime locations
              </p>
            </div>
            
            {/* Filter tabs */}
            <div className="flex space-x-2 mt-6 md:mt-0">
              {['all', 'apartment', 'house', 'penthouse', 'condo'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div 
                key={property.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={() => toggleFavorite(property.id)}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        size={20} 
                        className={favorites.includes(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'} 
                      />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Share2 size={20} className="text-gray-700" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    {property.smartHome && (
                      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <Zap size={12} className="mr-1" />
                        Smart Home
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-2" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600 mb-6 py-4 border-y border-gray-100">
                    <div className="text-center">
                      <Bed className="mx-auto mb-2 text-gray-400" size={20} />
                      <span className="font-medium">{property.beds} Beds</span>
                    </div>
                    <div className="text-center">
                      <Bath className="mx-auto mb-2 text-gray-400" size={20} />
                      <span className="font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="text-center">
                      <Square className="mx-auto mb-2 text-gray-400" size={20} />
                      <span className="font-medium">{property.sqft} Sqft</span>
                    </div>
                    <div className="text-center">
                      <Star className="mx-auto mb-2 text-amber-400" size={20} fill="#fbbf24" />
                      <span className="font-medium">{property.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 overflow-hidden">
              <span className="relative z-10">View All Properties</span>
              <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="bg-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI-powered search and matching technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.recommended 
                    ? 'bg-gradient-to-b from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/25 border-0' 
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.recommended ? 'text-blue-100' : 'text-gray-600'}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center">
                    <span className={`text-5xl font-bold ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.recommended ? 'text-blue-100' : 'text-gray-600'} mt-4 ml-1`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className={`mr-3 flex-shrink-0 ${plan.recommended ? 'text-emerald-300' : 'text-emerald-500'}`} size={20} />
                      <span className={plan.recommended ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.recommended 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : selectedPlan === plan.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="bg-purple-600 bg-clip-text text-transparent">Home Seekers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about their experience with United Realty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userReviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white group-hover:border-blue-500 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-blue-600 text-sm">{review.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{review.comment}"</p>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{review.property}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                    <div className="text-blue-600">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest <span className="bg-purple-600 bg-clip-text text-transparent">Insights</span>
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with market trends, investment tips, and smart home technology.
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
              View All Articles
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-2" />
                    <span>{blog.readTime} read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{blog.excerpt}</p>
                  
                  <button className="flex items-center text-blue-600 font-medium group/readmore">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 group-hover/readmore:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




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
        <div className="mt-12 p-6 bg-purple-600 rounded-2xl shadow-lg text-white">
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




      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Smart Home?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied home seekers who found their perfect match with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-8">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
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
      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
        📬 CONTACT US
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch</span>
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
            <div className="p-3 bg-purple-600 rounded-xl shadow-lg">
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
                gradient: "bg-purple-600"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Address",
                details: "info@vermontliferealtors.com",
                description: "We'll respond within 24 hours",
                gradient: "bg-purple-600"
              },
              {
                icon: <Home className="w-6 h-6" />,
                title: "Office Location",
                details: "59 South Main St., Stowe, VT 05676",
                description: "Visit us at our headquarters",
                gradient: "bg-purple-600"
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
        <div className="absolute top-0 left-0 w-full h-2 bg-purple-600"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-600 rounded-xl shadow-lg">
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
                className="w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
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
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Home size={22} className="text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">United Realty</span>
                  <div className="text-sm text-gray-400">AI-Powered Real Estate</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Revolutionizing real estate with artificial intelligence, machine learning, and seamless user experiences.
              </p>
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
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Platform</h4>
              <ul className="space-y-3">
                {['Buy', 'Rent', 'Sell', 'Invest', 'Market Analysis', 'AI Tools'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Press', 'Blog', 'Contact', 'Partners'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {['Help Center', 'Guides', 'Research', 'Legal', 'Privacy', 'Terms'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                 <p>© United Realty. All rights reserved. | Privacy Policy | Terms of Service</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50">
        <MessageSquare size={24} />
      </button>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default ModernRealEstateStartup;