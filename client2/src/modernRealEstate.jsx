import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch, FaMapMarkerAlt, FaHome, FaDollarSign, FaBed, FaBath, FaRulerCombined,
  FaHeart, FaShare, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram,
  FaLinkedin, FaYoutube, FaArrowRight, FaArrowLeft, FaStar, FaChevronDown, FaChevronUp,
  FaFilter, FaTimes, FaUser, FaCalendar, FaClock, FaPaperPlane, FaCheck,
  FaEye, FaComment, FaThumbsUp, FaChartLine, FaShieldAlt, FaHandshake, FaBuilding,
  FaCity, FaMountain, FaWater, FaTree, FaChevronRight, FaLock, FaGoogle, FaApple,
  FaSignOutAlt, FaUserCircle, FaCog, FaBell, FaBookmark, FaHistory
} from 'react-icons/fa';
import { MdPool, MdLocalParking, MdFitnessCenter, MdSecurity, MdApartment, MdVilla } from 'react-icons/md';
import { GiFlowerPot, GiModernCity } from 'react-icons/gi';

import { Phone, Mail, Home, MessageSquare, Send, User } from 'lucide-react';

const propertiesData = [
  {
    id: 1,
    title: "Sky Garden Penthouse",
    description: "Luxurious penthouse with private rooftop garden and panoramic city views.",
    price: 3200000,
    location: "Downtown Dubai",
    type: "Penthouse",
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

// ==================== COMPONENTS ====================

// Button Component
const ColorfulButton = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:scale-105',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    glass: 'bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30'
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

// Property Card Component
const PropertyCard = ({ property, layout = 'grid', onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShare, setShowShare] = useState(false);
  
  const statusColors = {
    'New': 'bg-gradient-to-r from-green-500 to-emerald-600',
    'Hot': 'bg-gradient-to-r from-red-500 to-pink-600',
    'Featured': 'bg-gradient-to-r from-purple-500 to-indigo-600'
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
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${layout === 'list' ? 'flex' : ''}`}
    >
      <div className={`relative ${layout === 'list' ? 'w-1/3' : ''}`}>
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${statusColors[property.status]}`}>
            {property.status}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {property.rating} ({property.reviews})
          </span>
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
          </button>
          <button 
            onClick={handleShare}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
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
              className="absolute top-20 right-4 bg-white rounded-xl shadow-xl p-4 z-10"
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
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                <FaBed className="text-cyan-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{property.bedrooms}</div>
                <div className="text-sm text-gray-500">Beds</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <FaBath className="text-pink-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{property.bathrooms}</div>
                <div className="text-sm text-gray500">Baths</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
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
              <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm">
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

// Review Section Component
const ReviewSection = ({ propertyId }) => {
  const [reviews, setReviews] = useState(propertyReviews.filter(r => r.propertyId === propertyId));
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    userName: ''
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      propertyId,
      userName: newReview.userName || 'Anonymous',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '', userName: '' });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaComment className="text-purple-600" />
        Property Reviews ({reviews.length})
      </h3>
      
      <form onSubmit={handleSubmitReview} className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
        <h4 className="font-bold text-gray-900 mb-4">Add Your Review</h4>
        <div className="flex items-center mb-4">
          <span className="mr-4">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setNewReview({...newReview, rating: star})}
              className="text-2xl mr-1"
            >
              {star <= newReview.rating ? '★' : '☆'}
            </button>
          ))}
          <span className="ml-2 text-gray-700">{newReview.rating}/5</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-3"
            value={newReview.userName}
            onChange={(e) => setNewReview({...newReview, userName: e.target.value})}
          />
          <textarea
            placeholder="Share your experience..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            rows="3"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
        >
          Submit Review
        </button>
      </form>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <img src={review.userAvatar} alt={review.userName} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h5 className="font-bold text-gray-900">{review.userName}</h5>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center text-gray-500 hover:text-purple-600">
                <FaThumbsUp className="mr-2" />
                Helpful ({review.helpful})
              </button>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState({
    location: '',
    price: '',
    type: '',
    bedrooms: ''
  });

  const propertyTypes = [
    { value: '', label: 'Any Type', icon: '🏠' },
    { value: 'penthouse', label: 'Penthouse', icon: '🏙️' },
    { value: 'villa', label: 'Villa', icon: '🏡' },
    { value: 'loft', label: 'Loft', icon: '🏭' },
    { value: 'mountain', label: 'Mountain Home', icon: '⛰️' },
    { value: 'townhouse', label: 'Townhouse', icon: '🏘️' },
    { value: 'condo', label: 'Condo', icon: '🏢' },
    { value: 'mansion', label: 'Mansion', icon: '🏛️' },
    { value: 'island', label: 'Island Villa', icon: '🏝️' }
  ];

  const handleSearch = () => {
    if (onSearch) onSearch(search);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white/90 via-white/95 to-white backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Property</h2>
        <p className="text-gray-600">Search through our exclusive luxury collection</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative group">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-600 transition-colors" />
          <input
            type="text"
            placeholder="City, Neighborhood or ZIP"
            className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-500"
            value={search.location}
            onChange={(e) => setSearch({...search, location: e.target.value})}
          />
        </div>
        
        <div className="relative group">
          <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-pink-600 transition-colors" />
          <select
            className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-500/30 focus:border-pink-500 transition-all appearance-none text-gray-900"
            value={search.type}
            onChange={(e) => setSearch({...search, type: e.target.value})}
          >
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative group">
          <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-600 transition-colors" />
          <select
            className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all appearance-none text-gray-900"
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
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-100 hover:to-pink-100 transition-all"
            onClick={() => setSearch({...search, location: tag})}
          >
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl ${isActive ? 'border-2 border-purple-500' : 'border border-gray-200'}`}
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
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
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium">
            Completed
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Sign In/Up Modal Component
const AuthModal = ({ isOpen, onClose, mode: initialMode = 'signin' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Here you would typically make an API call
    console.log(`${mode} attempt:`, formData);
    alert(`${mode === 'signin' ? 'Sign In' : 'Sign Up'} successful!`);
    onClose();
  };

  const socialButtons = [
    { icon: <FaGoogle />, label: 'Google', color: 'from-red-500 to-orange-500' },
    { icon: <FaApple />, label: 'Apple', color: 'from-gray-800 to-gray-900' },
    { icon: <FaFacebook />, label: 'Facebook', color: 'from-blue-600 to-blue-700' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <FaTimes />
                </button>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">L</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {mode === 'signin' ? 'Welcome Back' : 'Join LuxeLiving'}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {mode === 'signin' ? 'Sign in to your account' : 'Create your free account'}
                  </p>
                </div>

                <div className="flex gap-2 mb-6">
                  {socialButtons.map((social, idx) => (
                    <button
                      key={idx}
                      className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${social.color} text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all`}
                    >
                      {social.icon}
                      {social.label}
                    </button>
                  ))}
                </div>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required={mode === 'signup'}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="John Doe"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  {mode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="••••••••"
                    />
                  </div>

                  {mode === 'signup' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                      <input
                        type="password"
                        required={mode === 'signup'}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="••••••••"
                      />
                    </div>
                  )}

                  {mode === 'signin' && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-700">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                      className="ml-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// User Profile Dropdown
const UserProfileDropdown = ({ isOpen, onClose, onSignOut }) => {
  const menuItems = [
    { icon: <FaUserCircle />, label: 'My Profile', href: '#' },
    { icon: <FaBookmark />, label: 'Saved Properties', href: '#' },
    { icon: <FaHistory />, label: 'Viewing History', href: '#' },
    { icon: <FaBell />, label: 'Notifications', href: '#' },
    { icon: <FaCog />, label: 'Settings', href: '#' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-bold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="py-2">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  onClick={onClose}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </a>
              ))}
              
              <button
                onClick={onSignOut}
                className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 mt-2"
              >
                <FaSignOutAlt className="mr-3" />
                Sign Out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Property Detail Modal
const PropertyDetailModal = ({ property, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showContactForm, setShowContactForm] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaEye /> },
    { id: 'features', label: 'Features', icon: <FaStar /> },
    { id: 'amenities', label: 'Amenities', icon: <MdPool /> },
    { id: 'reviews', label: 'Reviews', icon: <FaComment /> },
    { id: 'location', label: 'Location', icon: <FaMapMarkerAlt /> }
  ];

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-96 object-cover" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaTimes />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 rounded-full text-white text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600">
                    {property.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h2>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaMapMarkerAlt className="mr-2" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`${i < property.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-2 text-gray-700">{property.rating} ({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      ${property.price.toLocaleString()}
                    </div>
                    <div className="text-gray-600">{property.type}</div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 mb-8">
                  <div className="flex space-x-8">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center py-3 px-1 font-medium text-lg border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? 'border-purple-600 text-purple-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  {activeTab === 'overview' && (
                    <div>
                      <p className="text-gray-700 text-lg mb-6">{property.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6">
                          <div className="text-3xl font-bold text-cyan-700 mb-2">{property.bedrooms}</div>
                          <div className="text-gray-600">Bedrooms</div>
                        </div>
                        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                          <div className="text-3xl font-bold text-pink-700 mb-2">{property.bathrooms}</div>
                          <div className="text-gray-600">Bathrooms</div>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                          <div className="text-3xl font-bold text-green-700 mb-2">{property.area.toLocaleString()}</div>
                          <div className="text-gray-600">Square Feet</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'features' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                          <FaCheck className="text-purple-600 mr-3" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'amenities' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {property.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                          <span className="mr-3 text-blue-600">✓</span>
                          <span className="font-medium">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'reviews' && <ReviewSection propertyId={property.id} />}
                  
                  {activeTab === 'location' && (
                    <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
                        <p className="text-xl font-bold text-gray-900">{property.location}</p>
                        <p className="text-gray-600">Coordinates: {property.coordinates.lat}, {property.coordinates.lng}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={property.agent.avatar} alt={property.agent.name} className="w-16 h-16 rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{property.agent.name}</h4>
                        <p className="text-gray-600">LuxeLiving Agent</p>
                        <div className="flex gap-3 mt-2">
                          <a href={`tel:${property.agent.phone}`} className="text-sm text-purple-600 hover:text-purple-700">
                            <FaPhone className="inline mr-1" /> Call
                          </a>
                          <a href={`mailto:${property.agent.email}`} className="text-sm text-purple-600 hover:text-purple-700">
                            <FaEnvelope className="inline mr-1" /> Email
                          </a>
                          <a href={`https://wa.me/${property.agent.phone.replace(/\D/g, '')}`} className="text-sm text-purple-600 hover:text-purple-700">
                            <FaWhatsapp className="inline mr-1" /> WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowContactForm(true)}
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                      >
                        Schedule Viewing
                      </button>
                      <button
                        onClick={() => alert('Property saved to favorites!')}
                        className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors"
                      >
                        Save Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Investment Calculator Component
const InvestmentCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [rentalIncome, setRentalIncome] = useState(5000);

  const calculateMonthlyPayment = () => {
    const loanAmount = propertyValue * (100 - downPayment) / 100;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  const calculateROI = () => {
    const annualIncome = rentalIncome * 12;
    const investment = propertyValue * downPayment / 100;
    const roi = ((annualIncome - (parseFloat(calculateMonthlyPayment()) * 12)) / investment * 100).toFixed(2);
    return roi;
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Calculator</h3>
      <p className="text-gray-600 mb-8">Calculate your potential returns</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Value: ${propertyValue.toLocaleString()}
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="10000"
            value={propertyValue}
            onChange={(e) => setPropertyValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment: {downPayment}%
            </label>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={downPayment}
              onChange={(e) => setDownPayment(parseInt(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min="2"
              max="10"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term: {loanTerm} years
            </label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Rental Income: ${rentalIncome}
            </label>
            <input
              type="range"
              min="1000"
              max="20000"
              step="100"
              value={rentalIncome}
              onChange={(e) => setRentalIncome(parseInt(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-700 mb-2">${calculateMonthlyPayment()}</div>
            <div className="text-gray-600">Monthly Payment</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">{calculateROI()}%</div>
            <div className="text-gray-600">Annual ROI</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">${(rentalIncome - parseFloat(calculateMonthlyPayment())).toFixed(2)}</div>
            <div className="text-gray-600">Monthly Cash Flow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN APP ====================

const ModernRealEstateWebsite = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
    setShowContactModal(false);
  };

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
    alert('You have been signed out successfully!');
  };

  const propertyFilters = [
    { id: 'all', label: 'All Properties', color: 'from-purple-500 to-pink-500' },
    { id: 'penthouse', label: 'Penthouses', color: 'from-blue-500 to-cyan-500' },
    { id: 'villa', label: 'Villas', color: 'from-green-500 to-emerald-500' },
    { id: 'featured', label: 'Featured', color: 'from-orange-500 to-red-500' },
    { id: 'new', label: 'New Listings', color: 'from-indigo-500 to-purple-500' },
    { id: 'hot', label: 'Hot Deals', color: 'from-red-500 to-pink-500' }
  ];

  const filteredProperties = showAllProperties 
    ? propertiesData 
    : propertiesData.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  LuxeLiving
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
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
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
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium text-gray-700">John Doe</span>
                  </button>
                  <UserProfileDropdown
                    isOpen={userProfileOpen}
                    onClose={() => setUserProfileOpen(false)}
                    onSignOut={handleSignOut}
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleSignIn}
                    className="font-medium text-gray-700 hover:text-purple-600 transition-colors"
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
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 font-medium mb-6">
              🏆 #1 Luxury Real Estate Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Discover </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
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
              { value: '500+', label: 'Luxury Properties', color: 'from-purple-500 to-pink-500' },
              { value: '$2.5B+', label: 'Total Value Sold', color: 'from-green-500 to-emerald-500' },
              { value: '50+', label: 'Countries Served', color: 'from-blue-500 to-cyan-500' },
              { value: '98%', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mx-auto mb-4`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <div className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
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

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 font-medium mb-4">
                ✨ Featured Collection
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Exclusive <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                      <div key={i} className={`${viewMode === 'grid' ? 'bg-purple-600' : 'bg-gray-400'} rounded`}></div>
                    ))}
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-md' : ''}`}
                >
                  <div className="space-y-1 w-6 h-6">
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-pink-600' : 'bg-gray-400'}`}></div>
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-pink-600' : 'bg-gray-400'}`}></div>
                    <div className={`h-2 rounded-full ${viewMode === 'list' ? 'bg-pink-600' : 'bg-gray-400'}`}></div>
                  </div>
                </button>
              </div>
              
              <ColorfulButton variant="secondary" onClick={() => setShowAllProperties(true)}>
                View All Properties
              </ColorfulButton>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {propertyFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Properties Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredProperties.map((property) => (
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

      {/* Investment Section */}
      <section id="investment" className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white font-medium mb-6">
                📈 Smart Investing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Maximize Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Real Estate Returns
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Use our advanced investment calculator to analyze potential returns, cash flow, and ROI on any property.
                Make data-driven decisions with confidence.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '💰', title: 'Accurate ROI Projections', desc: 'Calculate precise returns based on market data' },
                  { icon: '📊', title: 'Cash Flow Analysis', desc: 'Understand your monthly income vs expenses' },
                  { icon: '🏦', title: 'Mortgage Calculations', desc: 'Compare different financing options' },
                  { icon: '📈', title: 'Market Trends', desc: 'Access historical data and future projections' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <InvestmentCalculator />
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 font-medium mb-6">
              👥 Meet Our Experts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Elite Agents
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Work with the industry's top professionals who understand luxury real estate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertiesData.slice(0, 4).map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 mx-auto mb-6">
                  <img src={property.agent.avatar} alt={property.agent.name} className="w-full h-full rounded-full object-cover border-4 border-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.agent.name}</h3>
                <p className="text-gray-600 mb-4">Senior Property Consultant</p>
                <div className="flex items-center justify-center mb-6">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 font-bold text-gray-900">{property.rating}/5</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600">{property.reviews} deals</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-gray-600">
                    <FaPhone className="mr-2" />
                    {property.agent.phone}
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <FaEnvelope className="mr-2" />
                    {property.agent.email}
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-xl font-bold hover:from-purple-100 hover:to-pink-100 transition-all">
                  Contact Agent
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white font-medium mb-6">
              💫 Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Global Elite
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              See why top investors and homeowners choose LuxeLiving for their property needs
            </p>
          </div>
          
          <div className="relative h-[400px]">
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  idx === activeTestimonial ? 'z-20' : 'z-10'
                }`}
                style={{
                  transform: `translateX(${(idx - activeTestimonial) * 100}%)`
                }}
              >
                <div className="max-w-4xl mx-auto">
                  <TestimonialCard testimonial={testimonial} isActive={idx === activeTestimonial} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium mb-6">
              🚀 Premium Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Beyond <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Real Estate
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Comprehensive solutions for every step of your property journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Property Search',
                description: 'AI-powered matching with exclusive off-market listings',
                color: 'from-purple-500 to-pink-500',
                features: ['AI Matching', 'Off-Market Access', 'Virtual Tours']
              },
              {
                icon: '💰',
                title: 'Investment Analysis',
                description: 'Data-driven insights and ROI projections',
                color: 'from-blue-500 to-cyan-500',
                features: ['ROI Analysis', 'Market Trends', 'Risk Assessment']
              },
              {
                icon: '⚖️',
                title: 'Legal & Compliance',
                description: 'Full legal support and regulatory compliance',
                color: 'from-green-500 to-emerald-500',
                features: ['Legal Support', 'Compliance', 'Documentation']
              },
              {
                icon: '🎯',
                title: 'Wealth Management',
                description: 'Portfolio optimization and asset management',
                color: 'from-orange-500 to-red-500',
                features: ['Portfolio Management', 'Tax Planning', 'Asset Protection']
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-3xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center">
                  Learn More
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            ))}
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
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg">
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
                gradient: "from-blue-500 to-blue-400"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Address",
                details: "info@vermontliferealtors.com",
                description: "We'll respond within 24 hours",
                gradient: "from-cyan-500 to-teal-400"
              },
              {
                icon: <Home className="w-6 h-6" />,
                title: "Office Location",
                details: "59 South Main St., Stowe, VT 05676",
                description: "Visit us at our headquarters",
                gradient: "from-purple-500 to-pink-400"
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

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <p className="text-gray-300 mb-4">Follow us on social media</p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social, idx) => (
                <motion.a
                  key={social}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm font-medium">{social}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
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
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl shadow-lg">
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
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </form>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-gray-100"
          >
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Secure Form</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>

      {/* Footer */}
      <footer id="about" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">L</span>
                </div>
                <div>
                  <div className="text-3xl font-bold">LuxeLiving</div>
                  <div className="text-gray-400">Premium Properties Worldwide</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Transforming luxury real estate experiences with innovation, expertise, and unparalleled service since 2015.
              </p>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
            
            {['Quick Links', 'Properties', 'Services', 'Legal'].map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">{category}</h3>
                <ul className="space-y-3">
                  {['About Us', 'Contact', 'Careers', 'Blog'].map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                        <FaArrowRight className="mr-2 opacity-0 hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} LuxeLiving. All rights reserved.</p>
            <p className="mt-2">Luxury real estate services in 50+ countries</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Book a Consultation</h3>
                      <p className="text-gray-600">We'll contact you within 24 hours</p>
                    </div>
                    <button
                      onClick={() => setShowContactModal(false)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  
                  <form onSubmit={handleContactSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="+1 (234) 567-8900"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Tell us about your property requirements..."
                          required
                        />
                      </div>
                      
                      <ColorfulButton
                        type="submit"
                        variant="primary"
                        className="w-full"
                      >
                        <FaPaperPlane className="mr-2" />
                        Send Request
                      </ColorfulButton>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </div>
  );
};

export default ModernRealEstateWebsite;