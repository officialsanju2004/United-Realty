// src/components/properties/PropertyCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaShare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const PropertyCard = ({ property, view = 'grid' }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (view === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{property.description}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaBed className="text-primary-600" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBath className="text-primary-600" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRulerCombined className="text-primary-600" />
                  <span>{property.area} sq ft</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</span>
                <Link to={`/property/${property.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{property.title}</h3>
          <div className="flex items-center text-gray-600 mb-3">
            <FaRulerCombined className="mr-2" />
            <span>{property.location}</span>
          </div>
          <p className="text-gray-700 line-clamp-2 mb-4">{property.description}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaBed className="text-primary-600" />
              <span className="text-gray-700">{property.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaBath className="text-primary-600" />
              <span className="text-gray-700">{property.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaRulerCombined className="text-primary-600" />
              <span className="text-gray-700">{property.area} sq ft</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</span>
          <Link to={`/property/${property.id}`}>
            <Button variant="outline" size="small">View Details</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;