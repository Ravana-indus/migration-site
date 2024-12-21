import React from 'react';

const IconCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto flex items-center justify-center">
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        {icon}
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const CardGrid = ({ title, subtitle, cards }) => (
  <div className="py-16">
    <h2 className="text-4xl font-light text-gray-900 text-center mb-4">{title}</h2>
    <p className="text-lg text-gray-600 text-center mb-12">{subtitle}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card, index) => (
        <IconCard key={index} {...card} />
      ))}
    </div>
  </div>
);

export default CardGrid;