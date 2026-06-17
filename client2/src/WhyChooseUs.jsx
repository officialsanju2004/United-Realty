// src/components/sections/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers, FaAward, FaClock, FaHandshake } from 'react-icons/fa';
import { IoAnalytics, IoRibbon } from 'react-icons/io5';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaChartLine,
      title: "Market Intelligence",
      description: "Real-time data analytics and market insights to make informed decisions",
      color: "bg-[#0a1628]"
    },
    {
      icon: FaShieldAlt,
      title: "Risk Management",
      description: "Comprehensive due diligence and risk assessment for every transaction",
      color: "bg-[#0a1628]"
    },
    {
      icon: FaUsers,
      title: "Expert Network",
      description: "Access to top agents, lawyers, and financial advisors in our network",
      color: "bg-[#0a1628]"
    },
    {
      icon: FaAward,
      title: "Award-Winning Service",
      description: "Multiple industry awards for excellence in real estate services",
      color: "bg-[#0a1628]"
    },
    {
      icon: IoAnalytics,
      title: "Investment Analysis",
      description: "Detailed ROI projections and investment strategy development",
      color: "bg-[#0a1628]"
    },
    {
      icon: FaHandshake,
      title: "Client Advocacy",
      description: "We represent your interests exclusively in every negotiation",
      color: "bg-[#0a1628]"
    }
  ];

  const stats = [
    { value: "24/7", label: "Support Availability" },
    { value: "< 48h", label: "Average Response Time" },
    { value: "100%", label: "Client Confidentiality" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-4 py-2 rounded-full mb-6">
            <IoRibbon className="text-primary-600" />
            <span className="text-primary-600 font-semibold">Why Choose Real Estate with Nitish Mahajan</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Experience the <span className="text-transparent bg-clip-text bg-[#0a1628]">
              Difference
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We go beyond traditional real estate services to deliver exceptional value and results
          </p>
        </motion.div>

       

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full  text-yellow-400 rounded-2xl flex items-center justify-center">
                    <feature.icon className={`text-2xl bg-gradient-to-br ${feature.icon} bg-clip-text `} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-primary-600 font-medium">
                 
                
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/5 to-secondary-500/5 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Client Success Process
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#0a1628] hidden md:block" />
            
            <div className="space-y-12 md:space-y-0">
              {[
                { step: "01", title: "Discovery & Planning", description: "Understanding your goals and developing a customized strategy" },
                { step: "02", title: "Property Search", description: "Leveraging our network and technology to find perfect matches" },
                { step: "03", title: "Due Diligence", description: "Comprehensive analysis and verification of all property aspects" },
                { step: "04", title: "Negotiation", description: "Expert negotiation to secure the best terms and price" },
                { step: "05", title: "Closing", description: "Seamless transaction management and documentation" },
                { step: "06", title: "After-Sale Support", description: "Ongoing support and property management services" }
              ].map((process, index) => (
                <div
                  key={process.step}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-lg p-6"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-[#0a1628] rounded-lg flex items-center justify-center text-white font-bold mr-4">
                          {process.step}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {process.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        {process.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-primary-600 rounded-full absolute left-1/2 transform -translate-x-1/2" 
                       style={{ top: `${(index + 1) * 16.666}%` }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;
