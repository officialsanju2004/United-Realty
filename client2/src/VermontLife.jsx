import React, { useState, useEffect,useRef } from "react";
import {
  Search,
  Home,
  Map,
  Users,
  FileText,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Heart,
  ArrowRight,
  X,
  User,
  Lock,
} from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { motion } from 'framer-motion';
import {  MessageSquare, Send } from 'lucide-react';

// or if using react-icons:
// import { FaPhone, FaEnvelope, FaHome, FaComment, FaPaperPlane, FaUser } from 'react-icons/fa';
const VermontLife = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [activePage, setActivePage] = useState("home");
const sectionRef = useRef(null);
const goToSection=()=>{
  sectionRef.current.scrollIntoView({behavior:"smooth"});
}
  // Navbar pages data
  const pages = {
    home: {
      title: "Home",
      content: (
        <div className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Home</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Vermont Life Realtors is your gateway to finding the perfect home in Vermont's most beautiful communities.
            Browse our featured properties and discover why so many families choose Vermont for their forever home.
          </p>
        </div>
      )
    },
    search: {
      title: "Home Search",
      content: (
        <div className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Find Your Dream Home</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <input type="text" placeholder="Location" className="px-4 py-3 border rounded-lg" />
              <input type="number" placeholder="Min Price" className="px-4 py-3 border rounded-lg" />
              <input type="number" placeholder="Max Price" className="px-4 py-3 border rounded-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input type="number" placeholder="Bedrooms" className="px-4 py-3 border rounded-lg" />
              <input type="number" placeholder="Bathrooms" className="px-4 py-3 border rounded-lg" />
              <input type="text" placeholder="Property Type" className="px-4 py-3 border rounded-lg" />
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      )
    },
    valuation: {
      title: "Market Valuation",
      content: (
        <div className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Property Valuation</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-6">Get an instant estimate of your property's value</p>
            <input type="text" placeholder="Enter your property address" className="w-full px-4 py-3 border rounded-lg mb-4" />
            <input type="email" placeholder="Your email" className="w-full px-4 py-3 border rounded-lg mb-6" />
            <button className="w-full bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800">
              Get Free Valuation
            </button>
          </div>
        </div>
      )
    },
    report: {
      title: "Market Report",
      content: (
        <div className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Vermont Real Estate Market Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Q4 2023 Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Average home price: $350,000</li>
                <li>• Year-over-year growth: 8.2%</li>
                <li>• Days on market: 45</li>
                <li>• Inventory levels: 2.1 months</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">2024 Forecast</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Expected growth: 5-7%</li>
                <li>• New construction up 12%</li>
                <li>• Luxury market remains strong</li>
                <li>• Rental demand increasing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
   

     
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const featuredInterval = setInterval(() => {
      setCurrentFeaturedIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(featuredProperties.length / 1)
      );
    }, 6000);

    return () => clearInterval(featuredInterval);
  }, []);

  useEffect(() => {
    const communityInterval = setInterval(() => {
      setCurrentCommunityIndex(
        (prevIndex) => (prevIndex + 1) % communities.length
      );
    }, 8000);

    return () => clearInterval(communityInterval);
  }, []);

  const nextFeatured = () => {
    setCurrentFeaturedIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(featuredProperties.length / 1)
    );
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(featuredProperties.length / 1)) %
        Math.ceil(featuredProperties.length / 1)
    );
  };

  const nextCommunity = () => {
    setCurrentCommunityIndex(
      (prevIndex) => (prevIndex + 1) % communities.length
    );
  };

  const prevCommunity = () => {
    setCurrentCommunityIndex(
      (prevIndex) => (prevIndex - 1 + communities.length) % communities.length
    );
  };

  const backgroundImages = [
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const featuredProperties = [
    {
      id: 1,
      address: "177 Kingsland Hollow Road, Fle...",
      price: "$599,000",
      beds: 3,
      baths: 3,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      address: "47 Hollow View Road, Stowe, V...",
      price: "$1,175,000",
      beds: 3,
      baths: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      address: "30 Moonlight Drive, Barre Tow...",
      price: "$310,000",
      beds: 4,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    },
  ];

  const communities = [
    {
      name: "STOWE",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "WATERBURY",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "MORRISTOWN",
      image:
        "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    },
  ];

  const features = [
    {
      title: "QUICK RESPONSE TEAM",
      description:
        "Fast communication and instant assistance whenever you need it.",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: "EXPERT GUIDANCE",
      description: "Professional support from site visits to final paperwork.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "TRANSPARENT PRICING",
      description: "No hidden charges, no surprises.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "EXCLUSIVE DEALS",
      description: "Access to special discounts and limited-time offers.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "HIGH ROI PROPERTIES",
      description:
        "Get access to high-yield investment opportunities in emerging hotspots.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "ALL PROPERTY TYPES",
      description:
        "From residential to commercial, plots to luxury villas — everything under one roof.",
      icon: <Home className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      text: "My review of Craig comes from a different perspective. I am a professional photographer and have worked on number of real estate photo shoots for properties he has represented. I have witnessed the professionalism first hand of how Craig works with the clients he is representing.",
      author: "Jesse Schloff",
    },
    {
      text: "It was a pleasure to work with Vermont Life Realtors in finding our new home in Stowe, Vermont. The process of finding a home and buying is always a challenging one, but Vermont Life Realtors made it fun and enjoyable by really understanding our needs, being extremely professional and highly responsive.",
      author: "Arun Padmanabhan",
    },
    {
      text: "It was a pleasure to work with Vermont Life Realtors in finding our new home in Stowe, Vermont. The process of finding a home and buying is always a challenging one, but Vermont Life Realtors made it fun and enjoyable by really understanding our needs, being extremely professional and highly responsive.",
      author: "Michal Shekhspear",
    },
    {
      text: "It was a pleasure to work with Vermont Life Realtors in finding our new home in Stowe, Vermont. The process of finding a home and buying is always a challenging one, but Vermont Life Realtors made it fun and enjoyable by really understanding our needs, being extremely professional and highly responsive.",
      author: "Joe Biden",
    },
  ];

  // Review Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Exceptional service! Found our dream home in just 3 weeks.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      property: "4 Bedroom House in Stowe",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      comment: "Professional team, transparent process. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      property: "Investment Property",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great experience from start to finish. Very responsive.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      property: "Cabin in Waterbury",
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 5,
      date: "2 months ago",
      comment: "Made our first home purchase stress-free and enjoyable.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      property: "First Home in Montpelier",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Sign In/Up Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {isSignUp ? "Create Account" : "Sign In"}
              </h2>
              <button
                onClick={() => setShowSignInModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
                {isSignUp ? "Create Account" : "Sign In"}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button className="w-full border border-gray-300 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <p className="text-center text-gray-600 mt-4">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage("home")}>
            <h1 className="text-2xl font-bold text-pink-800">Vermont Life</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setActivePage("search")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-green-700"
                  : "text-white hover:text-green-200"
              } ${activePage === "search" ? "text-green-700 font-semibold" : ""}`}
            >
              HOME SEARCH
            </button>
            <button
              onClick={() => setActivePage("valuation")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-green-700"
                  : "text-white hover:text-green-200"
              } ${activePage === "valuation" ? "text-green-700 font-semibold" : ""}`}
            >
              MARKET VALUATION
            </button>
            <button
              onClick={() => setActivePage("report")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-green-700"
                  : "text-white hover:text-green-200"
              } ${activePage === "report" ? "text-green-700 font-semibold" : ""}`}
            >
              MARKET REPORT
            </button>
            <button
              onClick={goToSection}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-green-700"
                  : "text-white hover:text-green-200"
              } ${activePage === "contact" ? "text-green-700 font-semibold" : ""}`}
            >
              CONTACT US
            </button>
          </div>
          <button
            onClick={() => setShowSignInModal(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-white text-green-700 hover:bg-gray-100"
            }`}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section - Only show on home page */}
      {activePage === "home" && (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-green-700">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
            }}
          ></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Find Your Vermont Life
            </h1>
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
              Stunning properties, smart investments, and ultimate dream locations are calling.
            </p>
            <div className="bg-white p-2 rounded-lg shadow-xl max-w-2xl mx-auto flex animate-slide-up">
              <input
                type="text"
                placeholder="City, Postal Code, Address, or Listing ID"
                className="flex-grow px-4 py-3 outline-none text-gray-700"
              />
              <button className="bg-green-700 text-white px-6 py-3 rounded-md flex items-center hover:bg-green-800 transition-colors">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 animate-bounce">
            <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
          </div>
        </section>
      )}

      {/* Active Page Content */}
      {activePage !== "home" && (
        <section className="pt-24 pb-16">
          <div className="container mx-auto">
            {pages[activePage].content}
          </div>
        </section>
      )}

      {/* Main Content - Only show on home page */}
      {activePage === "home" && (
        <>
          {/* Featured Properties */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                FEATURED PROPERTIES
              </h2>

              <div className="relative">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredProperties.map((property, index) => (
                    <div
                      key={property.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="h-56 overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.address}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {property.address}
                        </h3>
                        <p className="text-2xl font-bold text-green-700 mb-4">
                          {property.price}
                        </p>
                        <div className="flex justify-between text-gray-600">
                          <span className="flex items-center">
                            🛏 {property.beds} beds
                          </span>
                          <span className="flex items-center">
                            🚿 {property.baths} baths
                          </span>
                        </div>
                        <button className="mt-6 w-full bg-green-100 text-green-700 py-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentFeaturedIndex * 100}%)`,
                    }}
                  >
                    {featuredProperties.map((property, index) => (
                      <div key={property.id} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                          <div className="h-56 overflow-hidden">
                            <img
                              src={property.image}
                              alt={property.address}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {property.address}
                            </h3>
                            <p className="text-2xl font-bold text-green-700 mb-4">
                              {property.price}
                            </p>
                            <div className="flex justify-between text-gray-600">
                              <span className="flex items-center">
                                🛏 {property.beds} beds
                              </span>
                              <span className="flex items-center">
                                🚿 {property.baths} baths
                              </span>
                            </div>
                            <button className="mt-6 w-full bg-green-100 text-green-700 py-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={prevFeatured}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextFeatured}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center mt-6">
                    {featuredProperties.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${
                          index === currentFeaturedIndex
                            ? "bg-green-700"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentFeaturedIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Discover Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  DISCOVER UPGRADE YOUR LIFE
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choosing the right community to live in is an equally important factor in your buying decision and whether it suits you, your family, lifestyle, and your dreams.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                EXPLORE THE COMMUNITIES
              </h3>

              <div className="relative">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {communities.map((community, index) => (
                    <div
                      key={index}
                      className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full bg-white text-green-700 py-2 rounded font-medium flex items-center justify-center">
                          Explore <span className="ml-2">→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:hidden relative mb-16">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentCommunityIndex * 100}%) `,
                    }}
                  >
                    {communities.map((community, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                          <img
                            src={community.image}
                            alt={community.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h4 className="text-2xl font-bold text-white">
                              {community.name}
                            </h4>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <button className="w-full bg-white text-green-700 py-2 rounded font-medium flex items-center justify-center">
                              Explore <span className="ml-2">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={prevCommunity}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextCommunity}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center mt-6">
                    {communities.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${
                          index === currentCommunityIndex
                            ? "bg-green-700"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentCommunityIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors inline-flex items-center">
                  Explore All Communities <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                WHY CHOOSE US?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-700 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
<div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
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
      ref={sectionRef}
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
          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                TESTIMONIALS
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Hear from our happy clients — real stories of successful deals, smooth experiences, and dream homes turned into reality
              </p>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%) `,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-gray-800">
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full mx-1 ${
                      index === currentTestimonialIndex
                        ? "bg-green-700"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonialIndex(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Review Section */}
          <section className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Customer Reviews
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See what our clients are saying about their experience with Vermont Life Realtors
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < review.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{review.comment}</p>
                    <p className="text-sm text-green-700 font-medium">{review.property}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowSignInModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Write a Review
                </button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-green-800 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">NEWSLETTER SIGN UP</h2>
                <p className="mb-8">
                  Stay updated with our latest properties and market insights
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg text-gray-800 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vermont Life Realtors</h3>
              <p className="text-gray-400">
                Vermont Life Realtors helps you find your dream home in the heart of Vermont. We specialize in cozy homes, scenic properties, and stress-free buying or selling experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {Object.keys(pages).map((pageKey) => (
                  <li key={pageKey}>
                    <button
                      onClick={() => setActivePage(pageKey)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {pages[pageKey].title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p>59 South Main St.</p>
                <p>Stowe, VT 05676</p>
                <p className="mt-2">
                  <a
                    href="mailto:info@vermontliferealtors.com"
                    className="hover:text-white transition-colors"
                  >
                    info@vermontliferealtors.com
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Search Properties</h4>
              <div className="bg-gray-800 p-4 rounded-lg text-white">
                <input
                  type="text"
                  placeholder="Enter Keyword..."
                  className="w-full px-3 py-2 rounded mb-2 border border-white"
                />
                <select className="w-full px-3 py-2 rounded mb-2">
                  <option>All Cities</option>
                </select>
                <div className="grid grid-cols-2 gap-2 text-white">
                  <input
                    type="number"
                    placeholder="Bedrooms"
                    className="px-3 py-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Bathrooms"
                    className="px-3 py-2 rounded"
                  />
                </div>
                <button className="w-full bg-green-700 text-white py-2 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© Vermont Life Realtors - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VermontLife;