import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'; // For email functionality

// Initialize emailjs
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // You'll need to get this from emailjs.com

// Remove emoji icons and keep clean icons
import {
  FaSearch, FaMapMarkerAlt, FaHome, FaDollarSign, FaBed, FaBath, FaRulerCombined,
  FaHeart, FaShare, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram,
  FaLinkedinIn, FaYoutube, FaArrowRight, FaArrowLeft, FaStar, FaChevronDown, FaChevronUp,
  FaFilter, FaTimes, FaUser, FaCalendar, FaClock, FaPaperPlane, FaCheck,
  FaEye, FaComment, FaThumbsUp, FaChartLine, FaShieldAlt, FaHandshake, FaBuilding,
  FaCity, FaMountain, FaWater, FaTree, FaChevronRight, FaLock, FaGoogle, FaApple,
  FaSignOutAlt, FaUserCircle, FaCog, FaBell, FaBookmark, FaHistory, FaPlay
} from 'react-icons/fa';
import { MdPool, MdLocalParking, MdFitnessCenter, MdSecurity, MdApartment, MdVilla } from 'react-icons/md';
import { GiFlowerPot, GiModernCity } from 'react-icons/gi';

// Remove lucide-react imports since we're using react-icons
// import { Phone, Mail, Home, MessageSquare, Send, User } from 'lucide-react';

const propertiesData = [
  {
    id: 1,
    title: "Sky Garden Penthouse",
    description: "Luxurious penthouse with private rooftop garden and panoramic city views.",
    price: 3200000,
    location: "Downtown Dubai",
    type: "Penthouse",
    category: "penthouses",
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    status: "New",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Rooftop Garden", "Smart Home", "Infinity Pool", "Wine Cellar", "Home Theater"],
    amenities: ["Pool", "Gym", "Parking", "Concierge", "Spa"],
    coordinates: { lat: 25.2048, lng: 55.2708 },
    rating: 4.8,
    reviews: 24,
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 2,
    title: "Ocean Pearl Villa",
    description: "Modern beachfront villa with direct beach access and infinity pool.",
    price: 4500000,
    location: "Miami Beach",
    type: "Villa",
    category: "luxury-villas",
    bedrooms: 5,
    bathrooms: 4,
    area: 5200,
    status: "Hot",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Beach Access", "Infinity Pool", "Wine Cellar", "Private Dock", "Cinema"],
    amenities: ["Private Beach", "Boat Dock", "Gym", "Spa", "Security"],
    coordinates: { lat: 25.7617, lng: -80.1918 },
    rating: 4.9,
    reviews: 18,
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 3,
    title: "Urban Loft Studio",
    description: "Contemporary loft in trendy neighborhood with industrial design.",
    price: 850000,
    location: "Brooklyn, NY",
    type: "Loft",
    category: "all",
    bedrooms: 1,
    bathrooms: 1,
    area: 1200,
    status: "Featured",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Industrial Design", "High Ceilings", "Exposed Brick", "Open Plan", "Rooftop"],
    amenities: ["Gym", "Roof Deck", "Lounge", "Parking", "Pet Friendly"],
    coordinates: { lat: 40.6782, lng: -73.9442 },
    rating: 4.5,
    reviews: 32,
    agent: {
      name: "Emma Wilson",
      phone: "+1 (555) 345-6789",
      email: "emma@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 4,
    title: "Mountain Retreat",
    description: "Secluded mountain home with breathtaking views and modern amenities.",
    price: 1800000,
    location: "Aspen, CO",
    type: "Mountain Home",
    category: "luxury-villas",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    status: "Featured",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Mountain Views", "Fireplace", "Hot Tub", "Game Room", "Wine Cellar"],
    amenities: ["Ski Access", "Hiking Trails", "Garage", "Workshop", "Greenhouse"],
    coordinates: { lat: 39.1911, lng: -106.8175 },
    rating: 4.7,
    reviews: 15,
    agent: {
      name: "David Miller",
      phone: "+1 (555) 456-7890",
      email: "david@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 5,
    title: "Historic Townhouse",
    description: "Beautifully restored historic townhouse with modern luxury.",
    price: 2900000,
    location: "London, UK",
    type: "Townhouse",
    category: "all",
    bedrooms: 5,
    bathrooms: 4,
    area: 4100,
    status: "New",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Historic Charm", "Modern Kitchen", "Garden", "Library", "Wine Cellar"],
    amenities: ["Garden", "Parking", "Security", "Storage", "Pet Friendly"],
    coordinates: { lat: 51.5074, lng: -0.1278 },
    rating: 4.9,
    reviews: 27,
    agent: {
      name: "Sophie Williams",
      phone: "+44 20 7123 4567",
      email: "sophie@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 6,
    title: "Beachfront Condo",
    description: "Luxury beachfront condo with ocean views and resort amenities.",
    price: 1200000,
    location: "Maui, HI",
    type: "Condo",
    category: "waterfront-estates",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    status: "Hot",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Ocean View", "Balcony", "Modern Kitchen", "Walk-in Closet", "Smart Home"],
    amenities: ["Pool", "Gym", "Beach Access", "Concierge", "Spa"],
    coordinates: { lat: 20.7984, lng: -156.3319 },
    rating: 4.6,
    reviews: 21,
    agent: {
      name: "James Brown",
      phone: "+1 (555) 567-8901",
      email: "james@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 7,
    title: "Tech Haven Mansion",
    description: "Smart mansion with cutting-edge technology and eco-friendly features.",
    price: 7500000,
    location: "Silicon Valley",
    type: "Mansion",
    category: "luxury-villas",
    bedrooms: 8,
    bathrooms: 7,
    area: 9800,
    status: "New",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["AI Integration", "Solar Powered", "Home Theater", "Wine Cellar", "Elevator"],
    amenities: ["Pool", "Tennis Court", "Gym", "Spa", "Security"],
    coordinates: { lat: 37.7749, lng: -122.4194 },
    rating: 4.9,
    reviews: 12,
    agent: {
      name: "Alex Turner",
      phone: "+1 (555) 678-9012",
      email: "alex@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: 8,
    title: "Island Paradise Villa",
    description: "Private island villa with crystal clear waters and tropical gardens.",
    price: 12000000,
    location: "Maldives",
    type: "Island Villa",
    category: "waterfront-estates",
    bedrooms: 6,
    bathrooms: 5,
    area: 7500,
    status: "Featured",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Private Island", "Infinity Pool", "Beach Access", "Helipad", "Marina"],
    amenities: ["Private Beach", "Spa", "Gym", "Yoga Studio", "Chef's Kitchen"],
    coordinates: { lat: 4.1755, lng: 73.5093 },
    rating: 5.0,
    reviews: 8,
    agent: {
      name: "Lisa Wong",
      phone: "+960 123 4567",
      email: "lisa@luxeliving.com",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  }
];

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

const propertyReviews = [
  {
    id: 1,
    propertyId: 1,
    userName: "Robert Kim",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    comment: "The penthouse exceeded all expectations. The views are absolutely breathtaking and the amenities are top-notch.",
    date: "2023-11-15",
    helpful: 12
  },
  {
    id: 2,
    propertyId: 1,
    userName: "Jennifer Lopez",
    userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Perfect for entertaining guests. The rooftop garden is a masterpiece!",
    date: "2023-11-10",
    helpful: 8
  },
  {
    id: 3,
    propertyId: 2,
    userName: "Thomas Anderson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    comment: "The beachfront location is incredible. Waking up to ocean views every morning is priceless.",
    date: "2023-11-05",
    helpful: 15
  }
];

// Property Category Tabs
const propertyCategories = [
  { id: 'all', label: 'All Properties', icon: <FaHome /> },
  { id: 'luxury-villas', label: 'Luxury Villas', icon: <MdVilla /> },
  { id: 'penthouses', label: 'Penthouses', icon: <MdApartment /> },
  { id: 'waterfront-estates', label: 'Waterfront Estates', icon: <FaWater /> }
];

// Button Component - Updated to remove gradients
const ColorfulButton = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const variants = {
    primary: 'bg-orange-500 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-orange-600 text-white hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
    glass: 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-900 hover:bg-white'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`rounded-xl font-bold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Property Card Component - Updated to remove gradients
const PropertyCard = ({ property, layout = 'grid', onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShare, setShowShare] = useState(false);
  
  const statusColors = {
    'New': 'bg-green-600',
    'Hot': 'bg-red-600',
    'Featured': 'bg-purple-600'
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    setShowShare(!showShare);
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${layout === 'list' ? 'flex' : ''}`}
    >
      <div className={`relative ${layout === 'list' ? 'w-1/3' : ''}`}>
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${statusColors[property.status]}`}>
            {property.status}
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-gray-800 text-sm font-bold flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {property.rating} ({property.reviews})
          </span>
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
          </button>
          <button 
            onClick={handleShare}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaShare className="text-gray-600" />
          </button>
        </div>
        <AnimatePresence>
          {showShare && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-20 right-4 bg-white rounded-xl shadow-lg p-4 z-10"
              onClick={e => e.stopPropagation()}
            >
              <p className="font-medium text-gray-800 mb-2">Share this property</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200">
                  <FaFacebook className="text-blue-600" />
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
                  <FaTwitter className="text-blue-400" />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200">
                  <FaInstagram className="text-pink-600" />
                </button>
                <button className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200">
                  <FaWhatsapp className="text-green-600" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className={`p-6 ${layout === 'list' ? 'w-2/3' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-500">
              {formatPrice(property.price)}
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              {property.type === 'Penthouse' && <MdApartment />}
              {property.type === 'Villa' && <MdVilla />}
              {property.type === 'Loft' && <GiModernCity />}
              {property.type === 'Mountain Home' && <FaMountain />}
              {property.type === 'Townhouse' && <FaBuilding />}
              {property.type === 'Condo' && <FaCity />}
              {property.type === 'Mansion' && <FaBuilding />}
              {property.type === 'Island Villa' && <FaWater />}
              {property.type}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2">{property.description}</p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <FaBed className="text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{property.bedrooms}</div>
                <div className="text-sm text-gray-500">Beds</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                <FaBath className="text-pink-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{property.bathrooms}</div>
                <div className="text-sm text-gray-500">Baths</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <FaRulerCombined className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{property.area.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Sq Ft</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {feature}
              </span>
            ))}
          </div>
          <ColorfulButton variant="primary" size="small" onClick={(e) => e.stopPropagation()}>
            View Details
          </ColorfulButton>
        </div>
      </div>
    </motion.div>
  );
};

// SearchBar Component - Updated to remove gradients
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState({
    location: '',
    price: '',
    type: '',
    bedrooms: ''
  });

  const propertyTypes = [
    { value: '', label: 'Any Type', icon: <FaHome /> },
    { value: 'penthouse', label: 'Penthouse', icon: <MdApartment /> },
    { value: 'villa', label: 'Villa', icon: <MdVilla /> },
    { value: 'loft', label: 'Loft', icon: <GiModernCity /> },
    { value: 'mountain', label: 'Mountain Home', icon: <FaMountain /> },
    { value: 'townhouse', label: 'Townhouse', icon: <FaBuilding /> },
    { value: 'condo', label: 'Condo', icon: <FaCity /> },
    { value: 'mansion', label: 'Mansion', icon: <FaBuilding /> },
    { value: 'island', label: 'Island Villa', icon: <FaWater /> }
  ];

  const handleSearch = () => {
    if (onSearch) onSearch(search);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Property</h2>
        <p className="text-gray-600">Search through our exclusive luxury collection</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative group">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="City, Neighborhood or ZIP"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
            value={search.location}
            onChange={(e) => setSearch({...search, location: e.target.value})}
          />
        </div>
        
        <div className="relative group">
          <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-600 transition-colors" />
          <select
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none text-gray-900"
            value={search.type}
            onChange={(e) => setSearch({...search, type: e.target.value})}
          >
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative group">
          <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-600 transition-colors" />
          <select
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none text-gray-900"
            value={search.price}
            onChange={(e) => setSearch({...search, price: e.target.value})}
          >
            <option value="">Any Price</option>
            <option value="0-1000000">Up to $1M</option>
            <option value="1000000-3000000">$1M - $3M</option>
            <option value="3000000-5000000">$3M - $5M</option>
            <option value="5000000+">$5M+</option>
          </select>
        </div>
        
        <ColorfulButton
          variant="primary"
          className="w-full h-full flex items-center justify-center text-lg"
          onClick={handleSearch}
        >
          <FaSearch className="mr-3" />
          Search Properties
        </ColorfulButton>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="text-gray-500 text-sm">Popular:</span>
        {['Beachfront', 'City Center', 'Mountain View', 'Penthouse', 'Gated Community'].map((tag, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            onClick={() => setSearch({...search, location: tag})}
          >
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
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

// Updated Contact Form Component with Email Sending
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_name: 'United Realty Team',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email
        },
        'YOUR_PUBLIC_KEY'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Also send confirmation to user
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_CONFIRMATION_TEMPLATE_ID',
          {
            to_name: formData.name,
            to_email: formData.email,
          },
          'YOUR_PUBLIC_KEY'
        );
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-orange-500 rounded-xl shadow">
          <FaPaperPlane className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Send Message</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all hover:bg-white"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all hover:bg-white"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all hover:bg-white"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="relative">
          <FaComment className="absolute left-4 top-6 text-gray-400" />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full pl-12 pr-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all hover:bg-white resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded-xl">
            Message sent successfully! We'll contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 text-red-700 rounded-xl">
            Failed to send message. Please try again or call us directly.
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow hover:bg-orange-600 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Message
                <FaPaperPlane className="w-5 h-5" />
              </span>
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

// Property Category Tabs Component
const PropertyCategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {propertyCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

// Main App Component
const ModernRealEstateWebsite = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openIndex, setOpenIndex] = useState(null);

  // Filter properties based on active category
  const filteredProperties = propertiesData.filter(property => 
    activeCategory === 'all' || property.category === activeCategory
  );

  const displayedProperties = showAllProperties 
    ? filteredProperties 
    : filteredProperties.slice(0, 6);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll to sections
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ['home', 'properties', 'services', 'about', 'contact', 'investment', 'agents'].includes(hash)) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserProfileOpen(false);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  United Realty
                </div>
                <div className="text-xs text-gray-500 -mt-1">Premium Properties</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'properties', label: 'Properties' },
                { id: 'services', label: 'Services' },
                { id: 'investment', label: 'Investment' },
                { id: 'agents', label: 'Agents' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              ))}
              
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setUserProfileOpen(!userProfileOpen)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaUser className="text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-700">John Doe</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleSignIn}
                    className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Sign In
                  </button>
                  <ColorfulButton variant="primary" onClick={handleSignUp}>
                    Get Started
                  </ColorfulButton>
                </div>
              )}
            </div>
            
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-100"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
             No 1. Luxury Real Estate Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Discover </span>
              <span className="text-orange-500">
                Extraordinary Living
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Where dreams meet reality. Explore our curated collection of the world's most exclusive properties.
            </p>
          </motion.div>
          
          <SearchBar />
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '500+', label: 'Luxury Properties', color: 'bg-blue-500' },
              { value: '$2.5B+', label: 'Total Value Sold', color: 'bg-green-500' },
              { value: '50+', label: 'Countries Served', color: 'bg-purple-500' },
              { value: '98%', label: 'Client Satisfaction', color: 'bg-orange-500' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-20 h-20 rounded-2xl ${stat.color} p-0.5 mx-auto mb-4`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <div className={`text-2xl font-bold ${stat.color.replace('bg-', 'text-')}`}>
                      {stat.value}
                    </div>
                  </div>
                </div>
                <div className="font-medium text-gray-700">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties with Categories */}
      <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
                <FaStar className="mr-2" /> Featured Collection
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Exclusive <span className="text-orange-500">
                  Properties
                </span>
              </h2>
              <p className="text-gray-600 mt-3">Handpicked luxury homes for discerning buyers</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-6 lg:mt-0">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow-md' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-1 w-6 h-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`${viewMode === 'grid' ? 'bg-orange-500' : 'bg-gray-400'} rounded`}></div>
                    ))}
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-md' : ''}`}
                >
                  <div className="space-y-1 w-6 h-6">
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
                  </div>
                </button>
              </div>
              
              <ColorfulButton variant="secondary" onClick={() => setShowAllProperties(true)}>
                View All Properties
              </ColorfulButton>
            </div>
          </div>
          
          {/* Property Category Tabs */}
          <PropertyCategoryTabs 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Properties Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {displayedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                layout={viewMode}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <ColorfulButton
              variant="primary"
              size="large"
              className="px-12"
              onClick={() => setShowAllProperties(!showAllProperties)}
            >
              {showAllProperties ? 'Show Less' : 'Load More Properties'}
            </ColorfulButton>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 lg:p-10 text-white"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500 rounded-xl shadow">
                  <FaComment className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Contact Information</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <FaPhone className="w-6 h-6" />,
                    title: "Phone Number",
                    details: "(802) 555-1234",
                    description: "Available Monday-Friday, 9am-6pm"
                  },
                  {
                    icon: <FaEnvelope className="w-6 h-6" />,
                    title: "Email Address",
                    details: "info@luxeliving.com",
                    description: "We'll respond within 24 hours"
                  },
                  {
                    icon: <FaMapMarkerAlt className="w-6 h-6" />,
                    title: "Office Location",
                    details: "59 South Main St., New York, NY 10001",
                    description: "Visit us at our headquarters"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-orange-500">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="font-bold text-xl mb-1">{item.details}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
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
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'pb-5' : 'max-h-0'}`}
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

          <div className="mt-12 p-6 bg-orange-500 rounded-2xl shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold">Still have questions?</h3>
                <p className="mt-2 text-orange-100">
                  Can't find the answer you're looking for? Please contact our support team.
                </p>
              </div>
              <button 
                onClick={() => setActiveSection('contact')}
                className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">U</span>
                </div>
                <div>
                  <div className="text-3xl font-bold">United Realty</div>
                  <div className="text-gray-400">Premium Properties Worldwide</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Transforming luxury real estate experiences with innovation, expertise, and unparalleled service since 2015.
              </p>
              <div>
                <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
                <p className="text-gray-400 mb-6">
                  Follow us on social media for the latest luxury listings and market updates.
                </p>
                <div className="flex space-x-4">
                  {[FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
                    <button 
                      key={index}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {['Quick Links', 'Properties', 'Services', 'Legal'].map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">{category}</h3>
                <ul className="space-y-3">
                  {['About Us', 'Contact', 'Careers', 'Blog'].map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© United Realty. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernRealEstateWebsite;