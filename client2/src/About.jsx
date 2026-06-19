import React, { useEffect, useState } from 'react';
import { 
  MapPin, Phone, Mail, Check, Star, Award, 
  Shield, Users, Building, Briefcase, 
  ChevronRight, Calendar, Heart, MessageSquare,
  Facebook, Instagram, Linkedin, Twitter,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import nitish from '../images/nitish.jpg';
import { FaWhatsapp } from 'react-icons/fa';
const About = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Counter component
  const Counter = ({ end, duration = 2000, label }) => {
    const [count, setCount] = useState(0);
    const countRef = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start > end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );
      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return (
      <div className="text-center" ref={countRef}>
        <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
          {count.toLocaleString()}+
        </div>
        <div className="text-lg text-gray-300">{label}</div>
      </div>
    );
  };

  // Achievements data
  const achievements = [
    {
      icon: <Building className="w-8 h-8 text-yellow-400" />,
      number: "26+",
      label: "Properties Sold",
      description: "Successfully closed premium deals"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Happy and returning clients"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      number: "7+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      number: "100+",
      label: "Verified Properties",
      description: "Carefully curated portfolio"
    }
  ];

  // Services data
  const services = [
    {
      title: "Property Sales & Purchase",
      description: "Expert guidance for buying and selling residential and commercial properties with complete legal verification.",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Legal Due Diligence",
      description: "Comprehensive property verification, title checks, and legal documentation to ensure secure transactions.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Investment Consultation",
      description: "Strategic investment advice to maximize returns in India's growing real estate market.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "NRI Property Services",
      description: "Specialized assistance for NRIs looking to invest in Indian properties with complete transparency.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628] shadow-lg py-3' : 'bg-[#0a1628]/95 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-25 h-15 bg-yellow-400 rounded-lg flex items-center justify-center">
              <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-yellow-400 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about-us" className="text-yellow-400 font-medium transition-colors duration-300">
              About Us
            </Link>
            <Link to="/contact-us" className="text-white hover:text-yellow-400 font-medium transition-colors duration-300">
              Contact Us
            </Link>
            <button className="bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
              Schedule Visit
            </button>
          </div>
          
          <button className="md:hidden text-yellow-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628] shadow-lg py-4 px-6">
            <Link to="/" className="block py-3 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a]">
              Home
            </Link>
            <Link to="/about-us" className="block py-3 text-yellow-400 font-medium border-b border-[#1a2a3a]">
              About Us
            </Link>
            <Link to="/contact-us" className="block py-3 text-white hover:text-yellow-400 font-medium border-b border-[#1a2a3a]">
              Contact Us
            </Link>
            <button className="mt-4 w-full bg-yellow-400 text-[#0a1628] px-6 py-3 rounded-lg font-medium">
              Schedule Visit
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-400 font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-yellow-400" /> About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Trusted <span className="text-yellow-400">Real Estate</span> Partner
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 7 years of experience, we provide expert guidance for residential and commercial property investments across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1628] border-t border-[#1a2a3a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={26} label="Properties Sold" />
            <Counter end={7} label="Years Experience" />
            <Counter end={100} label="Client Satisfaction" />
            <Counter end={50} label="Verified Properties" />
          </div>
        </div>
      </section>

      {/* About Nitish Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-3 mb-6">
                <span className="bg-[#0a1628] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MEET YOUR EXPERT
                </span>
                <span className="bg-yellow-400 text-[#0a1628] px-4 py-2 rounded-full text-sm font-semibold">
                  ★ TRUSTED REALTOR
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight mb-6">
                About <br />
                <span className="text-yellow-500">Nitish Mahajan</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Nitish Mahajan is a dedicated real estate professional committed to helping homebuyers, investors, and property sellers make informed and confident decisions. With a strong understanding of the real estate market and a client-first approach, he focuses on identifying opportunities that align with each client's goals and budget. Whether you are searching for your dream home, a profitable investment, or assistance in selling a property, Nitish provides personalized guidance throughout the entire process.          </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
            His approach is built on transparency, trust, and long-term relationships. By carefully understanding client requirements and offering verified property options, he ensures a smooth and hassle-free experience from property selection to final documentation. Nitish believes that real estate is more than just buying and selling properties—it's about helping people build their future and achieve their financial goals.     </p>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">Through professional service, market expertise, and a commitment to client satisfaction, Nitish Mahajan continues to help individuals and families make smarter real estate decisions with confidence.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-3xl font-bold text-yellow-500">26+</h3>
                  <p className="text-gray-600 text-sm">Properties Sold</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
                  <p className="text-gray-600 text-sm">Client Satisfaction</p>
                </div>
              </div>
              <Link to="/contact-us">
                <button className="bg-[#0a1628] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:text-[#0a1628] transition-all duration-300">
                  Connect with Nitish Mahajan
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={nitish}
                  alt="Nitish Mahajan - Real Estate Expert"
                  className="w-full h-[600px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-gray-500 text-sm">Successful Transactions</p>
                <h3 className="text-3xl font-bold text-green-600">26+</h3>
                <p className="text-gray-500 text-sm">Premium Deals Closed</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-yellow-400 p-6 rounded-2xl shadow-xl">
                <Award className="w-8 h-8 text-[#0a1628]" />
                <p className="text-[#0a1628] font-bold mt-1">7+ Years</p>
                <p className="text-[#0a1628] text-sm">Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-700 font-medium rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Comprehensive <span className="text-yellow-500">Real Estate Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From property selection to legal verification, we handle every aspect of your real estate journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-700 font-medium rounded-full mb-4">
              Our Achievements
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Why Choose <span className="text-yellow-500">Nitish Mahajan</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a1628] p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{item.number}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your <span className="text-yellow-400">Dream Property?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss your real estate goals and find the perfect property for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact-us">
                <button className="bg-yellow-400 text-[#0a1628] px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
                  Contact Us Today
                </button>
              </Link>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400/10 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-12 border-t border-[#1a2a3a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-30 h-25 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <img src={logo} className='object-cover h-full w-full rounded-xl' alt="Logo" />
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium residential and commercial properties across Mumbai Metropolitan Region.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link to="/about-us" className="text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact-us" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">+91 98159 78773</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">nm@nitishestate.com</span>
                </li>
               
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Connect With Us</h4>
              <p className="text-gray-400 mb-6">
                Follow us on social media for the latest property updates.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <div 
                    key={idx}
                    className="w-10 h-10 bg-[#1a2a3a] rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a1628] cursor-pointer transition-colors duration-300 text-gray-400 hover:text-[#0a1628]"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1a2a3a] mt-12 pt-8 text-center text-gray-400">
            <p>© {currentYear} Real Estate with Nitish Mahajan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button - WhatsApp Green */}
           <button 
             onClick={() => window.open("https://wa.me/919815978773", "_blank")} 
             className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50"
           >
             <FaWhatsapp size={24} />
           </button>
    </div>
  );
};

export default About;
