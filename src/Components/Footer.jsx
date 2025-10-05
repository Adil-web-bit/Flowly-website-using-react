import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
        
        {/* Left section - Brand */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Flowly</h2>
        </div>

        {/* Right Section - Links */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">

          {/* Product Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">PRODUCT</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/features" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  API
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">RESOURCES</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Templates
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors duration-200 text-sm sm:text-base block py-1"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center pt-6 sm:pt-8 border-t border-gray-200">
        <p className="text-gray-900 text-xs sm:text-sm">
          © {new Date().getFullYear()} Flowly Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;