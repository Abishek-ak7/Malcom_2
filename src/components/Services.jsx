import React from 'react';
import r1 from '../assets/images/Group.png';
import r2 from '../assets/images/Group (1).png'
import image1 from '../assets/images/Group 139.png'
import image2 from '../assets/images/Group 140.png'
import image3 from '../assets/images/Group 141.png'


export default function Services() {
  return (
    <div className='p-7'>
      <div className='mx-auto bg-black '>
        <img src={r1} className=' md:w-28 md:h-20 w-1/6' alt="side circles" />
        <p className=' md:text-8xl md:ml-14 md:pt-7 font-bold font-arial  md:p-5 text-white text-5xl'>Services</p>
        <img src={r2} className='md:w-28 md:h-20 ml-auto w-1/6' alt="circle image" />
        <div class="radial" className='text-center pb-4 '>
          <h1 className=' bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text  font-arial font-bold md:text-5xl text-3xl'>Secure Your Systems with Expert </h1>
          <h1 className='font-arial font-bold text-white md:text-5xl p-5 text-3xl'>Penetration Testing</h1>
        </div>
        <div className='flex flex-col justify-center items-center  sm:justify-center md:flex-row '>
          <div className="flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7">
            <img src={image1} className="md:w-1/4 md:pb-5 w-1/3 "alt="image1" />
            <h3 className='md:w-1/2 text-white font-bold  text-2xl mb-4 mt-5 w-full'>Expert Matching & Seamless Collaboration</h3>
            <p className='font-light text-gray-300 md:w-3/4 sm:w-1/3'>Find the perfect pentester and work together flawlessly within the platform.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7">
              <img src={image2} className="md:w-1/4 mb-4 w-1/3" alt="AI-Powered Prioritization" />
              <h3 className="text-white font-bold text-2xl  mt-6 sm:w-full">AI-Powered Prioritization</h3>
              <p className="font-light text-gray-300 md:w-3/4 mt-5 sm:w-1/3">Focus on what matters most - prioritize vulnerabilities based on real-world risk.</p>
          </div>

          <div className="flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7">
             <img src={image3} className="md:w-1/4 mb-4 w-1/3" alt="image3" />
                <h3 className="text-white font-bold text-2xl mb-4 w-full  mt-4">Automated Workflows & Remediation Assistance</h3>
                <p className="font-light text-gray-300 md:w-3/4 sm:w-1/3">Save time and effort with automated tasks and expert guidance</p>
          </div>
          </div>
      </div>
    </div>
  );
}