import React, { useEffect, useState, useRef } from 'react';
import {
  Building, Home, Users, Award, Calendar,
  ChevronRight, ChevronLeft, MapPin, Target,
  DollarSign, TrendingUp, Shield, Check,
  Phone, Mail, Clock, Globe, ArrowRight,
  Menu, X, Search, Filter, Download,
  BarChart, PieChart, Layers, Compass,
  Briefcase, Home as HomeIcon, Factory,
  Building2, Store, Hotel, School,
  Heart, Share2, Maximize2, Play,
  MessageCircle, Target as TargetIcon,
  Building as BuildingIcon, Users2,
  Lightbulb, CpuIcon, Zap
} from 'lucide-react';
import { FaArrowLeft, FaArrowRight, FaCheck, FaComment, FaFacebook, FaInstagram, FaLinkedinIn, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CorporateRealEstateWebsite = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('commercial');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'commercial'
  });
  const [activeFilter, setActiveFilter] = useState('all');
  const [teamHovered, setTeamHovered] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTimelineItem, setCurrentTimelineItem] = useState(0);

  // Animated building illustrations
  const BuildingIllustration = () => {
    const buildings = [
      { height: "h-32", width: "w-16", color: "from-blue-600 to-blue-800", delay: "0s" },
      { height: "h-40", width: "w-20", color: "from-indigo-600 to-indigo-800", delay: "0.2s" },
      { height: "h-48", width: "w-24", color: "from-purple-600 to-purple-800", delay: "0.4s" },
      { height: "h-56", width: "w-28", color: "from-blue-700 to-blue-900", delay: "0.6s" },
      { height: "h-64", width: "w-32", color: "from-indigo-700 to-indigo-900", delay: "0.8s" },
      { height: "h-48", width: "w-24", color: "from-blue-600 to-blue-800", delay: "1s" },
      { height: "h-32", width: "w-16", color: "from-purple-600 to-purple-800", delay: "1.2s" },
    ];

    return (
      <div className="flex items-end space-x-4 h-80 relative">
        {buildings.map((building, index) => (
          <div 
            key={index}
            className={`relative transform transition-all duration-1000 ease-out ${building.width} ${building.height}`}
            style={{ 
              animationDelay: building.delay,
              transform: `translateY(${Math.sin(Date.now() / 1000 + index) * 5}px)`
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${building.color} rounded-t-2xl shadow-2xl`}></div>
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-8 left-1/4 w-2 h-2 bg-amber-300 rounded-full opacity-70 animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
            <div className="absolute top-16 right-1/4 w-2 h-2 bg-amber-300 rounded-full opacity-70 animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}></div>
          </div>
        ))}
      </div>
    );
  };

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Commercial projects data
  const commercialProjects = [
    {
      id: 1,
      title: "Quantum Financial Center",
      location: "Manhattan, NY",
      type: "Office Tower",
      size: "1.2M sq. ft.",
      status: "Completed",
      year: "2023",
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "LEED Platinum certified financial district landmark",
      features: ["Smart Building Tech", "Helipad", "Executive Suites", "24/7 Security"]
    },
    {
      id: 2,
      title: "Tech Innovation Park",
      location: "Silicon Valley, CA",
      type: "Tech Campus",
      size: "850K sq. ft.",
      status: "Ongoing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "State-of-the-art tech research and development campus",
      features: ["R&D Labs", "Conference Center", "Wellness Facilities", "EV Charging"]
    },
    {
      id: 3,
      title: "Global Logistics Hub",
      location: "Chicago, IL",
      type: "Industrial Complex",
      size: "2.5M sq. ft.",
      status: "Completed",
      year: "2022",
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Advanced logistics and distribution center",
      features: ["Rail Access", "Cold Storage", "Automated Systems", "Security"]
    },
    {
      id: 4,
      title: "Luxury Retail Galleria",
      location: "Beverly Hills, CA",
      type: "Retail Complex",
      size: "450K sq. ft.",
      status: "Ongoing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "High-end retail and entertainment destination",
      features: ["Luxury Brands", "Fine Dining", "VIP Lounges", "Valet Parking"]
    }
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


  // Residential projects data
  const residentialProjects = [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Downtown Miami, FL",
      type: "Luxury Condominium",
      units: "250",
      status: "Completed",
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Waterfront luxury living with panoramic views",
      features: ["Private Marina", "Infinity Pool", "Spa", "Concierge"]
    },
    {
      id: 2,
      title: "Urban Garden Estates",
      location: "Brooklyn, NY",
      type: "Mixed-Use Development",
      units: "180",
      status: "Ongoing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Sustainable urban living with green spaces",
      features: ["Rooftop Gardens", "Co-working", "Gym", "Pet Spa"]
    },
    {
      id: 3,
      title: "Heritage Villas",
      location: "Scottsdale, AZ",
      type: "Gated Community",
      units: "120",
      status: "Completed",
      year: "2022",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Luxury desert living with resort amenities",
      features: ["Golf Course", "Tennis Courts", "Clubhouse", "Security"]
    },
    {
      id: 4,
      title: "Riverfront Towers",
      location: "Chicago, IL",
      type: "High-Rise Apartments",
      units: "400",
      status: "Ongoing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Modern riverfront living with smart home technology",
      features: ["River Views", "Smart Homes", "Fitness Center", "Lounge"]
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);
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
  // Company timeline
  const timelineData = [
    { year: "2005", title: "Company Founded", description: "Started with commercial property management" },
    { year: "2010", title: "First Major Development", description: "Completed Quantum Financial Center" },
    { year: "2015", title: "Global Expansion", description: "Expanded to European and Asian markets" },
    { year: "2018", title: "Sustainability Initiative", description: "Implemented green building standards" },
    { year: "2020", title: "Digital Transformation", description: "Launched virtual property tours" },
    { year: "2023", title: "Industry Leadership", description: "Recognized as top commercial developer" }
  ];

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: "James Rutherford",
      title: "CEO & Founder",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialty: "Commercial Development"
    },
    {
      id: 2,
      name: "Elizabeth Sterling",
      title: "Chief Operations Officer",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialty: "Project Management"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Chief Investment Officer",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialty: "Investment Strategy"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Head of Residential",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialty: "Luxury Residential"
    }
  ];

  // Awards data
  const awards = [
    { year: "2023", title: "Best Commercial Developer", organization: "Global Real Estate Awards" },
    { year: "2022", title: "Sustainability Excellence", organization: "Green Building Council" },
    { year: "2021", title: "Innovation in Construction", organization: "Construction Excellence Awards" },
    { year: "2020", title: "Top Workplace", organization: "Fortune Magazine" }
  ];

  // Partner logos
  const partners = [
    { name: "Global Finance Inc", logo: "GF" },
    { name: "Urban Development Group", logo: "UDG" },
    { name: "Sustainable Building Co", logo: "SBC" },
    { name: "Tech Infrastructure", logo: "TI" },
    { name: "Luxury Living Corp", logo: "LLC" },
    { name: "Commercial Realty", logo: "CR" }
  ];

  // Interactive gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  // Projects by type for filtering
  const allProjects = [...commercialProjects, ...residentialProjects];
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => 
        activeFilter === 'completed' ? project.status === 'Completed' :
        activeFilter === 'ongoing' ? project.status === 'Ongoing' :
        project.type.toLowerCase().includes(activeFilter)
      );

  // Animated section heading component
  const SectionHeading = ({ title, subtitle, centered = false }) => (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium mb-4">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          {subtitle}
        </div>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold text-pink-800 mb-6 relative inline-block ${centered ? 'mx-auto' : ''}`}>
        {title}
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
        {centered && (
          <span className="absolute -bottom-2 right-0 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
        )}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">United Realty</div>
                <div className="text-xs text-gray-600 font-medium">REAL ESTATE GROUP</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Projects', 'Services', 'Investors', 'Company', 'Insights', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-700 hover:text-blue-700 font-medium relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Investor Portal
              </button>
            </div>

            {/* Mobile Menu Button */}
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
            {['Projects', 'Services', 'Investors', 'Company', 'Insights', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block py-3 text-gray-700 hover:text-blue-700 font-medium border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
              Investor Portal
            </button>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            transform: `translateY(${scrollProgress * 0.5}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Trusted Since 2005 • $15B+ in Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Shaping Skylines,
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Building Communities
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl">
              A premier real estate development firm specializing in commercial and residential properties across global markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 overflow-hidden min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              
              <button className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Watch Overview
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Buildings */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 opacity-90">
          <BuildingIllustration />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$15B+", label: "Total Project Value", icon: <DollarSign />, color: "from-blue-600 to-blue-700" },
              { value: "250+", label: "Projects Completed", icon: <Building />, color: "from-indigo-600 to-indigo-700" },
              { value: "40+", label: "Global Locations", icon: <Globe />, color: "from-purple-600 to-purple-700" },
              { value: "98%", label: "Client Satisfaction", icon: <Award />, color: "from-emerald-600 to-emerald-700" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {React.cloneElement(stat.icon, { size: 32 })}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Portfolio"
            subtitle="Commercial & Residential Excellence"
            centered
          />
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['commercial', 'residential'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  {tab === 'commercial' ? <Building2 className="mr-2" /> : <HomeIcon className="mr-2" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
                </div>
              </button>
            ))}
          </div>
          
          {/* Project Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {['all', 'ongoing', 'completed', 'office', 'residential', 'retail', 'industrial'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'commercial' ? commercialProjects : residentialProjects)
              .filter(project => 
                activeFilter === 'all' ? true :
                activeFilter === 'completed' ? project.status === 'Completed' :
                activeFilter === 'ongoing' ? project.status === 'Ongoing' :
                project.type.toLowerCase().includes(activeFilter)
              )
              .map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-xl">{project.title}</div>
                    <div className="text-blue-200 text-sm">{project.location}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-2" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Type</div>
                      <div className="font-semibold text-gray-900">{project.type}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <div className="font-medium text-gray-900">{project.year}</div>
                      <div>{project.type === 'Luxury Condominium' || project.type === 'Mixed-Use Development' || project.type === 'Gated Community' || project.type === 'High-Rise Apartments' ? `${project.units} Units` : project.size}</div>
                    </div>
                    <button className="flex items-center text-blue-600 font-semibold group/btn">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
              
                title="Investor Opportunities"
                subtitle="Strategic Partnerships"
               
              />
              
              <p className="text-xl text-gray-300 mb-8">
                Partner with us on landmark developments and benefit from our proven track record of delivering exceptional returns.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: <TrendingUp />, title: "Strong Returns", desc: "Average 18% ROI over past decade" },
                  { icon: <Shield />, title: "Risk Management", desc: "Comprehensive due diligence process" },
                  { icon: <Globe />, title: "Global Portfolio", desc: "Diversified across markets and asset classes" },
                  { icon: <BarChart />, title: "Transparent Reporting", desc: "Real-time investment performance tracking" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {React.cloneElement(item.icon, { size: 24 })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                  Download Investor Kit
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                  Schedule Meeting
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Investment Metrics Visualization */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Investment Performance</h3>
                
                <div className="space-y-8">
                  {[
                    { label: "Commercial ROI", value: "22%", color: "from-blue-500 to-cyan-500" },
                    { label: "Residential ROI", value: "16%", color: "from-emerald-500 to-green-500" },
                    { label: "Mixed-Use ROI", value: "19%", color: "from-purple-500 to-pink-500" },
                    { label: "Industrial ROI", value: "24%", color: "from-amber-500 to-orange-500" },
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-white mb-2">
                        <span>{metric.label}</span>
                        <span className="font-bold">{metric.value}</span>
                      </div>
                      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${parseInt(metric.value)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl border border-blue-800/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15.8%</div>
                    <div className="text-blue-300">Average Annual Return</div>
                    <div className="text-sm text-gray-400 mt-2">2005 - Present</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Journey"
            subtitle="Milestones & Achievements"
            centered
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setCurrentTimelineItem(index)}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${currentTimelineItem === index ? 'ring-2 ring-blue-500' : ''}`}>
                      <div className="text-2xl font-bold text-blue-700 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-300 ${
                      currentTimelineItem === index 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125' 
                        : 'bg-gray-300'
                    }`}></div>
                  </div>
                  
                  {/* Year indicator */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className={`text-4xl font-bold ${currentTimelineItem === index ? 'text-gray-900' : 'text-gray-300'} transition-colors duration-300`}>
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Awards & Recognition"
            subtitle="Industry Excellence"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{award.year}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Leadership Team"
            subtitle="Experienced Professionals"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setTeamHovered(member.id)}
                onMouseLeave={() => setTeamHovered(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 flex items-center justify-center transition-all duration-500 ${
                    teamHovered === member.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center p-6">
                      <div className="text-white text-xl font-bold mb-2">{member.name}</div>
                      <div className="text-blue-200 mb-4">{member.expertise}</div>
                      <div className="text-white">{member.experience} Experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.title}</div>
                  <div className="text-gray-600">{member.specialty}</div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-2" size={16} />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Trusted Partners"
            subtitle="Global Network"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-2">{partner.logo}</div>
                  <div className="text-sm text-gray-600">{partner.name}</div>
                </div>
              </div>
            ))}
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
                         See why top investors and homeowners choose LuxeLiving for their property needs
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
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch"
                subtitle="Contact Our Team"
              />
              
              <p className="text-xl text-gray-700 mb-8">
                Whether you're looking to invest, develop, or partner with us, our team is ready to discuss your real estate objectives.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <Phone />, title: "Phone", details: "+1 (555) 123-4567", desc: "Mon-Fri, 9AM-6PM EST" },
                  { icon: <Mail />, title: "Email", details: "info@horizonre.com", desc: "Response within 24 hours" },
                  { icon: <MapPin />, title: "Headquarters", details: "500 Park Avenue", desc: "New York, NY 10022" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {React.cloneElement(contact.icon, { size: 24 })}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{contact.title}</h4>
                      <div className="text-gray-800 font-medium">{contact.details}</div>
                      <div className="text-gray-600 text-sm">{contact.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Regional Offices</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['London', 'Singapore', 'Dubai', 'Hong Kong'].map((city) => (
                    <div key={city} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Interest</label>
                  <select
                    value={contactForm.interest}
                    onChange={(e) => setContactForm({...contactForm, interest: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="commercial">Commercial Real Estate</option>
                    <option value="residential">Residential Development</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Strategic Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
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
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg text-white">
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
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center">
                  <Building size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">United Realty</div>
                  <div className="text-xs text-gray-400">REAL ESTATE GROUP</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8">
                Premier real estate development firm specializing in commercial and residential properties across global markets since 2005.
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
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Commercial Projects', 'Residential Developments', 'Investment Opportunities', 'Company Profile', 'Careers', 'Newsroom'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Development', 'Investment', 'Property Management', 'Consulting', 'Market Research', 'Sustainability'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for market insights and project updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-l-lg outline-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 rounded-r-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© Growth Flow Media. All rights reserved. | Privacy Policy | Terms of Service</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronRight className="transform -rotate-90" size={24} />
        </button>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2563eb, #4f46e5);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1d4ed8, #4338ca);
        }
      `}</style>
    </div>
  );
};

export default CorporateRealEstateWebsite;