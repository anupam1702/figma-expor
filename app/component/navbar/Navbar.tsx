import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-center p-4">
        <h1 className="text-xl font-bold mb-4 sm:mb-0">CSExplained</h1>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link className="bg-blue-500 border text-white rounded-full p-2" href="/">* Home</Link>
          <Link className="bg-white border text-black rounded-full p-2" href="/courses">Courses</Link>
          <Link className="bg-white border text-black rounded-full p-2" href="/faq">FAQ</Link>
          <Link className="bg-white border text-black rounded-full p-2" href="/blogs">Blog</Link>
          <Link className="bg-white border text-black rounded-full p-2" href="/contacts">Contact Us</Link>
        </nav>
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-0">
          <button className="px-4 py-2 border rounded-full mb-2 sm:mb-0 sm:mr-2">Login</button>
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">Sign Up</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
