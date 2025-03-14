import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id='navbar'>
      <div className='flex justify-between items-center p-5 container mx-auto'>
        {/* Logo on the left */}
        <h1 className='text-4xl font-urbanist font-extrabold text-[#42113C]'>UKIL</h1>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-[#42113C] focus:outline-none'>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation links in the middle (Desktop Only) */}
        <nav className='hidden lg:flex flex-grow justify-center'>
          <ul className='flex space-x-10 p-0 m-0'>
            <li className='list-none'>
              <a href="" className='hover:text-gray-500 text-[#42113C]'>Home</a>
            </li>
            <li className='list-none'>
              <a href="" className='hover:text-gray-500 text-[#42113C]'>Advocates</a>
            </li>
            <li className='list-none'>
              <a href="" className='hover:text-gray-500 text-[#42113C]'>Articles</a>
            </li>
          </ul>
        </nav>

        {/* Buttons on the right (Desktop Only) */}
        <div className='hidden lg:flex space-x-5'>
          <button className='bg-white px-4 py-2 rounded-lg hover:bg-gray-100 text-[#42113C]'>Log In</button>
          <button className='bg-[#42113C] text-white px-4 py-2 rounded-lg hover:bg-[#2d0b28]'>Find an Advocate</button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <ul className='flex flex-col space-y-4 p-5'>
          <li className='list-none'>
            <a href="" className='hover:text-gray-500 text-[#42113C]'>Home</a>
          </li>
          <li className='list-none'>
            <a href="" className='hover:text-gray-500 text-[#42113C]'>Advocates</a>
          </li>
          <li className='list-none'>
            <a href="" className='hover:text-gray-500 text-[#42113C]'>Articles</a>
          </li>
        </ul>
        <div className='flex flex-col space-y-4 p-5'>
          <button className='bg-white px-4 py-2 rounded-lg hover:bg-gray-100 text-[#42113C]'>Log In</button>
          <button className='bg-[#42113C] text-white px-4 py-2 rounded-lg hover:bg-[#2d0b28]'>Find an Advocate</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;