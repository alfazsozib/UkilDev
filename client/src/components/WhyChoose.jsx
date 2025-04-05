import React from 'react'
import { MdVerified } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdReviews } from "react-icons/md";


function WhyChoose() {
    return (
        <div id='whyChoose' className='container mx-auto p-5 my-16'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Why Choose Us?</h1>
                <div className='boxes flex flex-wrap justify-center gap-5 mt-10'>
                    <div className='w-full sm:w-[30%] border border-[#42113C] flex flex-col items-center justify-center p-12 gap-4 rounded-lg'>
                        <span>
                            <MdVerified size={60} color='#42113C' />
                        </span>
                        <div className='text-center flex flex-col gap-6 p-5'>
                            <h1 className='text-[20px]'>Verified Advocates</h1>
                            <p className='text-[#000000B2]'>
                                All advocates on our platform are verified professionals with proven credentials and experience.
                            </p>
                        </div>
                    </div>

                    <div className='w-full sm:w-[30%] border border-[#42113C] flex flex-col items-center justify-center p-12 gap-4 rounded-lg'>
                        <span>
                            <MdLock size={60} color='#42113C' />
                        </span>
                        <div className='text-center flex flex-col gap-6 p-5'>
                            <h1 className='text-[20px]'>Secure Platform</h1>
                            <p className='text-[#000000B2]'>
                                Manage your case documents, communications, and appointments in one secure platform.
                            </p>
                        </div>
                    </div>

                    <div className='w-full sm:w-[30%] border border-[#42113C] flex flex-col items-center justify-center p-12 gap-4 rounded-lg'>
                        <span>
                            <IoChatboxEllipses size={60} color='#42113C' />
                        </span>
                        <div className='text-center flex flex-col gap-6 p-5'>
                            <h1 className='text-[20px]'>Direct Communication</h1>
                            <p className='text-[#000000B2]'>
                                Connect directly with advocates through messaging, video calls, and in-person meetings.
                            </p>
                        </div>
                    </div>

                    <div className='w-full sm:w-[30%] border border-[#42113C] flex flex-col items-center justify-center p-12 gap-4 rounded-lg'>
                        <span>
                            <MdReviews size={60} color='#42113C' />
                        </span>
                        <div className='text-center flex flex-col gap-6 p-5'>
                            <h1 className='text-[20px]'>Client Reviews</h1>
                            <p className='text-[#000000B2]'>
                                Read real feedback from previous clients to make informed decisions when choosing an advocate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose