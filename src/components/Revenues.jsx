import React from 'react'
import graph from '../assets/images/Container (2).png'

export default function Revenues() {
  return (
    <div className='flex md:flex-row justify-around md:ml-32 pb-32 sm:flex-col '>
      <div className='fex-col text-center pt-20'>
        <p className='text-purple-400 font-arial text-center '>Visual info</p>
        <h1 className='text-white  font-arial font-bold text-4xl pt-5 '>Our revenue <br /> projections over the <br />next two years are very <br /> promising, with <br />expected revenue <br />tripling from year one <br /> to year two.</h1>
        <p className='text-gray-300 font-light pt-5'>This growth is a testament to the strength of our product and <br />the dedication of our team to driving success.</p>
      </div>
      <div><img src={graph} className=' justify-center align-middle mr-32' alt="graph" /></div>

    </div>
  )
}
