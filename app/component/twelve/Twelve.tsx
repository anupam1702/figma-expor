import Image from 'next/image'
import React from 'react'
import { FaFacebook,FaTwitter,FaGoogle } from "react-icons/fa";

const Twelve = () => {
  return (
    <div>
  <div className="min-h-screen bg-gray-50">
    {/* Promo Section */}
    <div className="bg-blue-600 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="relative w-64 h-64 md:w-72 md:h-72 md:mr-12">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OueyDhWFfuuSLheCNFGBYcOWKAbhP_BYqQ&"
          alt="Student"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Register & Enroll Now, <br /> and Get <span className="text-black">69% Discount</span>
        </h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
            Start Free Trial
          </button>
          <span className="text-lg font-semibold">$19.00/month</span>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <div className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Description */}
        <div>
          <p className="text-gray-600 mb-6">
            A service a transaction in which no physical goods are transferred from the seller to the buyer. The benefits of such a service are
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Test Exam</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Courses Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">UI/UX</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Design</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Business</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile and Banking</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Get Update Newsletter</h3>
          <p className="text-gray-600 mb-4">Subscribe to get the latest news from us</p>
          <form className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700">
              &rarr;
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500">
        Copyright &copy; 2022
      </div>
    </div>
  </div>
</div>
  )
}

export default Twelve
