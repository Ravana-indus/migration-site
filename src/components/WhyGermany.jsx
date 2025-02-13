import React from 'react';
import { Link } from 'react-router-dom';
import CardGrid from './shared/CardGrid';

const WhyGermany = () => {
  const requirementsCards = [
    {
      icon: <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>,
      title: "A-Level 3 Passes",
      description: "To apply for a Bachelor's degree in Germany, you need at least 3 A-Level passes. Ensure your grades meet the program's requirements to start your higher education journey abroad."
    },
    {
      icon: <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>,
      title: "Minimum GPA of 3 for Master's",
      description: "For Master's programs in Germany, a minimum GPA of 2.8 in your undergraduate studies is typically required. Check the specific GPA criteria for the course you're applying to."
    },
    {
      icon: <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1z" clipRule="evenodd"/>,
      title: "IELTS 6.0 to 6.5",
      description: "You'll need an IELTS score between 6.0 and 6.5 to demonstrate your English proficiency. This is necessary for admission to most English-taught programs in Germany."
    },
    {
      icon: <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>,
      title: "No German Language Required",
      description: "You don't need to know German to apply to many programs, especially those taught in English. However, learning basic German will make living in Germany much easier."
    }
  ];

  const whyStudyCards = [
    {
      icon: <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>,
      title: "World-Class Universities",
      description: "Germany boasts some of the best universities in the world, known for their cutting-edge research and academic excellence."
    },
    {
      icon: <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>,
      title: "Affordable or Free Education",
      description: "Public universities in Germany charge little to no tuition fees, making it an attractive destination for cost-conscious students."
    },
    {
      icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>,
      title: "Global Recognition",
      description: "Degrees earned in Germany are recognized worldwide, giving you a competitive edge in the job market."
    },
    {
      icon: <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1z" clipRule="evenodd"/>,
      title: "English-Taught Programs",
      description: "Many universities offer programs entirely in English, making it easier for non-German speakers to study."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-8">
        <img src="/img/germany.png" alt="German Flag" className="w-24 h-24 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Studying in Germany is cheaper than studying in a Sri Lankan private university sometimes. Germany offers an incredible opportunity. Unlike many other study destinations that come with high tuition fees, public universities in Germany offer free education—yes, you heard that right. The quality of education is world-class, and there are endless opportunities for career growth after graduation.
        </p>
        <Link 
          to="/studentform" 
          className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all"
        >
          Need Help? Contact us! we are good at this!
        </Link>
      </div>

      {/* Requirements Section */}
      <CardGrid 
        title="What do you need?"
        subtitle="Essential Requirements for Sri Lankan Students to Apply for Higher Studies in Germany"
        cards={requirementsCards}
      />

      {/* Why Study Section */}
      <CardGrid 
        title="Why Study in Germany?"
        subtitle="Germany has a lot to offer for Sri Lankan students, including:"
        cards={whyStudyCards}
      />

      {/* Continue in Part 2... */}
      {/* Blocked Account Section */}
      <div className="py-16 text-center bg-gray-50 rounded-xl">
        <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-white text-4xl font-light">€</span>
        </div>
        <h2 className="text-4xl font-light text-gray-900 mb-6">"Blocked Account for Studying in Germany"</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
          "To study in Germany, you'll need to open a blocked account with around €11,904 (approximately 4 million LKR). This ensures you have enough funds for living expenses, but don't worry—it's fully refundable and accessible throughout your stay."
        </p>
        <Link 
          to="/studentform" 
          className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all"
        >
          Need Help With Block Account? We are in Germany 😉
        </Link>
      </div>

      {/* Finance Section */}
      <div className="py-16">
        <h2 className="text-4xl font-light text-gray-900 text-center mb-4">Worried About Finance</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          "Yes, We Know—Our Parents Aren't That Rich. It's Their Life Savings. Here's How Studying in Germany Can Be Affordable."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Work While Study */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Work While You Study</h3>
            <p className="text-gray-600 text-center">As an international student, you are allowed to work part-time for up to 20 hours per week during the semester and full-time during semester breaks.</p>
          </div>

          {/* Total Cost */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Total Cost: Under 1.5 Million LKR</h3>
            <p className="text-gray-600 text-center">The total cost of obtaining a visa to study in Germany, excluding living expenses, often stays below 1.5 million LKR.</p>
          </div>

          {/* Blocked Account */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Blocked Account: Fully Refundable</h3>
            <p className="text-gray-600 text-center">The blocked account money remains accessible for your living expenses during your studies, ensuring financial peace of mind.</p>
          </div>

          {/* Scholarship */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Scholarship Opportunities</h3>
            <p className="text-gray-600 text-center">Germany offers various scholarships, like DAAD and Erasmus+, which can cover tuition and living expenses.</p>
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-6">Got Everything?</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
          Find your course in DAAD.de and Apply via Uni-Assist. Most universities in Germany accept applications through Uni-Assist, a centralized application portal for international students. Some universities may also allow you to apply directly through their online portals. Ensure that you have all your documents ready.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
        <a 
            href="https://www.daad.de/de/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
          >
            Find Course in DAAD
          </a>
          <Link 
            to="/studentform" 
            className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all"
          >
            Need Help?
          </Link>
          <a 
            href="https://www.uni-assist.de/en/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
          >
            Apply via Uni-Assist
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyGermany;