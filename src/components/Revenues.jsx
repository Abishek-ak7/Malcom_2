import React from 'react'
import graph from '../assets/images/Container (2).png'

export default function Revenues() {
  return (
    <div className='lg:flex md:flex md:flex-col md:justify-center md:items-center lg:flex-row'>
      <div className='lg:w-1/2 text-center flex flex-col justify-center items-center '>
        <p className='text-purple-400 font-arial lg:text-xl pb-4'>Visualize info</p>
        <h1 className='text-white  font-arial font-bold  lg:text-4xl lg:w-1/2 pb-4 sm:w-1/2 text-2xl'>Our revenue projections over the next two years are very  promising, with expected revenue tripling from year one  to year two.
        </h1>
        <p className='text-gray-300 font-bold lg:text-2xl pb-3 w-3/4'>This growth is a testament to the strength of our product and the dedication of our team to driving success.</p>
      </div>
      <div  className='lg:w-1/2'>
        <img src={graph} className='lg:w-full lg:p-12' alt="graph" /></div>

    </div>
  )
}
