import React from 'react'
import { Link } from 'react-router-dom'; // If you're using React Router

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-teal-300 text-white text-center py-20 my-10">
      <h2 className="text-3xl mb-4">What's holding you back? Send me a message!</h2>
      <Link to="/contact" className="relative inline-block font-semibold py-2 px-4 border border-white rounded-md overflow-hidden group">
        <span className="block z-10 relative">Contact</span>
        <span className="absolute top-full left-0 w-full h-full bg-white group-hover:top-0 transition-all duration-300 ease-in-out"></span>
      </Link>
    </div>
  )
}

export default CallToAction;