import React from 'react';
import video from '../assets/images/Container (3).png';

export default function Understanding() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <h1 className='text-white text-4xl md:text-7xl font-bold font-roboto'>Better Understanding</h1>
        <h1 className='text-3xl md:text-6xl bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text font-roboto font-bold'>About our Services</h1>
      </div>
      <div>
        <img src={video} className='video' alt="Services_Video" />
      </div>
    </div>
  );
}
