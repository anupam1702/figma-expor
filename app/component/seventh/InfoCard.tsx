// components/InfoCard.tsx
import React from 'react';

interface InfoCardProps {
  rating: number;
  totalStudents: string;
  description: string;
  title?: string;
  imageSrc?: string; // Add image source prop
}

const InfoCard: React.FC<InfoCardProps> = ({ rating, totalStudents, description, title, imageSrc }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-8 text-white w-full md:w-[60rem] flex md:flex-row flex-col"> 
      <div className='w-full md:w-1/2 rounded-3xl overflow-hidden'>
      {imageSrc && (
        <img src={imageSrc} alt="Card Image" className="object-cover w-full h-full" />
      )}
      </div>
      <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        <p className="text-gray-300 mb-6 text-lg">{description}</p>
        <div className="flex justify-between items-center mb-6">
  <div className="flex items-center flex-col">
    <span className="text-2xl font-bold mr-2 text-blue-500">{rating}/5</span>
    <h2 className="text-sm text-gray-500">Customer Rating</h2> 
  </div>

  <div className="flex items-center flex-col">
    <span className="text-2xl font-bold mr-2 text-blue-500">{totalStudents}</span>
    <h2 className="text-sm text-gray-500">Total Students</h2>
  </div>
</div>

        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

