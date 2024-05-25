import React from 'react';
import radial from '../assets/images/gradient-radial.png';


const CustomerReviewsSection = () => {
  return (
    <section className="relative  py-16 text-center text-white">
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div>
          <button className="bg-gray-700 bg-opacity-40 text-purple-500 px-8 py-2 rounded-full text-sm tracking-widest">
            CUSTOMER REVIEWS
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <h2 className="text-3xl font-semibold">
          Hear it from our Customers
        </h2>
      </div>

      <div className='relative'>
        <img className=' className="absolute top-0 ml-20 transform -translate-y-1/3' src={radial}></img>
      </div>

      <div className='mx-auto'>
        <p className='text-white'>
            The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
            volume that returns is a huge problem. Scale's LLMs are the tool that will allow the IC to finally and fully exploit all
            of that intelligence that has been collected.
        </p>
       </div>

      
    </section>
  );
};

export default CustomerReviewsSection;
