import Image from 'next/image';
import React from 'react';

interface CourseProps {
  founderName: string;
  description: string;
  imageSrc: string;
}

const CourseCard: React.FC<CourseProps> = ({ founderName, description, imageSrc }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
    <div className="relative w-full h-48 mb-4">
      <Image
        src={imageSrc}
        alt={`${founderName}'s photo`}
        className="rounded-lg object-cover"
        layout="fill"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{founderName}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CourseSection: React.FC = () => {
  const courses = [
    {
      founderName: "Andrew Power",
      description: "Founder",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s",
    },
    {
      founderName: "John Doe",
      description: "Founder",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s",
    },
    {
      founderName: "Jane Smith",
      description: "Co-Founder",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s",
    },
    {
      founderName: "Michael Johnson",
      description: "Lead Instructor",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our <span className="text-blue-500">Top Courses</span>
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-between gap-x-6 gap-y-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
