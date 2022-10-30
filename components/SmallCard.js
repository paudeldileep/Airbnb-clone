import Image from 'next/image'
import React from 'react'

const SmallCard = ({img,location,distance}) => {
  return (
    <div className='flex items-center rounded-xl cursor-pointer space-x-4 m-2 mt-5 hover:scale-105 hover:bg-gray-100 hover:shadow-sm transition-all duration-300'>
        <div className='relative h-16 w-16'>
            <Image src={img} alt={location} fill className='rounded-lg' />
        </div>
        <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard