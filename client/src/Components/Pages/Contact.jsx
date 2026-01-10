// src/pages/Contact.jsx
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaClock, 
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaComments
} from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Button from '../ui/Button';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
                q: "How quickly can I expect a response?",
                a: "We respond to all inquiries within 2 hours during business hours, and within 24 hours maximum. For urgent matters, call our hotline."
              },
              {
                q: "Do you charge for property consultations?",
                a: "Initial consultations are completely free. We only charge commission when we successfully complete a property transaction."
              },
              {
                q: "What areas do you serve?",
                a: "We serve all major cities in California, with specialized services in Beverly Hills, Malibu, Santa Monica, and Los Angeles."
              },
              {
                q: "Can you help with international property purchases?",
                a: "Yes, we have partnerships with international real estate firms and can assist with property purchases in over 20 countries."
              },
              {
                q: "What makes PremiumEstate different?",
                a: "We offer personalized service, market expertise, and exclusive access to off-market properties not available through traditional channels."
              },
              {
                q: "How do you handle client confidentiality?",
                a: "We maintain strict confidentiality agreements and use encrypted communication channels to protect all client information."
              }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const navigate=useNavigate();
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: "+1 (888) 456-7890",
      subtext: "Mon-Sat: 8AM-8PM, Sun: 9AM-5PM",
      color: "from-blue-500 to-cyan-500",
      action: "tel:+18884567890"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "info@premiumestate.com",
      subtext: "Response within 2 hours",
      color: "from-emerald-500 to-green-500",
      action: "mailto:info@premiumestate.com"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      details: "+1 (888) 456-7890",
      subtext: "Instant chat support",
      color: "from-green-500 to-teal-500",
      action: "https://wa.me/18884567890"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Office",
      details: "123 Luxury Avenue",
      subtext: "Beverly Hills, CA 90210",
      color: "from-amber-500 to-orange-500",
      action: "https://maps.google.com/?q=123+Luxury+Avenue+Beverly+Hills+CA"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM" },
    { day: "Emergency", time: "24/7 Hotline Available" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        propertyType: '',
        timeline: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Working Google Maps Embed
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.453007399259!2d-118.40068292439594!3d34.0733941204619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc85f02c7b6d%3A0x3d6281e7dba66f31!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-secondary-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-200">
              <FaComments className="text-primary-600" />
              <span className="text-primary-600 font-semibold">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Let's Find Your <span className="text-transparent bg-clip-text bg-primary-600 ">Dream Home</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experts is ready to guide you through every step of your real estate journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IoMdCheckmarkCircle className="text-white text-4xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-8">
                  Thank you for contacting PremiumEstate. Our team will get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary-600 "
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaUser className="inline mr-2 text-gray-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2 text-gray-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaPhone className="inline mr-2 text-gray-400" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <FaBuilding className="inline mr-2 text-gray-400" />
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900"
                      >
                        <option value="">Select Property Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900"
                      >
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="viewing">Schedule Property Viewing</option>
                        <option value="valuation">Property Valuation</option>
                        <option value="investment">Investment Consultation</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="career">Career Opportunities</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediately</option>
                        <option value="1month">Within 1 Month</option>
                        <option value="3months">1-3 Months</option>
                        <option value="6months">3-6 Months</option>
                        <option value="future">Future Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your requirements, budget, preferences, or any questions you may have..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      type="submit"
                      size="large"
                      className="flex-1 bg-primary-600 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  target={info.action.includes('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <div className={`bg-gradient-to-br ${info.color} bg-clip-text `}>
                          {info.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.subtext}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Working Google Maps */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-primary-600 text-xl mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Headquarters</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  123 Luxury Avenue, Beverly Hills, California 90210, United States
                </p>
                
         
                <div className="rounded-xl overflow-hidden h-96 border border-gray-200">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PremiumEstate Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://maps.google.com/?q=123+Luxury+Avenue+Beverly+Hills+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </motion.div> */}

          
          </div>
        </div>

       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.q}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'pb-5' : 'max-h-0'}`}
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <p className="text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-blue-100">
                Can't find the answer you're looking for? Please contact our support team.
              </p>
            </div>
            <button onClick={()=>{navigate("/contact")}}className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg">
              Contact Support
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Click on any question to reveal the answer. Click again to collapse.</p>
        </div>
      </div>
    </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-display font-bold mb-6">
                Ready to Start Your Real Estate Journey?
              </h2>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Contact us today for a personalized consultation and discover how we can help you achieve your property goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="large"
                  className="text-gray-900 hover:bg-gray-100 px-8"
                  onClick={() => window.location.href = 'tel:+18884567890'}
                >
                  <FaPhone size={30} className="mr-2" />
                 
                  
                </Button>
                <Button
                  variant="outline"
                  size="large"
                  className="border-white text-white hover:bg-white/10 px-8"
                  onClick={() => window.open('https://wa.me/18884567890', '_blank')}
                >
                  <FaWhatsapp size={30}className="mr-2" />
                 
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;