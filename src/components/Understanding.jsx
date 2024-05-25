import React from 'react'
import video from '../assets/images/Container (3).png'

function Understanding() {
  return (
    <div className='flex-col pb-32'>
        <div className='text-center '>
            <div className='text-white  text-7xl font-bold font-arial'>Better Understanding</div>
            <div className='text-4xl bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text font-arial font-bold'>About our Services</div>
        </div>
        <div>
            <img src={video} className=' ml-72' alt="" />
        </div>

    </div>
  )
}
export default Understanding;
