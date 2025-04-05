import React from 'react'
import { cardData } from '../data/card'
import { FaArrowRight } from "react-icons/fa";


function AdvocatePage() {
    return (
        <>
            <div id='advocate' className='container mx-auto p-5'>
                <div className='data-sec relative max-sm:top-32 top-12 lg:grid lg:grid-cols-3 lg:gap-5 grid grid-cols-1 gap-12 '>
                    {cardData.map((item, index) => (
                        <div className='card border-1 border-[rgba(10, 10, 10, 0.50)] rounded-[8px] hover:scale-105 transition-all duration-300 ease-in-out'>
                            <div className='card-img '>
                                <img src={item.image} alt="avatar" className='w-full' />
                            </div>
                            <div className='card-data p-5 flex justify-between items-center'>
                                <div>
                                    <h1 className='text-2xl font-urbanist font-bold'>{item.name}</h1>
                                    <p className='text-[#1E1E1E]'>{item.role}</p>
                                </div>
                                <div>
                                    <span>
                                        <FaArrowRight color='#42113C' size={25} />
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
            <div className='w-full flex justify-center items-center mt-16 max-sm:mt-28'>
                <button className='bg-[#42113C] text-white px-10 py-2 rounded-md '>See More</button>
            </div>
        </>
    )
}


export default AdvocatePage