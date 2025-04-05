import React from 'react'

function FAQ() {
  return (
    <div className=''>
        <div className='container mx-auto p-5 my-16'>
            <h1 className='text-4xl font-bold text-center'>Why Choose Us?</h1>
            <div className=''>
                <p className='text-center my-12'>FAQ Will added here</p>
                 
            </div>
        </div>

        <div className='findAdvocate bg-[#42113C] p-5 my-12'>
            <div className='container mx-auto p-5 my-16 flex flex-col items-center justify-center gap-5'>
                <h1 className='lg:text-[36px] text-white'>Ready to Get Expert Legal Help?</h1>
                <button className='bg-white hover:bg-[#d8d7d7] cursor-pointer px-16 py-2 rounded-md text-[#42113C]'>Find an Advocate Today</button>
            </div>
            
        </div>
    </div>
  )
}

export default FAQ