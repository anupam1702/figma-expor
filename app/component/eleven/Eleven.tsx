import Link from 'next/link'
import React from 'react'

const Eleven = () => {
  return (
    <div>
       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Freequently asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Try for free
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="border-b py-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium text-gray-900">How does slice work?</h1>
            <span className="text-gray-500 text-xl font-bold"><Link href='/faq'>+</Link></span>
          </div>
          <div className="border-b py-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium text-gray-900">Is my data course?</h1>
            <span className="text-gray-500 text-xl font-bold"><Link href='/faq'>+</Link></span>
          </div>
          <div className="border-b py-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium text-gray-900">Does slice work well large team?</h1>
            <span className="text-gray-500 text-xl font-bold"><Link href='/faq'>+</Link></span>
          </div>
        
          <div className="border-b py-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium text-gray-900">How do create a new account?</h1>
            <span className="text-gray-500 text-xl font-bold"><Link href='/faq'>+</Link></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Eleven
