import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    const handleClickOutside = (e) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuButton = document.getElementById('menuButton');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(e.target) && 
          menuButton && 
          !menuButton.contains(e.target)) {
        toggleMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center px-6 py-4 border-b border-gray-200 shadow-sm">
        <div className="h-12">
          <Link to="/">
            <img 
              src="/img/logo.png" 
              alt="Ravana Industries Logo" 
              className="h-full w-auto object-contain"
              loading="eager"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-gray-900 font-medium transition-colors duration-200 hover:text-primary
              ${isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-gray-600'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-gray-900 font-medium transition-colors duration-200 hover:text-primary
              ${isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-gray-600'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `text-gray-900 font-medium transition-colors duration-200 hover:text-primary
              ${isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-gray-600'}`
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `text-gray-900 font-medium transition-colors duration-200 hover:text-primary
              ${isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-gray-600'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `text-gray-900 font-medium transition-colors duration-200 hover:text-primary
              ${isActive ? 'text-primary border-b-2 border-primary' : 'hover:text-gray-600'}`
            }
          >
            Contact
          </NavLink>
          <a href="https://ravanaindustries.com/client-portal" 
             className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700">
            Client Portal
          </a>
        </nav>
        <button 
          className="md:hidden p-2" 
          id="menuButton" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
          <div className="h-10">
            <Link to="/">
              <img src="/img/logo.png" alt="Ravana Industries Logo" className="h-full" />
            </Link>
          </div>
          <button className="p-2" onClick={toggleMenu} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-4">
          <Link to="/" className="text-gray-900 font-medium hover:text-gray-600 py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="text-gray-900 font-medium hover:text-gray-600 py-2" onClick={toggleMenu}>Our services</Link>
          <Link to="/blog" className="text-gray-900 font-medium hover:text-gray-600 py-2" onClick={toggleMenu}>Blog</Link>
          <Link to="/about" className="text-gray-900 font-medium hover:text-gray-600 py-2" onClick={toggleMenu}>About us</Link>
          <Link to="/contact" className="text-gray-900 font-medium hover:text-gray-600 py-2" onClick={toggleMenu}>Contact us</Link>
          <a href="https://ravanaindustries.com/client-portal" 
             className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 text-center">
            Client Portal
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;