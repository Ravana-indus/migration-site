import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* About Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Just a little more about the team behind Ravana Migration</p>
        <a 
          href="https://ravanaindustries.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
        >
          Visit Ravana Industries (Parent Company) →
        </a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Ravana Migration, a specialized division of Ravana Industries Pvt Ltd, is dedicated to helping students and professionals achieve their dreams of studying and working abroad. Our team consists of experienced immigration consultants, education specialists, and international student advisors who understand the complexities of global education and migration.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With dedicated offices in Sri Lanka, Germany, India, Australia, and Canada, we provide comprehensive support for international education and migration. Our global presence enables us to offer firsthand insights and personalized guidance for students seeking opportunities in these countries.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At Ravana Migration, we are committed to making international education accessible and affordable. Our services include university application assistance, visa processing, blocked account management, accommodation support, and post-arrival services. We take pride in our high success rate and transparent approach to helping students achieve their academic goals abroad.
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">99%</span>
              <p className="text-gray-600">Visa Success Rate</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">5+</span>
              <p className="text-gray-600">Global Offices</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">1000+</span>
              <p className="text-gray-600">Students Assisted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;