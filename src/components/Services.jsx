import React from 'react';
import r1 from '../assets/images/Group.png';
import r2 from '../assets/images/Group (1).png'
import image1 from '../assets/images/Group 139.png'
import image2 from '../assets/images/Group 140.png'
import image3 from '../assets/images/Group 141.png'
import { useInView } from 'react-intersection-observer';



export default function Services() {
    const {ref:service,inView:inservice} = useInView();
    const {ref:service1,inView:inservice1} = useInView();

    const {ref:service2,inView:inservice2} = useInView();

    const {ref:service3,inView:inservice3} = useInView();


  return (
    <div className='p-7' id='services'>
      <div className='mx-auto bg-black '>
        <img src={r1} className=' md:w-28 md:h-20 w-1/6' alt="side circles" />
        <p ref={service} className={` md:text-8xl md:ml-14 md:pt-7 font-bold font-roboto  md:p-5 text-white text-5xl ${inservice?'animate-fadeInLeft':''}`}>Services</p>
        <img src={r2} className='md:w-28 md:h-20 ml-auto w-1/6' alt="circle image" />
        <div class="radial" className='text-center pb-4 '>
          <h1 className=' bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text  font-roboto font-bold md:text-5xl text-3xl'>Secure Your Systems with Expert </h1>
          <h1 className='font-roboto font-bold text-white md:text-5xl p-5 text-3xl'>Penetration Testing</h1>
        </div>
        <div className='flex flex-col justify-center items-center  sm:justify-center md:flex-row '>
          <div ref={service1} className={`flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7 md:mt-20 lg:mt-16 ${inservice1?'animate-fadeInLeft delay-300':''}`}>
            <img src={image1} className="md:w-1/4 md:pb-5 w-1/3  "alt="image1" />
            <h3 className='md:w-3/4 text-white font-bold  text-2xl mb-4 mt-5 w-full'>Bug Bounty</h3>
            <p className='font-light text-gray-300 md:w-3/4 w-full'> Malicious hackers don't always follow a predefined security methodology like penetration 
                    testers, and Unlike automated tools which  only scratch the surface.  
                
                    We connect with the brightest cybersecurity researchers on earth and beat cybercriminals by 
                    staying on top of the evolving threat landscape.</p>
          </div>
          <div ref={service2} className={`flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7 md:mt-10 ${inservice2?'animate-fadeInLeft delay-400':''}`}>
              <img src={image2} className="md:w-1/4 mb-6 w-1/3" alt="AI-Powered Prioritization" />
              <h3 className="text-white font-bold text-2xl  mt-6 sm:w-full md:mb-6">Crowdsourcing</h3>
              <p className="font-light text-gray-300 md:w-3/4 mt-1 w-full md:leading-relaxed ">Utilize our crowdsourcing platform to harness the collective intelligence of diverse contributors, enabling rapid problem-solving and innovation across various domains. 
              </p>
          </div>

          <div ref={service3} className={`flex flex-col items-center text-center lg:w-1/3 sm:w-3/4 pb-7 md:mt-10 lg:mt-16 ${inservice3?'animate-fadeInLeft delay-900':''}`}>
             <img src={image3} className="md:w-1/4 mb-4 w-1/3" alt="image3" />
                <h3 className="text-white font-bold text-2xl mb-4 w-full  mt-4"> Hardware Devices </h3>
                <p className="font-light text-gray-300 md:w-3/4 w-full">Discover our selection of user-friendly hardware devices designed to inspire innovation and 
                    experimentation in cybersecurity. 
                    Our products feature open hardware designs, accessible interfaces, and flexible licensing.
                  </p>
          </div>
          </div>
      </div>
    </div>
  );
}