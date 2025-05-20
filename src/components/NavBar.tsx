import React from 'react';

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
            </div>
            <div className="ml-2">
              <span className="font-bold text-gray-800">Gihani</span>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">Projects</a></li>
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-800 hover:text-purple-600 transition">Blog</a></li>
            </ul>
          </nav>

          <div>
            <a href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button (hidden on desktop) */}
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;