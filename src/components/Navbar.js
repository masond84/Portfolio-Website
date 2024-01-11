import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faLaptop, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { volumeoff, volumeon } from '../assets/icons';
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const audioref = useRef(new Audio('/background-music.mp3'));
    useEffect(() => {
      audioref.current.volume = 0.5;
      audioref.current.play().catch(() => setIsMusicPlaying(false));
    }, []);

    const toggleMusic = () => {
      if (isMusicPlaying) {
        audioref.current.pause();
      } else {
        audioref.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    };


    return (
    <>
        {/* Overlay */}
        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-20 transition-opacity duration-300" onClick={toggleSidebar}></div>
        )}

        <nav className='bg-[#F3F3F3] shadow-2xl text-[#000000] border-b border-gray-300' style={{ marginBottom: '-10px'}}>
            <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-between items-center'>
                {/* Left side - Logo and navigation links for large screens */}
                <div>
                <Link to="/" className="flex items-center space-x-2">
                    <img
                      src='/Devin.svg'
                      alt='Dein Mason'
                      className='transition duration-300 ease-in-out transform hover:-translate-y-2' // Tailwind classes for hover effects
                      style={{
                        height: 'auto', width: 'auto', objectFit: 'contain', marginTop: '-30%', marginBottom: '-25%', paddingBottom: '-1000px'
                      }}
                    />
                </Link>
                </div>

                <div className="flex items-center space-x-1">
                    <Link to="/about" className="py-3 px-2 text-lg md:text-md text-[#000000] font-semibold hover:text-[#0061ff] transition duration-1000 ease-in-out transform hover:-translate-y-1">About Me</Link> 
                    {/*<Link to="/about" className="py-3 px-2 text-base md:text-md text-[#000000] font-semibold hover:text-[#0061ff] transition duration-1000 ease-in-out transform hover:-translate-y-1">Blog</Link> {/*Do Not Implement Yet*/}
                    {/* More links */}
                </div>

                {/* Right side - Hamburger icon */}
                <div className="flex items-center">
                <button onClick={() => setIsSidebarOpen(true)} className="text-[#000000] rounded-full p-2 hover:bg-gray-600 hover:bg-opacity-15 transition duration-300">
                    {/* Hamburger Icon SVG */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>
                
            </div>
            </div>
        </nav>

      {/* Sidebar for all screen sizes */}
      <Transition
        show={isSidebarOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
        className="fixed inset-y-0 right-0 z-30 w-64 bg-gray-900 p-6 transform shadow-2xl"
      >
        <div className="flex flex-col h-screen text-white">
          <button onClick={toggleSidebar} 
                    className="relative rounded-full p-2 hover:bg-gray-600 hover:bg-opacity-15 transition duration-300"
          >
            {/* Close (X) Icon SVG */}
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-2">
            <Link to="/projects" className="py-2 transition duration-700 text-white hover:text-[#9c99a9] flex items-center gap-5">
              <FontAwesomeIcon icon={faLaptop} />
              Projects
            </Link>
            <Link to="/services" className="py-2 transition duration-700 text-white hover:text-[#9c99a9] flex items-center gap-5">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Services
            </Link>
            <Link to="/contact" className="py-2 transition duration-700 text-white hover:text-[#9c99a9] flex items-center gap-5">
              <FontAwesomeIcon icon={faAddressBook} />
              Contact
            </Link>
            {/* More sidebar links */}
            <div className=""> {/* Padding if you want some space around the button */}
              <button
                onClick={toggleMusic}
                className="py-2 transition duration-700 text-white hover:text-[#9c99a9] flex items-center gap-5"
              >
                {isMusicPlaying ? (
                  <>
                    <img src={volumeon} alt='Volume High' className='w-6 h-6' />
                    Pause Music
                  </>
                ) : (
                  <>
                    <img src={volumeoff} alt='Volume Off' className='w-6 h-6' />
                    Play Music
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </Transition>
    </>

    );
};


export default Navbar