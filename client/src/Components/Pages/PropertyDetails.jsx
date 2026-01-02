// src/pages/PropertyDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaCar, FaSwimmingPool, FaWifi, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../ui/Button';


import Modal from '../ui/modal';
import { properties } from '../data/properties';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(property?.images[0] || '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!property) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Property not found</h1>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt={property.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="flex space-x-4 mt-4 overflow-x-auto">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                    selectedImage === img ? 'ring-4 ring-primary-600' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-32">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <FaRulerCombined className="mr-2" />
                <span>{property.location}</span>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-6">
                {formatPrice(property.price)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <FaBed className="text-2xl text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-semibold">{property.bedrooms}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center">
                <FaBath className="text-2xl text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-semibold">{property.bathrooms}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center">
                <FaRulerCombined className="text-2xl text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-semibold">{property.area}</div>
                <div className="text-sm text-gray-600">Sq Ft</div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="large"
                className="w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule a Visit
              </Button>
              <Button
                variant="outline"
                size="large"
                className="w-full"
                onClick={() => window.open(`https://wa.me/${property.agent.phone}`, '_blank')}
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Agent
              </Button>
              <a href={`tel:${property.agent.phone}`} className="block">
                <Button variant="ghost" size="large" className="w-full">
                  <FaPhone className="mr-2" />
                  Call Agent
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {property.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                This stunning property features premium finishes throughout, including hardwood floors, 
                custom cabinetry, and high-end appliances. The open floor plan creates a seamless flow 
                between living spaces, perfect for entertaining.
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      {feature.includes('Pool') && <FaSwimmingPool className="text-primary-600" />}
                      {feature.includes('Parking') && <FaCar className="text-primary-600" />}
                      {!feature.includes('Pool') && !feature.includes('Parking') && 
                       <div className="w-2 h-2 bg-primary-600 rounded-full"></div>}
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual Google Map component */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaRulerCombined className="text-primary-600 text-2xl" />
                    </div>
                    <p className="text-gray-700">Interactive Map</p>
                    <p className="text-sm text-gray-600">Google Maps integration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Agent Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-32"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Agent</h2>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-gray-600">Senior Property Consultant</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaPhone className="text-gray-400" />
                  <span>{property.agent.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaEnvelope className="text-gray-400" />
                  <span>{property.agent.email}</span>
                </a>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-2">Schedule a Tour</h4>
                <Button
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Request Viewing
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Schedule Visit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Property Visit</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="+1 (234) 567-8900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Any special requirements or questions..."
              ></textarea>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button className="flex-1">
                Schedule Visit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PropertyDetails;