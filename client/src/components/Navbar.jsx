import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='navbar'>
        <div className='flex justify-between text-[#42113C] items-center p-5 container mx-auto'>
            <h1 className='text-4xl font-urbanist font-extrabold'>UKIL</h1>
            <nav>
                <ul className='flex justify-center space-x-10'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Advocates</a></li>
                    <li><a href="">Articles</a></li>
                </ul>
            </nav>
            <div className='flex space-x-5 font-bo'>
                <button className='bg-white  px-2 py-2 rounded-lg'>Log In</button>
                <button className='bg-[#42113C] text-white px-2 py-2 rounded-lg'>Find an Advocate</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar