import React from 'react'
import graph from '../assets/images/Container (2).png'
import { useInView } from 'react-intersection-observer'

export default function Revenues() {
  const {ref:visual,inView:invisual} = useInView();
  const {ref:imh,inView:inimh} = useInView();
   return (
    <div className='lg:flex md:flex md:flex-col md:justify-center md:items-center lg:flex-row lg:mb-20'>
      <div ref={visual} className={`lg:w-1/2 text-center flex flex-col justify-center items-center ${invisual?'animate-fadeInLeft delay-500':''}`}>
        <p  className={`text-purple-400 font-roboto lg:text-xl pb-4 `}>Visualize info</p>
        <h1 className='text-white  font-roboto font-bold  lg:text-4xl lg:w-3/4 pb-4 sm:w-1/2 text-2xl '>Our revenue projections over the next two years are very  promising, with expected revenue tripling from year one  to year two.
        </h1>
        <p className='text-gray-300 font-bold lg:text-2xl pb-3 w-3/4'>This growth is a testament to the strength of our product and the dedication of our team to driving success.</p>
      </div>
      <div ref={imh} className={`lg:w-1/1 ${inimh?'animate-fadeInRight delay-500':''}`}>
        <img src={graph} className='lg:w-full lg:h-full mr-10' alt="graph" /></div>

    </div>
  )
}
