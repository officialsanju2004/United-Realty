import React, { useState, useRef, useEffect } from 'react';

const ProfessionalCleaningWebsite = () => {
  // FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // Services data
  const services = [
    { id: 1, title: "Residential Cleaning", description: "Complete home cleaning for apartments, condos, and houses", icon: "🏠" },
    { id: 2, title: "Commercial Cleaning", description: "Office and workspace cleaning for businesses", icon: "🏢" },
    { id: 3, title: "Deep Cleaning", description: "Thorough cleaning of every corner of your space", icon: "✨" },
    { id: 4, title: "Carpet & Upholstery", description: "Professional cleaning for carpets and furniture", icon: "🛋️" },
    { id: 5, title: "Window Cleaning", description: "Interior and exterior window cleaning services", icon: "🪟" },
    { id: 6, title: "Move In/Out Cleaning", description: "Specialized cleaning for moving transitions", icon: "📦" },
  ];
  
  // Process steps
  const processSteps = [
    { step: 1, title: "Book Online", description: "Schedule your cleaning service through our website or phone" },
    { step: 2, title: "Customize Plan", description: "Select services and customize to your specific needs" },
    { step: 3, title: "Team Dispatch", description: "Our trained cleaning team arrives at your location" },
    { step: 4, title: "Quality Inspection", description: "We ensure every detail meets our high standards" },
  ];
  
  // Testimonials
  const testimonials = [
    { name: "Sarah Johnson", text: "The best cleaning service I've ever used. My apartment has never looked better!", role: "Residential Client" },
    { name: "Michael Chen", text: "Our office space is consistently spotless. Highly professional team.", role: "Business Owner" },
    { name: "Emma Rodriguez", text: "Reliable, thorough, and affordable. I recommend them to all my friends.", role: "Regular Client" },
  ];
  
  // FAQ data
  const faqs = [
    { question: "What areas do you service?", answer: "We currently service the greater metropolitan area including all suburbs within a 25-mile radius. Contact us to check if we cover your specific location." },
    { question: "How do you price your services?", answer: "Our pricing is based on the size of the space, type of service, and frequency. We offer free estimates after a brief consultation." },
    { question: "Are your cleaning products eco-friendly?", answer: "Yes, we use environmentally friendly cleaning products that are safe for children, pets, and people with allergies." },
    { question: "Do you bring your own equipment?", answer: "Yes, our professional team arrives fully equipped with all necessary cleaning supplies and equipment." },
    { question: "Can I schedule recurring cleaning?", answer: "Absolutely! We offer weekly, bi-weekly, and monthly cleaning plans with discounted rates for recurring services." },
  ];
  
  // Gallery images
  const galleryImages = [
    { id: 1, alt: "Clean living room" },
    { id: 2, alt: "Sparkling kitchen" },
    { id: 3, alt: "Office cleaning" },
    { id: 4, alt: "Window cleaning" },
    { id: 5, alt: "Carpet cleaning" },
    { id: 6, alt: "Bathroom cleaning" },
  ];
  
  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll contact you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  // Animation on scroll
  const [visibleSections, setVisibleSections] = useState([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const newVisibleSections = [];
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          newVisibleSections.push(index);
        }
      });
      
      setVisibleSections(newVisibleSections);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Clean<span className="text-blue-600">Pro</span></h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>
          
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </nav>
      
      {/* Hero Banner */}
      <section id="home" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Cleaning Services for Your Home & Business</h1>
            <p className="text-xl mb-8 text-blue-100">We provide top-quality cleaning solutions with trained professionals, eco-friendly products, and satisfaction guarantee.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">Schedule a Cleaning</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white rounded-xl shadow-2xl p-2 transform rotate-3">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Professional Cleaning Team</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-2 transform -rotate-3 w-3/4">
                <div className="bg-gray-300 h-40 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Before & After Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer a comprehensive range of professional cleaning services tailored to meet your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${visibleSections.includes(1) ? 'opacity-100' : 'opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section id="process" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our 4-Step Cleaning Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A systematic approach that ensures exceptional results every time.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
            
            {processSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`relative z-10 bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg mb-8 md:mb-0 transition-all duration-700 ${visibleSections.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-800 text-center">{step.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`text-center transition-all duration-700 ${visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 200 + 400}ms`}}
              >
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-500 ${visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex mt-4 text-yellow-500">
                  {"★".repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work in Action</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">See the transformation our cleaning services provide.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-700 ${visibleSections.includes(4) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="h-64 bg-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">{image.alt}</span>
                </div>
                <div className="bg-white p-4">
                  <p className="text-gray-800 font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our cleaning services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ${visibleSections.includes(5) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <span className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 bg-white border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${visibleSections.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
              <p className="text-blue-100">Get a free quote or schedule your first cleaning service</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-blue-700 p-8">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Call Us</h4>
                        <p className="text-blue-100">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Email Us</h4>
                        <p className="text-blue-100">info@cleanpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <span className="text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Business Hours</h4>
                        <p className="text-blue-100">Mon-Fri: 8am-6pm</p>
                        <p className="text-blue-100">Sat: 9am-4pm</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2" htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="carpet">Carpet & Upholstery</option>
                        <option value="window">Window Cleaning</option>
                        <option value="move">Move In/Out Cleaning</option>
                      </select>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <h2 className="text-2xl font-bold">Clean<span className="text-blue-400">Pro</span></h2>
              </div>
              <p className="text-gray-400">Professional cleaning services for homes and businesses.</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© growth Flow Media</p>
              <p className="text-gray-400">All rights reserved.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>123 Clean Street, Suite 100 • Sparkle City, SC 12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalCleaningWebsite;