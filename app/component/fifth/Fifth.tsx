'use client';

import Link from 'next/link';
import Image from 'next/image';  // Importing Image from next/image
import React from 'react';

const Fifth = () => {
  const services = [
    { name: 'Security Testing', description: 'Determining if an information...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Data Forensics', description: 'Focused on data investigations...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Penetration Testing', description: 'Simulating security threats...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Red Team', description: 'Collaborative testing efforts...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Digital Hardening', description: 'Strengthening digital security...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Source Code Audit', description: 'Reviewing source code security...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Software Development', description: 'Building software solutions...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
    { name: 'Cloud Security', description: 'Ensuring cloud infrastructure safety...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&s' },
  ];

  return (
    <div>
      <section className="p-8">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Explore Our <span className="text-blue-500">Top Services</span>
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Data analyst software is a type of software tool used for data analysis and <br /> reporting. It is designed to help business organizations.
        </p>

        {/* Navigation Section */}
        <header className="flex justify-center mb-8">
          <nav className="flex flex-wrap gap-4 justify-center">
            <Link className="bg-blue-500 border text-white rounded-full px-4 py-2" href="/">
              * Development
            </Link>
            <Link className="bg-white border text-black rounded-full px-4 py-2" href="/courses">
              Development
            </Link>
            <Link className="bg-white border text-black rounded-full px-4 py-2" href="/faq">
              Development
            </Link>
            <Link className="bg-white border text-black rounded-full px-4 py-2" href="/blogs">
              Development
            </Link>
            <Link className="bg-white border text-black rounded-full px-4 py-2" href="/contacts">
              Development Us
            </Link>
          </nav>
        </header>

        {/* Services Section */}
        <div className="flex flex-wrap justify-between gap-y-6">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-80">
                {/* Service Image */}
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  width={400} 
                  height={200} 
                  className="w-full h-40 object-cover rounded-t-lg mb-4" 
                />
                
                {/* Service Details with black background */}
                <div className="bg-black text-white p-4 rounded-b-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase text-gray-400">Security</span> {/* Category */}
                    <div className="flex items-center text-xs text-gray-300">
                      <span className="mr-1">16,345 Users</span>
                      <span>1h 25m</span>
                    </div>
                  </div>
                  <h2 className="text-base font-semibold mb-2">{service.name}</h2> {/* Service name */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-400 font-medium">Jane Cooper</span> {/* Author */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fifth;
