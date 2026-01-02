// src/components/properties/PropertyFilters.jsx
import React, { useState } from 'react';
import Button from '../ui/Button';

const PropertyFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: 'All',
    bedrooms: 'Any',
    bathrooms: 'Any',
    amenities: []
  });

  const propertyTypes = ['All', 'House', 'Apartment', 'Villa', 'Penthouse', 'Commercial'];
  const bedroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];
  const bathroomOptions = ['Any', '1+', '2+', '3+', '4+'];
  const amenitiesList = ['Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Elevator'];

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const newRange = [0, value];
    const updatedFilters = { ...filters, priceRange: newRange };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleAmenityToggle = (amenity) => {
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    const updatedFilters = { ...filters, amenities: updatedAmenities };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>
      
      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="10000000"
            step="100000"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span className="text-lg font-bold text-primary-600">
              ${filters.priceRange[1].toLocaleString()}
            </span>
            <span>$10M</span>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Property Type</h4>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map(type => (
            <button
              key={type}
              onClick={() => {
                const updatedFilters = { ...filters, propertyType: type };
                setFilters(updatedFilters);
                onFilterChange(updatedFilters);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filters.propertyType === type
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Bedrooms</h4>
        <div className="flex flex-wrap gap-2">
          {bedroomOptions.map(option => (
            <button
              key={option}
              onClick={() => {
                const updatedFilters = { ...filters, bedrooms: option };
                setFilters(updatedFilters);
                onFilterChange(updatedFilters);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filters.bedrooms === option
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Amenities</h4>
        <div className="space-y-2">
          {amenitiesList.map(amenity => (
            <label key={amenity} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
                className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          const resetFilters = {
            priceRange: [0, 10000000],
            propertyType: 'All',
            bedrooms: 'Any',
            bathrooms: 'Any',
            amenities: []
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
      >
        Reset All Filters
      </Button>
    </div>
  );
};

export default PropertyFilters;