import React from 'react'
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';

const servicesOffered = [
  {
    name: 'Web Development',
    description: 'Custom websites and web applications using modern frameworks and technologies.',
    theme: 'bg-pink-500',
  },
  {
    name: 'Lead Generation',
    description: 'description',
    theme: 'bg-blue-500',
  },
  {
    name: 'Web & Data Scraping',
    description: 'description',
    theme: 'bg-slate-500',
  },
  {
    name: 'Data Entry',
    description: 'description',
    theme: 'bg-slate-500',
  },
  {
    name: 'Web & Data Scraping',
    description: 'description',
    theme: 'bg-slate-500',
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
          <p>
            Discover the professional services I offer to help bring your projects to life.
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
                  <div className='mt-5 flex items-center gap-2'>
                    <AnimatedButton link={service.link} text="Learn More" />
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
      <Footer/>
    </>
  )
}

export default Services