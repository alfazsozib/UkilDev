import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div id='footer' className='bg-white'>
      <hr />
      <div className='container mx-auto p-5'>
        <div className='footerArea flex flex-col md:flex-row justify-between items-start md:items-center py-5 gap-10'>

          {/* Branding + Description */}
          <div className='flex flex-col space-y-5 md:w-1/2'>
            <h1 className="text-4xl font-urbanist text-[#42113C] font-extrabold text-center md:text-left">UKIL</h1>
            <div className='md:w-96 text-center md:text-left'>
              <p>Connecting people to qualified legal advocates across the country. Get the legal help you need, when you need it.</p>
            </div>
            <div className='icons flex justify-center md:justify-start space-x-3'>
              <FaSquareFacebook size={30} />
              <FaSquareInstagram size={30} />
              <FaSquareXTwitter size={30} />
              <IoLogoLinkedin size={30} />
            </div>
          </div>

          {/* Link Sections */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-1/2'>
            
            <div>
              <h1 className='font-semibold mb-3'>For Clients</h1>
              <div className='flex flex-col space-y-1 text-sm'>
                <a href="#">How It Works</a>
                <a href="#">Find an Advocate</a>
                <a href="#">Case Management</a>
                <a href="#">Reviews</a>
                <a href="#">Pricing</a>
              </div>
            </div>

            <div>
              <h1 className='font-semibold mb-3'>For Advocates</h1>
              <div className='flex flex-col space-y-1 text-sm'>
                <a href="#">Join as an Advocate</a>
                <a href="#">Benefits</a>
                <a href="#">Success Stories</a>
                <a href="#">Resources</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            <div>
              <h1 className='font-semibold mb-3'>Resources</h1>
              <div className='flex flex-col space-y-1 text-sm'>
                <a href="#">Legal Guides</a>
                <a href="#">Document Templates</a>
                <a href="#">Blog</a>
                <a href="#">Webinars</a>
                <a href="#">Help Center</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
