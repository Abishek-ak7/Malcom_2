
import React from 'react'
import video from '../assets/images/Container (3).png'

export default function Understanding() {
  return (
    <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
              <div>
                <h1 className='text-white  text-7xl font-bold font-arial'>Better Understanding</h1>
              </div>
              <div>
                <h1 className='text-6xl bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text font-arial font-bold'>About our Services</h1>
              </div>
          </div>
          <div>
              <img src={video} className='' alt="Services_Video" />
          </div>
      </div>
  )
}
