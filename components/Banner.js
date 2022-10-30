import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image alt='cover image' src='/cover.jpg' fill object-fit='contain'/>
        <div className="absolute top-1/2 w-full text-center text-black">
            <p className='text-sm sm:text-xl lg:text-2xl sm:font-semibold mb-5 text-gray-50'>Where you heading next?</p>
            <button className='text-gray-500 font-bold bg-white px-5 py-2 w-32 sm:w-44 rounded-full shadow-md hover:shadow-xl active:scale-90 hover:scale-105 transition-all duration-200'>Explore</button>
        </div>
    </div>
  )
}

export default Banner