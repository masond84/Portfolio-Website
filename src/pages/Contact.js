import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import Alerts from '../components/Alerts';
import useAlert from '../hooks/useAlert';
import Footer from '../components/Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const { alert, showAlert, hideAlert } = useAlert(); 

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log(process.env)
    emailjs.send(
      'service_7bf0yoi',
      'template_b8t4hcz',
      {
        from_name: form.name,
        to_name: "Devin",
        from_email: form.email,
        to_email: 'devin.masno@spartans.ut.edu',
        message: form.message
      },
      'u-xSsHFlFJxmbnk37'
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, [3000]);
    },
    (error) => {
      setIsLoading(false);
      console.error(error);

      showAlert({
        show: true,
        text: "I didn't receive your message",
        type: "danger",
      });
    }
  );
};


  return (
    <>
    <section className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        { alert.show && <Alerts {...alert} />}
        
        <div className='w-full max-w-2xl px-6 py-8 bg-white shadow-md rounded-md'>
          <h1 className='text-center sm:text-5xl text-3xl font-semibold sm:leading-snug bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500'>
            Get In Touch
          </h1>

          <form 
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'>
            <label className='text-black-500 font-semibold'>
              Name
              < input
                type='text'
                name='name'
                className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
                placeholder='What is your name?'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              < input
                type='email'
                name='email'
                className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
                placeholder='example@email.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Your Message
              < input
                name='message'
                rows={4}
                className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
                placeholder='Let me know how I can help'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact