
import React from 'react';
import star from '../assets/images/Mask group.png';
import arrow from '../assets/images/Group 134.png';
import cube from '../assets/images/Cube6 - Transparent.png';
import cone from '../assets/images/Cone1 - Transparent.png';

export default function Digital() {
  return (
    <div className='pb-32'>
        <div className='flex justify-between '>
        <div className='pt-'>
            <img src={star} className=' w-2/5' alt="star" />
        </div>
        <div className='pt-'>
            <img src={cube} className=' mx-auto w-2/5' alt="cube" />
        </div>
        </div>
        <div className='flex justify-center text-center items-center pt-5 pb-10  w-full'>
            <h1 className='text-white md:text-7xl lg:text-7xl w-4/5  lg:w-1/2 text-4xl font-arial  font-bold'>Securing Your <span className=' bg-gradient-to-tr h-20 from-blue-500 to-pink-500 text-transparent bg-clip-text  font-arial font-bold'>Digital World.</span></h1>
        </div> 
        


       
        <div className='flex justify-around'>
            <img src={cone} className='w-1/6' alt="cone image" />
            <img src={arrow} className='w-1/6' alt="arrow mark" />
            <img src={star} className=' w-2/12' alt="star" />
        </div>

    </div>
  )
}