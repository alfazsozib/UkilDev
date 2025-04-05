import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div id="navbar" className="bg-white shadow-sm z-50 relative">
      <div className="flex justify-between items-center text-[#42113C] p-5 container mx-auto">
        <h1 className="text-4xl font-urbanist font-extrabold">UKIL</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center space-x-10 font-medium">
          <Link to="/">Home</Link>
          <Link to="/advocates">Advocates</Link>
          <Link to="/articles">Articles</Link>
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white border border-[#42113C] text-[#42113C] px-4 py-2 rounded-lg">
            Log In
          </button>
          <button className="bg-[#42113C] text-white px-4 py-2 rounded-lg">
            Find an Advocate
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#42113C] text-3xl">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-[#42113C] font-medium">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/advocates" onClick={toggleMenu}>Advocates</Link>
            <Link to="/articles" onClick={toggleMenu}>Articles</Link>
          </nav>

          <div className="flex flex-col space-y-3 pt-4">
            <button className="bg-white border border-[#42113C] text-[#42113C] px-4 py-2 rounded-lg">
              Log In
            </button>
            <button className="bg-[#42113C] text-white px-4 py-2 rounded-lg">
              Find an Advocate
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Navbar;
