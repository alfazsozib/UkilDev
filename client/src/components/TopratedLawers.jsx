import React from 'react'
import avatar2 from '../assets/images/avatar2.png'

function TopratedLawers() {
    return (
        <div className='bg-[#42113CB2] lg:h-[500px] my-16 flex justify-center items-center'>
            <div className='container mx-auto p-5'>
                <h1 className='text-center text-[36px] text-[#FFFFFF] font-semibold py-6'>
                    Top Rated Lawyers in Bangladesh
                </h1>
                <div className='flex gap-4 my-6'>
                    <div className='h-[320px] w-[330px] '>
                        <img
                            src={avatar2}
                            alt="Avatar"
                            className='rounded-lg w-full h-full object-cover'
                        />
                    </div>
                    <div className='h-[320px] w-[330px] '>
                    <img
                        src={avatar2}
                        alt="Avatar"
                        className='rounded-lg w-full h-full object-cover'
                    />
                </div>
                <div className='h-[320px] w-[330px] '>
                    <img
                        src={avatar2}
                        alt="Avatar"
                        className='rounded-lg w-full h-full object-cover'
                    />
                </div>
                <div className='h-[320px] w-[330px] '>
                    <img
                        src={avatar2}
                        alt="Avatar"
                        className='rounded-lg w-full h-full object-cover'
                    />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default TopratedLawers
