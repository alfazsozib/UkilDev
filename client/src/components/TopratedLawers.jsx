import React from 'react';
import avatar2 from '../assets/images/avatar2.png';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const lawyerData = [
  {
    image: avatar2,
    name: 'John Doe',
    title: 'Senior Lawyer',
    rating: '4.8/5',
    description:
      '10+ years of experience in family law, corporate litigation, and dispute resolution.',
  },
  {
    image: avatar2,
    name: 'Jane Smith',
    title: 'Family Law Expert',
    rating: '4.7/5',
    description:
      'Specialist in family disputes, divorce, and child custody cases.',
  },
  {
    image: avatar2,
    name: 'Hasan Kabir',
    title: 'Criminal Lawyer',
    rating: '4.9/5',
    description:
      'Defended over 200 clients with high-profile criminal cases in Bangladesh.',
  },
  {
    image: avatar2,
    name: 'Mariya Rahman',
    title: 'Corporate Law Specialist',
    rating: '4.6/5',
    description:
      'Focused on business law, corporate compliance, and startup support.',
  },
];

const LawyerCard = ({ image, name, title, rating, description }) => (
  <div className="max-sm:h-[320px] max-sm:w-[340px] h-[320px] w-[330px] relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
      <div className="bg-white rounded-[8px] text-black text-left p-4 w-full">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-[#1E1E1E]">{title}</p>
          </div>
          <BsArrowUpRightCircleFill color="#42113C" size={30} />
        </div>
        <div className="flex items-center gap-1 my-2">
          <span>⭐</span>
          <span>{rating}</span>
        </div>
        <p className="text-xs text-left text-[#000000B2]">{description}</p>
      </div>
    </div>
  </div>
);

function TopratedLawers() {
  return (
    <div className="bg-[#42113CB2] my-16 flex justify-center items-center px-4">
      <div className="container mx-auto py-10">
        <h1 className="text-center text-[36px] max-sm:text-[28px] text-white font-semibold mb-8">
          Top Rated Lawyers in Bangladesh
        </h1>
        <div className="flex max-sm:flex max-sm:flex-col justify-center gap-6 max-sm:items-center">
          {lawyerData.map((lawyer, idx) => (
            <LawyerCard key={idx} {...lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopratedLawers;
