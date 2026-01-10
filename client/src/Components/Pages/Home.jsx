// src/pages/Home.jsx - Updated Version
import React from 'react';




import FeaturedProperties from '../Sections/FeaturedProperties';
import WhyChooseUs from '../Sections/WhyChooseUs';
import Testimonials from '../Sections/Testimonials';
import Hero from '../Sections/Hero';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
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
    </div>
  );
};

export default Home;