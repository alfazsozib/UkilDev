import React from 'react';

const StepsSection = () => {
  const steps = [
    { number: 1, title: 'Choose a Lawyer', tall: true },
    { number: 2, title: 'Submit Case Request' },
    { number: 3, title: 'Review Response' },
    { number: 4, title: 'Connect with Case' },
    { number: 5, title: 'Manage your Case', tall: true },
  ];

  return (
    <div className="container mx-auto p-5 " id="steps">
        <h1 className='text-center my-12 lg:text-[36px] font-semibold'>How It Works</h1>
      <div className="border-t border-black flex justify-evenly">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center"
          >
            <div
              className={`relative flex justify-center items-end mx-8 border-l border-black ${
                step.tall ? 'h-48' : 'h-32'
              }`}
            >
              {/* Centered and bottom-aligned circle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#42113C] text-white font-bold flex items-center justify-center rounded-full shadow-md">
                {step.number}
              </div>
            </div>
            <p className="mt-8">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
