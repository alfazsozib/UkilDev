import React from 'react'
import advocate from '../assets/images/advocate.png'

function QuestionAns() {
  return (
    <div id='questionAns' className='container mx-auto p-5 my-16'>
        <div>
            <h1 className='text-4xl font-bold text-center my-12'>Question & Answer</h1>
            <div className='qnaBox w-full lg:h-[450px] flex gap-10'>
                <div className='imageSide'>
                    <div>
                        <img src={advocate} alt="" className='lg:h-[450px] lg:w-[450px] object-cover' />
                    </div>  
                    <div>
                        
                    </div>
                    
                </div>
                <div className='questionSide bg-[#42113C] w-full p-4 rounded-[8px] text-white'>
                    
                    <div className='my-4'>
                        <h1 className='text-center'>"Can my employer fire me without giving any reason, and what legal steps can I take if they do?"</h1>
                        <p className='text-center text-[#beb9b9]'>- Unknown Person</p>
                    </div>
                    <hr />
                    <p className='text-center my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet cumque distinctio. Cum fuga nulla sunt totam impedit maxime culpa maiores hic. Exercitationem facilis architecto consectetur et! Qui hic porro, obcaecati laudantium in placeat voluptatem aliquid iure quas provident et explicabo alias maiores eum quaerat officia impedit eveniet fuga, reprehenderit inventore ducimus laborum, suscipit repellat. Minima debitis impedit unde sunt.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet cumque distinctio. Cum fuga nulla sunt totam impedit maxime culpa maiores hic. Exercitationem facilis architecto consectetur et! Qui hic porro, obcaecati laudantium in placeat voluptatem aliquid iure quas provident et explicabo alias maiores eum quaerat officia impedit eveniet fuga, reprehenderit inventore ducimus laborum, suscipit repellat. Minima debitis impedit unde sunt.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionAns