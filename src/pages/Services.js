import React from 'react'
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';
import { webdev, terminal, database, magnet, cloud } from '../assets/icons';

const servicesOffered = [
  {
    iconUrl: webdev,
    name: 'Web Development',
    description: "Craft bespoke websites and web apps with a focus on performance and user-centric design, ensuring alignment with client's vision and goals.",
    theme: 'bg-blue-500',
  },
  {
    iconUrl: magnet,
    name: 'Lead Generation',
    description: 'Deploy cutting-edge techniques to identify and score potential leads, enhancing business opportunities with precision.',
    theme: 'bg-green-500',
  },
  {
    iconUrl: cloud,
    name: 'Web & Data Scraping',
    description: 'Expertise in extracting and refining web data using advanced scraping technologies, turning information into actionable insights.',
    theme: 'bg-yellow-500',
  },
  {
    iconUrl: database,
    name: 'Data Entry & Analysis',
    description: 'Efficiently manage and analyze data, utilizing automation and optimization to support strategic decision-making.',
    theme: 'bg-red-500',
  },
  {
    iconUrl: terminal,
    name: 'Algorithm Development',
    description: 'Design and implement innovative algorithms to streamline and automate processes, ensuring accuracy and efficiency in data operations.',
    theme: 'bg-purple-500',
  },
];

const Services = () => {
  return (
    <>
      <section className='container px-12 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        {/* Header */}
        <h1 className='text-center sm:text-5xl text-2xl font-semibold sm:leading-snug my-10'>
          My <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300 font-semibold drop-shadow-lg'>Services</span>
        </h1>
        <div className='text-center mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='max-w-lg mx-auto text-center px-2'>
          Harness my expertise in web solutions and data strategies to empower your business growth and digital innovation.
          </p>
        </div>

        {/* Services Section */}
        <div className='flex flex-wrap justify-center my-10 gap-20'>
          {servicesOffered.map((service) => (
            <div className='flex justify-center my-10' key={service.name}>
              <div className='w-full sm:w-[300px] lg:w-[350px] xl:w-[400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 mx-auto'>
                <div className='block-container'  style={{ width: '12rem', height: '12rem', position: 'relative', perspective: '500px' }}>
                  <div className={`btn-back rounded-xl ${service.theme}`} />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={service.iconUrl}
                      alt={`${service.name} Icon`}
                      className='w-1/2 h-1/2 object-contain's
                    />
                  </div>
                </div>

                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-semibold'>
                    {service.name}
                  </h4>
                  <p className='mt-2 text-slate-500'>
                    {service.description}
                  </p>
                  {/*
                  <div className='mt-5 flex items-center gap-2'>
                    <AnimatedButton link={service.link} text="Learn More" />
                  </div>
                  */}
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
      <Footer/>
    </>
  )
}

export default Services