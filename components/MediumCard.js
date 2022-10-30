import Image from 'next/image'
import React from 'react'

const MediumCard = ({img,title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 duration-300 ease-out'>
        <div className='h-80 w-80 relative'>
            <Image fill alt={title} src={img} className="rounded-xl"/>
            
        </div>
        <h2 className='text-2xl text-gray-600 mt-2'>{title}</h2>
    </div>
  )
}

export default MediumCard