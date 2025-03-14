import React from 'react';
import heroImage from '../assets/images/heroImage.png';

function Hero() {
  return (
    <div className='container mx-auto p-5 relative'>
      {/* Image Container */}
      <div className='relative'>
        {/* Black Overlay */}
        <div className='absolute rounded-lg inset-0 bg-black opacity-50'></div>
        {/* Image */}
        <img src={heroImage} alt='Hero' className='w-full h-auto' />
        {/* Text Content */}
        <div className='absolute inset-0 flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-[#f6f6f4] font-urbanist text-4xl lg:text-6xl font-semibold text-center px-4'>
            Your Legal Partner for a Brighter Future
          </h1>
          <p className='text-[#f6f6f4] font-urbanist lg:w-[600px] text-center px-4'>
            We are confident in our ability to fight for your rights with passion and precision, delivering results that exceed your expectations
          </p>
        </div>

        {/* Search Bar */}
        <div className='absolute justify-center flex w-full bottom-[-10%] px-4'>
          <div className='w-full max-w-4xl px-6 py-4 flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 rounded-full bg-white items-center shadow-lg'>
            <div className='relative w-full lg:w-[300px]'>
              <select className='border w-full rounded-full pl-4 pr-10 py-2 bg-white appearance-none'>
                <option value="Category of Lawyer">Category of Lawyer</option>
                <option value="Lawyer 1">Lawyer 1</option>
                <option value="Lawyer 2">Lawyer 2</option>
              </select>
              {/* Custom Dropdown Icon */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-[#42113C]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
            <div className='relative w-full lg:w-[300px]'>
              <select className='border w-full rounded-full pl-4 pr-10 py-2 bg-white appearance-none'>
                <option value="Choose City">Choose City</option>
                <option value="Lawyer 1">Lawyer 1</option>
                <option value="Lawyer 2">Lawyer 2</option>
              </select>
              {/* Custom Dropdown Icon */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-[#42113C]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
            <button className='bg-[#42113C] text-white px-6 py-2 rounded-full hover:bg-[#2d0b28] w-full lg:w-auto'>
              Find an Advocate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;