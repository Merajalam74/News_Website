import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">DAILY<span className="text-blue-500">NEWS</span>.</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400 text-sm">
          <Link to="/about" className="hover:text-white transition">About Us</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
        
        <p className="text-gray-600 text-xs">
          © 2026 Daily News. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;