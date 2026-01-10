// src/components/sections/FeaturedProperties.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar, FaFire } from 'react-icons/fa';

import Button from '../ui/Button';

import PropertyCard from '../Properties/propertyCard';
import { properties } from '../data/properties';

const FeaturedProperties = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const featuredProperties = properties.slice(0, 6);

  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'villa', label: 'Villas' },
    { id: 'penthouse', label: 'Penthouses' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'luxury', label: 'Luxury Homes' },
  ];

  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(prop => 
        activeFilter === 'luxury' ? prop.price > 2000000 : 
        prop.type.toLowerCase().includes(activeFilter)
      );

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProperties.length));
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(3);
  }, [activeFilter]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-4 py-2 rounded-full mb-6">
            <FaFire className="text-primary-600" />
            <span className="text-primary-600 font-semibold">Featured Listings</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Exclusive <span className="text-transparent bg-clip-text bg-primary-600">Properties</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties, curated by our expert team
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { label: 'Total Value', value: '$250M+', color: 'text-primary-600' },
              { label: 'Avg Days on Market', value: '24 Days', color: 'text-secondary-600' },
              { label: 'Client Rating', value: '4.9/5', color: 'text-yellow-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Property Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary-600/5 to-secondary-500/5 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    HOT DEAL
                  </div>
                  <div className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full flex items-center">
                    <FaStar className="mr-1" /> Premium
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Oceanfront Villa in Malibu
                </h3>
                <p className="text-gray-600 mb-6">
                  Exclusive listing with panoramic ocean views, private beach access, and luxury amenities. 
                  Limited opportunity for discerning buyers.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">$4.2M</div>
                    <div className="text-sm text-gray-500">Asking Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15%</div>
                    <div className="text-sm text-gray-500">Below Market</div>
                  </div>
                </div>
                <Button size="large" className="px-8">
                  View Exclusive Details
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Exclusive Villa"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="text-sm text-gray-600">Investment Potential</div>
                  <div className="text-2xl font-bold text-green-600">+22%</div>
                  <div className="text-xs text-gray-500">5-year projection</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Property Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProperties.slice(0, visibleCount).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProperties.length && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                variant="outline"
                size="large"
                onClick={handleLoadMore}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Load More Properties
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          )}
        </motion.div>


      </div>
    </section>
  );
};

export default FeaturedProperties;