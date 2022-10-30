import Image from 'next/image'
import React from 'react'

const LargeCard = ({img,title,description,buttonText}) => {
  return (
    <div className='relative'>
    <div className='relative h-96 rounded-md overflow-hidden'>
        <Image alt={title} src={img} fill className=' object-cover rounded-md'/>
    </div>
    <div className="absolute top-32 text-white left-4">
        {title && <h2 className='text-2xl lg:text-3xl font-bold'>{title}</h2>}
        {description && <h5 className='text-xs mt-2'>{description}</h5>}
        {buttonText && <button className='mt-2 rounded-md bg-gray-100 text-gray-700 w-24 sm:w-28 px-5 py-1 shadow-sm shadow-white hover:shadow-sm hover:shadow-white active:scale-90 transition-all duration-200'>{buttonText}</button>}
    </div>
    </div>
  )
}

export default LargeCard