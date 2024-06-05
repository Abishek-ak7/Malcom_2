import React from 'react';

export default function Members() {
  return (
    <div className='pb-32'>
      <div className='text-center font-arial text-4xl md:text-7xl font-bold text-white pb-16 md:pb-28'>
        Welcome our team members
      </div>
      <div className='space-y-16 md:space-y-28'>
        <div className='flex flex-wrap justify-center gap-8 md:gap-32'>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
        </div>
        <div className='flex flex-wrap justify-center gap-8 md:gap-36'>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
          <p className='h-32 w-32 md:h-40 md:w-40 bg-white rounded-full'></p>
        </div>
      </div>
    </div>
  );
}

