"use client";
import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";


const TestimonialSection: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-3xl font-bold text-center mb-8">What Our <span className='text-blue-500'>Community Says!</span></h2>
      <p className="text-center text-gray-500 mb-10 px-4 sm:px-8 lg:px-16">
        Data analysis software is a type of software tool used for data analysis and <br /> reporting. It is designed to help businesses, organizations.
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">

        {/* Testimonial 1 */}
        <Link
          href="#"
          className="p-4 max-w-xs sm:max-w-sm rounded-xl hover:shadow-md hover:shadow-indigo-50 flex flex-col items-center"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
            alt="Exercise Illustration"
            width={400}
            height={300}
            className="shadow rounded-lg overflow-hidden border"
          />
          <div className="mt-4 text-center">
            <h4 className="font-bold text-lg">Dr. Jhon Doe</h4>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi fuga sed architecto tenetur repellendus aspernatur laborum temporibus vitae natus nostrum voluptatibus dignissimos rerum quas, 
              saepe nam eum quae libero expedita totam necessitatibus eos aut!
            </p>
          </div>
        </Link>

        {/* Testimonial 2 */}
        <section className="mb-2 border bg-neutral-100 p-3 rounded-lg max-w-xs sm:max-w-sm">
          <div className="mx-auto">
            <div className="card flex flex-col sm:flex-row max-w-xs">
              <div className="w-16 h-16 mx-auto mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
                  alt="User Avatar"
                  width={55}
                  height={55}
                  className="object-cover rounded-full mx-auto"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <p className="font-bold">Jhon Dev</p>
                <h3 className="text-lg heading">Coaching of Halai Lab</h3>
                <p className="mt-2 mb-3 text-sm">
                  If you are coaching individuals or teams in specific areas like sports, business, 😎
                  or fitness, you may receive feedback in the form of improved performance metrics
                  such as increased revenue, improved athletic performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial 3 */}
        <div className="border max-w-xs sm:max-w-sm">
          <div
            className="h-64 w-full bg-gray-200 rounded border bg-neutral-100 mt-7 flex flex-col justify-between p-4 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&')",
            }}
          >
            <div className="flex justify-between">
              {/* <input type="checkbox" className="cursor-pointer" /> */}
            </div>
            <div className="flex">
              <span className="flex uppercase block w-full text-xs bg-blue-500 p-0.5 border-blue-500 border rounded text-white font-medium select-none">
                <span className="mr-1"><FaRegCirclePlay /></span>
                Jorden Nilson
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <section className="mb-2 border mt-20 sm:mt-8 ml-5 bg-neutral-100 p-3 rounded-lg max-w-xs sm:max-w-sm">
          <div className="mx-auto">
            <div className="card flex flex-col sm:flex-row max-w-xs">
              <div className="w-16 h-16 mx-auto mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
                  alt="User Avatar"
                  width={55}
                  height={55}
                  className="object-cover rounded-full mx-auto"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <p className="font-bold">Jhon Dev</p>
                <h3 className="text-lg heading">Coaching of Halai Lab</h3>
                <p className="mt-2 mb-3 text-sm">
                  If you are coaching individuals or teams in specific areas like sports, business, 😎
                  or fitness, you may receive feedback in the form of improved performance metrics
                  such as increased revenue, improved athletic performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialSection;
