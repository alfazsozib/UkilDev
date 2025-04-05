import React from 'react'
import reviewImage from '../assets/images/reviewImage.png'
function SuccessStory() {
    return (
        <div id='successStory' className='my-16'>
            <h1 className='text-4xl font-bold text-center my-12'>Success Stories</h1>
            <div className="bg-[#42113CB2] my-16 ">

                <div className='container mx-auto lg:flex lg:flex-row flex flex-col items-center p-16 '>

        {/* card section start  */}
                    <div className='card w-96 bg-white rounded-2xl shadow-xl relative p-6 m-6 pt-12'>
                        <div className='absolute -top-6 left-16 transform -translate-x-1/2'>
                            <img src={reviewImage} alt="" className='w-16 h-16 rounded-full border-2 border-white' />
                        </div>
                        <div className='text-left mt-2 text-[#000000]'>
                            <p className='mb-4'>“Ukil helped me find the perfect advocate for my property dispute. The case was resolved quickly, and I'm very satisfied with the outcome.”</p>
                            <p className='text-[#000000]'>– James L.</p>
                        </div>
                    </div>

                    <div className='card w-96 bg-white rounded-2xl shadow-xl relative p-6 m-6 pt-12'>
                        <div className='absolute -top-6 left-16 transform -translate-x-1/2'>
                            <img src={reviewImage} alt="" className='w-16 h-16 rounded-full border-2 border-white' />
                        </div>
                        <div className='text-left mt-2 text-[#000000]'>
                            <p className='mb-4'>“Ukil helped me find the perfect advocate for my property dispute. The case was resolved quickly, and I'm very satisfied with the outcome.”</p>
                            <p className='text-[#000000]'>– James L.</p>
                        </div>
                    </div>

                    <div className='card w-96 bg-white rounded-2xl shadow-xl relative p-6 m-6 pt-12'>
                        <div className='absolute -top-6 left-16 transform -translate-x-1/2'>
                            <img src={reviewImage} alt="" className='w-16 h-16 rounded-full border-2 border-white' />
                        </div>
                        <div className='text-left mt-2 text-[#000000]'>
                            <p className='mb-4'>“Ukil helped me find the perfect advocate for my property dispute. The case was resolved quickly, and I'm very satisfied with the outcome.”</p>
                            <p className='text-[#000000]'>– James L.</p>
                        </div>
                    </div>

                </div>
 {/* card section end  */}
            </div>
        </div>
    )
}

export default SuccessStory