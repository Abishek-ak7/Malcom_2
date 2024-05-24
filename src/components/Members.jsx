import React from 'react'

export default function Members() {
  return (
    <div className='pb-32'>
        <div className='text-center font-arial text-7xl font-bold text-white pb-28'>Welcome our team members</div>
        <div className='flex-col space-y-28'>
            <div className='flex justify-around '>
             <p className='h-40 w-40 bg-white rounded-full'></p>
             <p className='h-40 w-40 bg-white rounded-full'></p>
             <p className='h-40 w-40 bg-white rounded-full'></p>
             <p className='h-40 w-40 bg-white rounded-full'></p> 
            </div>
            <div className='flex justify-evenly'>
            <p className='h-40 w-40 bg-white rounded-full'></p>
            <p className='h-40 w-40 bg-white rounded-full'></p>
            <p className='h-40 w-40 bg-white rounded-full'></p>

            </div>

        </div>

    </div>
  )
}
