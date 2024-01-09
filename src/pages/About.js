import React, { Suspense, useState, useEffect } from 'react'
import {skills, experiences} from '../constants';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { Canvas, useThree } from '@react-three/fiber';
import { useSpring, animated } from 'react-spring';
import { Model } from '../models/Robot';
import 'react-vertical-timeline-component/style.min.css';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

const SkillItem = ({ skill, percentage }) => {
  const barAnimation = useSpring({ width: percentage });

  // Define styles for the skill bar container
  const skillBarContainerStyles = {
    marginTop: '1rem', // Space between icon and text container
    textAlign: 'center', // Center the text
  };
  return (
    <div className='block-container relative w-full mb-8'>
      {/* Icon container */}
      <div className='relative flex justify-center items-center'>
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className='w-1/2 h-1/2 object-contain transition-transform duration-300 transform hover:scale-125'
        />
      </div>

    </div>
  );
};

const About = () => {
  const [modelScale, setModelScale] = useState(5); // Set your initial scale
  const [containerStyle, setContainerStyle] = useState({
    width: '50%', // Set width to 100% by default
    height: '60vh', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  // Adjust model scale based on window size
  useEffect(() => {
    function updateModelScale() {
      const screenWidth = window.innerWidth;
      // Adjust these as needed based on your design
      if (screenWidth < 768) {
        setModelScale(2); // Smaller scale for smaller screens
        setContainerStyle(prev => ({ ...prev, height: '30vh' }));
      } else {
        setModelScale(5); // Larger scale for larger screens
        setContainerStyle(prev => ({ ...prev, height: '60vh' }));
      }
    }

    window.addEventListener('resize', updateModelScale);
    updateModelScale(); // Initial check

    return () => window.removeEventListener('resize', updateModelScale);
  }, []);

  return (
    <section className='w-full h-screen'>
      <section className='bg-gray-900 text-white body-font shadow-2xl'>
        {/* Hero Section*/}
        <div className='flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-20 lg:px-20' >
          {/* Model Content */}
          <div className='relative w-full md:w-1/2 lg:w-3/5 h-full flex justify-center items-center md:order-1' style={containerStyle}>
            <Canvas className="w-full h-full" dpr={[1,2]} shadows camera={{position: [0, 0, 18], fov:90}}>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Model />
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} 
                              minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
          
          
          {/* Text Content */}
          <div className='md:w-1/2 lg:w-2/5 space-y-4 md:order-2'>
            <h1 className="text-4xl md:text-5xl font-bold">Get To Know Me...</h1>
            <p className='mt-4 text-lg text-slate-300'>I am a passionate and innovative Computer Science Major from the University of Tampa. With experience as a Data Analyst Intern at a leading Mergers and Acquisition Investment Firm. And expansive experience in Full-Stack, Software Devlopment, and Machine Learning - I hope to forge a continuous path of success and life long learning.</p>
            <div className='mt-8'>
              <Link to='/projects' className="relative inline-block font-semibold py-2 px-4 border border-white rounded-md overflow-hidden group focus:outline-none">
                <span className="block z-10 relative">VIEW PROJECTS</span>
                <span className="absolute top-full left-0 w-full h-full bg-white group-hover:top-0 transition-all duration-300 ease-in-out"></span>
              </Link>
              <a 
              href='/Devin_Mason_Resume_2023.pdf'
              download={'/Devin_Mason_Resume_2023.pdf'}
              className="relative inline-block font-semibold py-2 px-4 border border-blue-500 text-blue-700 rounded-md overflow-hidden group focus:outline-none ml-4"
              >
                <span className="block z-10 relative">VIEW RESUME</span>
                <span className="absolute top-full left-0 w-full h-full bg-blue-500 opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 flex flex-col">
        <h3 className=" text-center font-semibold sm:text-3xl text-xl relative">Tools and Technologies of The Future</h3>
        <div className="text-center mt-5 flex flex-col gap-3 text-slate-500">
          <p className='max-w-lg mx-auto text-center px-2'>
          In the rapidly evolving tech landscape, I thrive on staying ahead of the curve. The tools and technologies I employ in my projects not only drive efficiency but also inspire creativity. From robust frameworks to intelligent algorithms, I enjoy exploring and mastering the technologies that are shaping the future.
          </p>
      </div>
        <div className="mt-16 flex flex-wrap gap-20 justify-center">
          {skills.map((skill) => (
            <>
            <div className='block-container relative w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl absolute inset-0 bg-white shadow-lg'/>
              <div className='btn-front rounded-xl relative flex justify-center items-center bg-white'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 transform hover:scale-125'
                />
              </div>
              <SkillItem skill={skill} percentage={`${skill.percentage}%`} key={skill.name} />
            </div>
            <div className='relative flex flex-col justify-center items-center'>
              <h4 className='text-md font-semibold'>{skill.name}</h4>
              <p className='text-xs text-gray-500'>{skill.type}</p>
            </div>
            </>
          ))}
        </div>
      </div>

      <div className='py-16'>
          <h3 className='text-center font-semibold sm:text-3xl text-xl relative'>Work Experience</h3>
          <div className="text-center mt-5 flex flex-col gap-3 text-slate-500">
            <p className='max-w-lg mx-auto text-center px-2'>
            My professional journey spans different sectors and company sizes. From agile startups to established corporate environments, I've had the privilege of contributing to numerous projects, each offering unique challenges and learning opportunities.
            </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className="flex justify-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  
                  </div>}
                  iconStyle={{ background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-semibold'>
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base"
                      style={{margin:0}}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>
      <hr className='border-slate-800' />
      <div className='bg-gray-900'>
        <hr className='border-slate-200' />
        <CallToAction />
        <Footer />    
      </div>   
    </section>
  )
}

export default About