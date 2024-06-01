import React from 'react';
import Plx from 'react-plx';
import star from '../assets/images/Mask group.png';
import arrow from '../assets/images/Group 134.png';
import cube from '../assets/images/Cube6 - Transparent.png';
import cone from '../assets/images/Cone1 - Transparent.png';

export default function Digital() {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: 50,
          property: "translateY",
          unit: 'px', // Specify the unit for clarity
        },
        {
          startValue: 1,
          endValue: 1.2,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <div className='pb-32'>
      <div className='flex justify-around'>
        <Plx parallaxData={parallaxData} className="transition-item">
          <img src={star} className='w-36 h-36' alt="star" />
        </Plx>
        <div className='text-center pt-44 pb-20'>
          <h1 className='text-white text-7xl font-arial font-bold'>Securing Your</h1>
          <h1 className='bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text text-7xl font-arial font-bold'>Digital World.</h1>
        </div>
        <Plx parallaxData={parallaxData} className="transition-item">
          <img src={cube} className='mx-auto w-60 h-60' alt="cube" />
        </Plx>
      </div>
      <div className='flex justify-around'>
        <Plx parallaxData={parallaxData} className="transition-item">
          <img src={cone} className='w-60 h-60' alt="cone" />
        </Plx>
        <Plx parallaxData={parallaxData} className="transition-item">
          <img src={arrow} className='w-40 h-40' alt="arrow" />
        </Plx>
        <Plx parallaxData={parallaxData} className="transition-item">
          <img src={star} className='w-36 h-36' alt="star" />
        </Plx>
      </div>
    </div>
  );
}
