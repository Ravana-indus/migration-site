import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Contact Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">There are plenty of ways to reach us!</p>
      </div>

      {/* Action Buttons */}
      <div className="text-center">
        <Link 
          to="/studentform" 
          className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all mb-24"
        >
          Applying for Visa Consultation? Click Here!
        </Link>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Call Us */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Call us</h2>
          <p className="text-gray-600 mb-4">Monday to Friday 9.30pm to 5 pm</p>
          <p className="text-gray-800">
            +94 11 273 8948 / <br />
            +94 11 258 1181
          </p>
        </div>

        {/* Visit Us */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit us in person</h2>
          <p className="text-gray-600 mb-4">Monday to Friday 9.30pm to 5 pm</p>
          <p className="text-gray-800">
            No 10/30/1/1,Pamankada Lane, <br />
            Wellawatta, Colombo 06
          </p>
        </div>

        {/* Email Us */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email us</h2>
          <p className="text-gray-600 mb-4">For general or business inquiries email us</p>
          <p className="text-gray-800">
            info@ravanaindustries.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;