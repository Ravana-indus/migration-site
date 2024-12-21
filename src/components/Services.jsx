import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Reusable Sidebar Component
const Sidebar = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">99%</span>
            </div>
            <div>
              <h3 className="font-medium">Success Rate</h3>
              <p className="text-sm text-gray-600">Visa approval rate</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">24h</span>
            </div>
            <div>
              <h3 className="font-medium">Quick Response</h3>
              <p className="text-sm text-gray-600">Support response time</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">5+</span>
            </div>
            <div>
              <h3 className="font-medium">Countries</h3>
              <p className="text-sm text-gray-600">Global presence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Get Started</h2>
        <p className="text-gray-600 mb-6">Ready to begin your journey? Contact us for a free consultation.</p>
        <div className="space-y-4">
          <Link to="/contact" className="block w-full text-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// Country Specific Components
const GermanyContent = () => (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">German Student Visa Services</h2>
          <p className="text-gray-300 mt-1">Comprehensive support for all academic levels</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Bachelor's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• APS Application Support</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Master's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• APS Application Support</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">PhD/Research</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Research Proposals</li>
                <li>• Supervisor Matching</li>
                <li>• Scholarship Support</li>
                <li>• Institutional Research</li>
                <li>• University Applications</li>
                <li>• APS Application Support</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Other German Visa Services</h2>
          <p className="text-gray-300 mt-1">Additional immigration support services</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Chancenkarte</h3>
              <p className="text-sm text-gray-600">German Opportunity Card consultation and application support</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visit Visa</h3>
              <p className="text-sm text-gray-600">Tourist and business visit visa consultation</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Family Reunion</h3>
              <p className="text-sm text-gray-600">Family visa application and documentation support</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visa Appeals</h3>
              <p className="text-sm text-gray-600">Support for refused visa appeals and reapplication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortugalContent = () => (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Portugal Immigration Services</h2>
          <p className="text-gray-300 mt-1">Comprehensive support for Portugal visas</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Job Seeker Visa</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Application Support</li>
                <li>• Document Preparation</li>
                <li>• Document Verification</li>
                <li>• Visa Processing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visa Appeals</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Appeal Documentation</li>
                <li>• Case Review</li>
                <li>• Reapplication Support</li>
                <li>• Legal Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const UKContent = () => (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">UK Student Visa Services</h2>
          <p className="text-gray-300 mt-1">Complete support for UK university admissions</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Bachelor's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• UCAS Applications</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
                <li>• CAS Processing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Master's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• UCAS Applications</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
                <li>• CAS Processing</li>

              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">PhD/Research</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Research Proposals</li>
                <li>• Supervisor Matching</li>
                <li>• Scholarship Support</li>
                <li>• Institutional Research</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Other UK Visa Services</h2>
          <p className="text-gray-300 mt-1">Additional immigration support services</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visit Visa</h3>
              <p className="text-sm text-gray-600">Tourist and business visit visa consultation</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Family Reunion</h3>
              <p className="text-sm text-gray-600">Family visa application and documentation support</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visa Appeals</h3>
              <p className="text-sm text-gray-600">Support for refused visa appeals and reapplication</p>
            </div>
          </div>
        </div>    
        </div>
        </div>
  );

  const FranceContent = () => (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">French Student Visa Services</h2>
          <p className="text-gray-300 mt-1">Complete support for French university admissions</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Bachelor's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Master's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">PhD/Research</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Research Proposals</li>
                <li>• Supervisor Matching</li>  
                <li>• Scholarship Support</li>
                <li>• Institutional Research</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Additional French Services</h2>
          <p className="text-gray-300 mt-1">Other visa and immigration services</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visit Visa</h3>
              <p className="text-sm text-gray-600">Tourist and short-stay visa assistance</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Family Reunion</h3>
              <p className="text-sm text-gray-600">Family visa application support</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visa Appeals</h3>
              <p className="text-sm text-gray-600">Support for refused visa appeals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const SpainContent = () => (
    <div className="lg:col-span-2 space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Spanish Student Visa Services</h2>
          <p className="text-gray-300 mt-1">Complete support for Spanish university admissions</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Bachelor's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Master's Programs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Public Universities</li>
                <li>• Private Universities</li>
                <li>• Document Verification</li>
                <li>• Course Selection</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">PhD/Research</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Research Proposals</li>
                <li>• Supervisor Matching</li>  
                <li>• Scholarship Support</li>
                <li>• Institutional Research</li>
                <li>• University Applications</li>
                <li>• Visa Documentation</li>
                <li>• Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-2xl font-light">Additional Spanish Services</h2>
          <p className="text-gray-300 mt-1">Other visa and immigration services</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visit Visa</h3>
              <p className="text-sm text-gray-600">Tourist and short-stay visa assistance</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visa Appeals</h3>
              <p className="text-sm text-gray-600">Support for refused visa appeals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Services = () => {
    const [activeTab, setActiveTab] = useState('germany');
  
    const tabStyle = (tabName) => `px-6 py-3 border rounded-lg hover:bg-gray-50 transition-all ${
      activeTab === tabName 
        ? 'bg-gray-800 text-white border-gray-800' 
        : 'bg-white text-gray-800 border-gray-200'
    }`;
  
    const renderContent = () => {
      switch (activeTab) {
        case 'germany':
          return <GermanyContent />;
        case 'portugal':
          return <PortugalContent />;
        case 'uk':
          return <UKContent />;
        case 'france':
          return <FranceContent />;
        case 'spain':
          return <SpainContent />;
        default:
          return <GermanyContent />;
      }
    };
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive visa consultation services for students and professionals across Europe
          </p>
        </div>
  
        {/* Country Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('germany')}
              className={tabStyle('germany')}
            >
              Germany
            </button>
            <button 
              onClick={() => setActiveTab('portugal')}
              className={tabStyle('portugal')}
            >
              Portugal
            </button>
            <button 
              onClick={() => setActiveTab('uk')}
              className={tabStyle('uk')}
            >
              United Kingdom
            </button>
            <button 
              onClick={() => setActiveTab('france')}
              className={tabStyle('france')}
            >
              France
            </button>
            <button 
              onClick={() => setActiveTab('spain')}
              className={tabStyle('spain')}
            >
              Spain
            </button>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {renderContent()}
          <Sidebar />
        </div>
      </div>
    );
  };
  
  export default Services;