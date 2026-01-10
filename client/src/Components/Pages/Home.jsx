// src/pages/Home.jsx - Updated Version





import FeaturedProperties from '../Sections/FeaturedProperties';
import WhyChooseUs from '../Sections/WhyChooseUs';
import Testimonials from '../Sections/Testimonials';
import Hero from '../Sections/Hero';
import Contact from './Contact';
import { FaArrowLeft, FaArrowRight, FaCheck, FaComment, FaFacebook, FaInstagram, FaLinkedinIn, FaPlay, FaStar, FaTwitter, FaUser } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, MapPin, Bed, Bath, Square, Star, 
  Users, Shield, Award, ChevronRight, 
  Play, Check, Menu, X, Phone, Mail, Calendar,
  Maximize2, Heart, Share2, TrendingUp, DollarSign,
  MessageSquare,
  Send,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
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
    <div>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
     
      <Contact/>
      
      {/* CTA Section */}

<section className="py-20 bg-gradient-to-r from-dark-900 to-dark-800 relative overflow-hidden">
  <div className="absolute inset-0 bg-black "></div>
  <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
      Start Your Real Estate Journey Today
    </h2>
    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
      Join thousands of satisfied clients who found their dream home with PremiumEstate
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button className="px-10 py-5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg">
        Browse Properties
      </button>
      <button className="px-10 py-5 bg-white text-dark-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 border-2 border-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg">
        Get Free Valuation
      </button>
    </div>
   
  </div>
  

  <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
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
    </div>
  );
};

export default Home;