import React from 'react';
import { Link } from 'react-router-dom';

const StudyAbroadForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Study Abroad Application</h1>
        <p className="text-xl text-gray-600 mb-8">
          You're just one step away from starting your journey to study abroad!
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-8">
          {/* Info Section */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">What happens next?</h3>
                <p className="text-gray-600">
                  You'll be redirected to our secure application portal where you can:
                </p>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Submit your basic information
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Upload required documents
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Choose your preferred program
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ravanaindustries.com/lead-from-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white text-center border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all"
            >
              Continue to Application Form
              <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <Link 
              to="/contact"
              className="inline-block px-6 py-3 border-2 text-center border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all"
            >
              Need Help?
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Having trouble? Contact our support team at{' '}
              <a href="mailto:support@ravanaindustries.com" className="text-gray-800 font-medium hover:text-gray-600">
                support@ravanaindustries.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadForm;