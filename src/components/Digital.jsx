import React from 'react'
import star from '../assets/images/Mask group.png'
import arrow from '../assets/images/Group 134.png'
import cube from '../assets/images/Cube6 - Transparent.png'
import cone from '../assets/images/Cone1 - Transparent.png'

export default function Digital() {
  return (
    <div>
        <div className='flex justify-around mt-10 p-20'>
        <div className='pt-20 ml-20'>
            <img src={star} className=' w-36 h-36' alt="star" />
        </div>
        <div className='text-center pt-44'>
            <div className='text-white text-7xl font-arial font-bold'>Securing Your </div>
            <div className=' bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text  text-7xl font-arial font-bold'>Digital World.</div>
        </div> 

        <div className='pt-20'>
            <img src={cube}className=' mx-auto w-60 h-60' alt="" />
        </div>
        </div>



        <div className='flex justify-around '>
            <div>
            <img src={cone}className='w-60 h-60'alt="cone image" /></div>
            <div className=''><img src={arrow} className='w-40 h-40 'alt="arrow mark" /></div>
            <div><img src={star} className='w-36 h-36 ' alt="star" /></div>
        </div>

    </div>
  )
}
