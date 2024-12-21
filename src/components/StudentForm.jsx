import React from 'react';

// Card component for application options
const ApplicationCard = ({ icon, title, description, link, bgColor, textColor }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 card-hover">
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <svg className={`w-6 h-6 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
        >
          Apply Now
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const StudentForm = () => {
  const applicationOptions = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>,
      title: "Student Visa Application",
      description: "Start your academic journey in Germany or other countries. Complete application support for all levels of study.",
      link: "https://ravanaindustries.com/lead-from-web/new",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500"
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
      title: "Chancenkarte / Job Seeker Visa",
      description: "Apply for the German opportunity card and explore professional opportunities in Germany.",
      link: "https://ravanaindustries.com/apply-for-chancenkarte/new",
      bgColor: "bg-green-50",
      textColor: "text-green-500"
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>,
      title: "Portugal Job Seeker Visa",
      description: "Explore career opportunities in Portugal with our comprehensive visa consultation.",
      link: "https://ravanaindustries.com/portugal-job-seeker-visa-consultation/new",
      bgColor: "bg-red-50",
      textColor: "text-red-500"
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>,
      title: "Rejected Visa Appeal",
      description: "Get expert assistance for rejected visa appeals or new applications. We'll help you succeed.",
      link: "https://ravanaindustries.com/rejected-visa-appeal-applications/new",
      bgColor: "bg-purple-50",
      textColor: "text-purple-500"
    }
  ];

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Start Your Journey Today</h1>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-center gap-3 text-lg text-gray-600 mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Important Notice
            </div>
            <p className="text-gray-600 mb-4">
              These links will take you to our parent company's website for application.
            </p>
            <div className="inline-flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Technical Support: <a href="tel:+94777971219" className="font-medium hover:text-blue-600">+94 77 797 1219</a></span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Working Hours: 9:30 AM to 5:30 PM</p>
          </div>
        </div>

        {/* Application Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {applicationOptions.map((option, index) => (
            <ApplicationCard key={index} {...option} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default StudentForm;