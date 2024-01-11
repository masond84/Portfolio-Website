import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <hr className='border-t border-gray-700'/>
        <div className='max-w-6xl mx-auto grid grid-cols-1 py-10 sm:grid-cols-3 gap-8 text-center sm:text-left'>
            <div  className="md:pl-4 lg:pl-8">
                <h2 className='text-xl font-semibold mb-2'>About</h2>
                <p>
                Hello, my name is Devin Mason.
                Welcome to the world where technology meets local business innovation.
                Through creative problem-solving and a collaborative spirit, my goal is to empower and transform various business landscapes.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Links</h2>
                <nav>
                    <ul>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
                        <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Contact</h2>
                <ul>
                    <li><a href="https://github.com/masond84" className="hover:text-gray-300">Github</a></li>
                    <li><a href="mailto:devin.mason@spartans.ut.edu" className="hover:text-gray-300">devin.mason@spartans.ut.edu</a></li>
                    <li>+1(410)-450-9139</li>  
                    <li>Tampa, Florida || United States</li>
                </ul>
            </div>
        </div>
        <hr className='border-t border-gray-700' /> {/* Bottom horizontal line before the last div */}
        <div className='text-center pt-8'>
            <p>@ Devin Mason 2024</p>
        </div>
    </footer>
  )
}

export default Footer;