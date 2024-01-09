import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import Alerts from '../components/Alerts';
import useAlert from '../hooks/useAlert';
import { useSpring, animated } from 'react-spring';
import { Model } from '../models/Orb';
import Footer from '../components/Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  // Add the hover state for the animation
  const [hover, setHover] = useState(false);

  // Define the animation using useSpring
  const animation = useSpring({
    width: hover ? '100%' : '0%', // Animate width from 0% to 100%
    backgroundColor: hover ? '#60efff' : '#0061ff', // Adjust colors as needed
    position: 'absolute',
    height: '100%',
    zIndex: 0,
    left: 0,
    top: 0,
    transition: 'width 0.1s',
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: 'Devin',
        from_email: form.email,
        to_email: 'dev.rmason@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: show success message
      showAlert({show: true, text: 'Message Sent Succesfully', type:'success'})
      // TODO: Hide an alert

      setTimeout(() => {
        hideAlert();
        setForm({name: '', email: '', message: ''});

      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      // TODO: Show error message
      showAlert({show:true, text: 'I did not recieve your message', type:'danger'})
    })
  };


  return (
    <>
    <section className='flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-4 lg:px-0'>
      {alert.show && <Alerts {...alert}/>}
      
      <div className='w-full max-w-md mx-auto bg-white py-5 px-5 md:px-2'>
        <h1 className='text-3xl font-bold text-center mb-4'>Get In Touch</h1>
      
        <form
          ref={formRef}
          className='flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-sm font-semibold'>Name</label>
            <input
              id='name'
              type='text'
              name='name'
              className='mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-sm font-semibold'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              className='mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message' className='text-sm font-semibold'>Your Message</label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='mt-1 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
              placeholder='Let me know how I can help you'
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type='submit'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`mt-4 w-full relative font-medium text-sm rounded-md overflow-hidden focus:outline-none ${
              isLoading ? 'cursor-not-allowed bg-gray-500 text-black' : 'bg-transparent text-black'
            }`}
            style={{
              padding: '0.75rem 1rem', // Adjust padding as needed
            }}
            disabled={isLoading}
          >
            <animated.div style={animation} />
            <span style={{ position: 'relative', zIndex: 1 }}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={-0.25} />
              <Model />
          </Suspense>
        </Canvas>
      </div>
    </section>
    <hr className='border-slate-800' />
    <div className='bg-gray-900'>
      <hr className='border-slate-200' />
      <Footer />    
    </div> 

    </>
  )
}

export default Contact