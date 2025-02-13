import React from 'react';
import { NavLink } from 'react-router-dom';

const CATEGORIES = [
  { slug: 'study-in-germany', name: 'Study in Germany' },
  { slug: 'visa-guide', name: 'Visa Guide' },
  { slug: 'education', name: 'Education' }
];

const BlogNav = () => {
  return (
    <div className="bg-gray-50 py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-4 text-center">Our Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Discover insights about studying in Germany, visa processes, and career opportunities
        </p>
        <nav className="flex justify-center flex-wrap gap-4">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`
            }
            end
          >
            All Posts
          </NavLink>
          
          {CATEGORIES.map(category => (
            <NavLink
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className={({ isActive }) =>
                `inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BlogNav;