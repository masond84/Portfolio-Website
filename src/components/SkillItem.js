import React from 'react';
import { useSpring, animated } from 'react-spring';

const SkillItem = ({ skill, percentage }) => {
  const barAnimation = useSpring({ width: percentage });

  return (
    <div className='block-container relative w-full mb-8'>
      <div className='rounded-xl absolute inset-0 bg-white shadow-lg' />
      <div className='rounded-xl relative flex flex-col justify-center items-center bg-white p-4'>
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className='w-1/2 h-1/2 object-contain mb-2 transition-transform duration-300 transform hover:scale-125'
        />
        <h4 className='text-md font-semibold'>{skill.name}</h4>
        <p className='text-xs text-gray-500'>{skill.type}</p>
        <animated.div className='h-2 bg-gray-200 w-full mt-2' style={barAnimation}>
          <div className='h-full bg-green-400' />
        </animated.div>
      </div>
    </div>
  );
};