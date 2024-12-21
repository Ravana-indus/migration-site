import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribe email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="w-40 mb-4">
              <img 
                src="/img/Lavana Logo.png" 
                alt="Ravana Industries Logo" 
                className="w-full h-auto"
              />
            </div>
            <form 
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2"
            >
              <input 
                type="email" 
                placeholder="Your email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white placeholder-gray-400 w-full"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Get Updates
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-center md:text-left">
            <p>
              © Ravana Industries Pvt Ltd {new Date().getFullYear()}
            </p>
            <p className="flex items-center gap-1">
              Build with 
              <span className="text-red-500">❤️</span>
              By Ravana Industries IT Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;