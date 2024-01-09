import React from 'react'
import { useSpring, animated } from 'react-spring';
import  {projects} from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';

const Projects = () => {
  return (
    <>
    <section className='container px-12 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
      {/* Header */}
      <h1 className='text-center sm:text-5xl text-2xl font-semibold sm:leading-snug my-10'>
        My <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 font-semibold drop-shadow-lg'>Projects</span>
      </h1>
      <div className='text-center mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Talk about how I have embarked on numerous projects.
        </p>
      </div>

      {/* Projects Section */}
      <div className='flex flex-wrap justify-center my-10 gap-20'>
        {projects.map((project) => (
          <div className='flex justify-center my-10' key={project.name}>
            <div className='w-full sm:w-[300px] lg:w-[350px] xl:w-[400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 mx-auto'>
            <div className='block-container' style={{ width: '12rem', height: '12rem', position: 'relative', perspective: '500px' }}>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2'>
                <AnimatedButton link={project.link} />
              </div>
            </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <hr className='border-slate-200' />

      <section className='w-full flex justify-between items-center md:flex-row flex-col py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <div className='flex-1 max-w-[50%]'> {/* Adjust max-width as needed to control the width of the text */}
          <p className='text-black font-extrabold text-3xl lg:text-left text-center'>
            Have a project in mind? <br /> Let's Build Something Together
          </p>
        </div>
        <div className='flex justify-center lg:justify-start mt-8 md:mt-0'>
          <AnimatedButton text="Contact Me" link="/contact" />
        </div>
      </section>
    </section>
    < Footer />
    </>
  )
}

export default Projects