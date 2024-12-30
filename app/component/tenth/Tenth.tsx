import Image from 'next/image'
import React from 'react'

const Tenth = () => {
  return (
    <div>
        
    <h2 className="text-3xl mt-10 font-bold text-center mb-8">Our <span className='text-blue-500'>Blog</span></h2>
  <p className="text-center text-gray-500 mb-10">
    
    Data analysis software is a type of software tool used for data analysis and <br /> reporting. It is designed to help businesses, organizations.
  </p>
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perspective Community</h3>
            <p className="text-gray-700 mb-4">Where marketers and recruiters exchange insights on a daily basis.</p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="mt-4 rounded">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
              alt="Perspective Community"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-50 rounded-lg shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Funnel Crash Course</h3>
            <p className="text-gray-700 mb-4">The popular 60-minute mobile funnel crash course, moderated live.</p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="mt-4 rounded">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
              alt="Mobile Funnel Crash Course"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-50 h-64 rounded-lg shadow-md p-6 md:col-span-2 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Funnel Marketing Academy</h3>
            <p className="text-gray-700 mb-4">Our Head of Content, Leni, guides you through your first successful funnel.</p>
            <a
              href="#"
              className="text-yellow-600 font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="ml-4 w-32 h-32">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
              alt="Mobile Funnel Marketing Academy"
              width={128}
              height={300}
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tenth
