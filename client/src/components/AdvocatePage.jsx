import React from 'react'
import avatar from '../assets/images/avatar.png'

function AdvocatePage() {
  return (
    <div id='advocate' className='container mx-auto p-5'>
        <div className='data-sec relative top-12 flex justify-between'>
            <div className='card bg-red-400 border-1 border-[rgba(10, 10, 10, 0.50)] rounded-[8px]'>
                <div className='card-img'>
                    <img src={avatar} alt="avatar"  className='w-full lg:w-[440px] lg:h-[420px]'/>
                </div>
                <div className='card-data'>
                    <h1 className='text-2xl font-urbanist font-bold'>John Doe</h1>
                    <p className='text-[#42113C]'>Advocate</p>
                </div>
            </div>
            <div className='card bg-red-400 border-1 border-[rgba(10, 10, 10, 0.50)] rounded-[8px]'>
                <div className='card-img'>
                    <img src={avatar} alt="avatar"  className='w-full lg:w-[440px] lg:h-[420px]'/>
                </div>
                <div className='card-data'>
                    <h1 className='text-2xl font-urbanist font-bold'>John Doe</h1>
                    <p className='text-[#42113C]'>Advocate</p>
                </div>
            </div>
            <div className='card bg-red-400 border-1 border-[rgba(10, 10, 10, 0.50)] rounded-[8px]'>
                <div className='card-img'>
                    <img src={avatar} alt="avatar"  className='w-full lg:w-[440px] lg:h-[420px]'/>
                </div>
                <div className='card-data'>
                    <h1 className='text-2xl font-urbanist font-bold'>John Doe</h1>
                    <p className='text-[#42113C]'>Advocate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdvocatePage