// src/pages/Home.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaStar } from 'react-icons/fa';


import Button from '../ui/Button';
import { properties } from '../data/properties';
import SearchBar from '../ui/SearchBar';
import PropertyCard from '../Properties/propertyCard';

const Home = () => {
  const featuredProperties = properties.slice(0, 3);

  const stats = [
    { value: '500+', label: 'Properties Sold', icon: FaHome },
    { value: '50+', label: 'Expert Agents', icon: FaBuilding },
    { value: '98%', label: 'Client Satisfaction', icon: FaChartLine },
    { value: '10+', label: 'Years Experience', icon: FaShieldAlt },
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      role: "Home Buyer",
      content: "PremiumEstate made our dream home a reality. Their professionalism and attention to detail were exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Property Investor",
      content: "As an investor, I rely on their market insights and extensive network. They've consistently delivered great returns.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Find Your <span className="text-primary-400">Dream</span> Property
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Discover luxury properties and investment opportunities with our expert real estate services
          </p>
          
          <SearchBar />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="large" className="px-12">View All Properties</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Why Choose <span className="text-primary-600">PremiumEstate</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We combine decades of real estate expertise with cutting-edge technology to deliver exceptional results for our clients.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Expert Market Analysis", desc: "Data-driven insights for optimal investment decisions" },
                  { title: "Personalized Service", desc: "Dedicated agent support throughout your journey" },
                  { title: "Premium Network", desc: "Access to exclusive off-market properties" },
                  { title: "End-to-End Support", desc: "From search to closing and beyond" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+ Years</div>
                <p className="text-gray-700">of excellence in premium real estate services</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by thousands of satisfied homeowners and investors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex text-secondary-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Let our expert agents guide you through every step of the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="large" className="bg-white !text-black hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;