// src/components/ui/SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';
import Button from './Button';

const SearchBar = () => {
  const [search, setSearch] = useState({
    location: '',
    budget: '',
    type: ''
  });

  const propertyTypes = ['Any', 'House', 'Apartment', 'Villa', 'Penthouse', 'Commercial'];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="flex items-center">
            <FaMapMarkerAlt className="absolute left-4 text-gray-600" />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={search.location}
              onChange={(e) => setSearch({...search, location: e.target.value})}
            />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center">
            <FaDollarSign className="absolute left-4 text-gray-600" />
            <select
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              value={search.budget}
              onChange={(e) => setSearch({...search, budget: e.target.value})}
            >
              <option value="">Budget</option>
              <option value="0-500000">Up to $500,000</option>
              <option value="500000-1000000">$500,000 - $1M</option>
              <option value="1000000-5000000">$1M - $5M</option>
              <option value="5000000+">$5M+</option>
            </select>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center">
            <FaHome className="absolute left-4 text-gray-600" />
            <select
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              value={search.type}
              onChange={(e) => setSearch({...search, type: e.target.value})}
            >
              <option value="">Property Type</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <Button 
          className="w-full h-full flex items-center justify-center"
          size="large"
        >
          <FaSearch className="mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;