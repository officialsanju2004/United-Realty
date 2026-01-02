// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';








import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import Properties from './Components/Pages/Properties';
import PropertyDetails from './Components/Pages/PropertyDetails';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { properties } from './Components/data/properties';

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;