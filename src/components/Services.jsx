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
        <img src={r1} className='md:w-28 md:h-20 sm:w-1/12' alt="side circles" />
        <p className=' md:text-8xl md:ml-14 md:pt-7 font-bold font-arial  md:p-5 text-white sm:text-6xl'>Services</p>
        <img src={r2} className='md:w-28 md:h-20 ml-auto sm:w-1/12' alt="circle image" />
        <div class="radial" className='text-center pb-4 '>
          <h1 className=' bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text  font-arial font-bold md:text-5xl sm:text-3xl'>Secure Your Systems with Expert </h1>
          <h1 className='font-arial font-bold text-white md:text-5xl p-5 sm:text-3xl'>Penetration Testing</h1>
        </div>
        <div className='flex md:flex-row justify-around pt-16 sm:flex-col '>
          <div className="flex flex-col items-center text-center w-1/3 sm:w-full sm:pb-20">
            <img src={image1} className="md:w-1/4 mb-4 sm:w-1/6"alt="image1" />
            <h3 className='md:w-3/5 text-white font-bold  text-2xl mb-4 mt-4'>Expert Matching & Seamless Collaboration</h3>
            <p className='font-light text-gray-300 md:w-3/4 sm:w-1/3'>Find the perfect pentester and work together flawlessly within the platform.</p>
          </div>
          <div className="flex flex-col items-center text-center w-1/3 sm:w-full sm:pb-20">
              <img src={image2} className="md:w-1/4 mb-4 sm:w-1/6" alt="AI-Powered Prioritization" />
              <h3 className="text-white font-bold text-2xl mb-4 mt-6">AI-Powered Prioritization</h3>
              <p className="font-light text-gray-300 md:w-3/4 mt-5 sm:w-1/3">Focus on what matters most - prioritize vulnerabilities based on real-world risk.</p>
          </div>

          <div className="flex flex-col items-center text-center w-1/3 sm:w-full sm:pb-20">
             <img src={image3} className="md:w-1/4 mb-4 sm:w-1/6" alt="image3" />
                <h3 className="text-white font-bold text-2xl mb-4 w-3/4 mt-4">Automated Workflows & Remediation Assistance</h3>
                <p className="font-light text-gray-300 md:w-3/4 sm:w-1/3">Save time and effort with automated tasks and expert guidance</p>
          </div>
          </div>
      </div>
    </div>
  );
}