import React from 'react'
import { cardData } from '../data/card'


function AdvocatePage() {
  return (
    <div id='advocate' className='container mx-auto p-5'>
        <div className='data-sec relative top-12 lg:grid lg:grid-cols-3 lg:gap-5'>
            {cardData.map((item, index) => (
            <div className='card border-1 border-[rgba(10, 10, 10, 0.50)] rounded-[8px]'>
                <div className='card-img'>
                    <img src={item.image} alt="avatar"  className='w-full'/>
                </div>
                <div className='card-data p-5'>
                    <div>
                        <h1 className='text-2xl font-urbanist font-bold'>{item.name}</h1>
                        <p className='text-[#42113C]'>{item.role}</p>
                    </div>
                    <div>
                        <h1></h1>
                    </div>
                   
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default AdvocatePage