// import React from 'react'

// export default function Review() {
//   return (
//     <div>
//         <div className=' text-purple-200 text-center pb-10'>CUSTOMER REVIEWS</div>
//         <div className='text-white text-6xl text-center'>Hear it from our Customers</div>
//     </div>
//   )
// }
import React from 'react';
import radial from '../assets/images/gradient-radial.png';


const CustomerReviewsSection = () => {
  return (
    <section className="relative  py-16 text-center text-white">
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div>
          <button className="bg-gray-700 bg-opacity-40 text-purple-500 px-16 py-2 rounded-full text-sm tracking-widest">
            CUSTOMER REVIEWS
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-24">
        <h2 className="text-3xl font-semibold">
          Hear it from our Customers
        </h2>

        <img className='w-3/5 h-1/4 -mt-28' src={radial}></img>

        <p className='text-white w-1/4'>
            The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
            volume that returns is a huge problem. Scale's LLMs are the tool that will allow the IC to finally and fully exploit all
            of that intelligence that has been collected.
        </p>
      </div>

      
        
      

      

      
    </section>
  );
};

export default CustomerReviewsSection;