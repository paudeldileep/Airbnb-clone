import Image from 'next/image'
import React from 'react'
import {Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='sticky z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
        {/* left */}
        <div className='relative flex items-center h-10 w-28 my-auto cursor-pointer'>
          <Image alt='airbnb-logo' src={'/logo_abnb.png'} fill object-fit='contain' object-position='left'/>
        </div>
        {/* center */}
        <div className='flex justify-center items-center border-2 rounded-full py-2 md:shadow-sm hover:shadow-md'>
          <input type='text' placeholder='Start searching' className='flex-grow w-[90%] mx-3 text-gray-600 placeholder-gray-400 outline-none'/>
          <MagnifyingGlassIcon className='h-8 w-8 md:mx-2 bg-red-400 rounded-full text-white p-1 cursor-pointer hidden md:inline-flex '/>
        </div>
        {/* right */}
        <div className=' self-end flex justify-end items-center my-auto text-gray-500'>
            <p className=' h-11 py-2 px-3 text-center text-xs md:text-base hover:bg-gray-100 rounded-full font-semibold hidden md:inline-flex cursor-pointer'>Become a Host</p>
            <GlobeAltIcon className='h-10 w-10 rounded-full p-2 bg-white hover:bg-gray-100 m-2 cursor-pointer'/>
            <div className='bg-white hover:shadow-md border-2 border-gray-200 flex justify-center items-center rounded-full p-1'>
                <Bars3Icon className='h-8 w-8 rounded-full cursor-pointer '/>
                <UserCircleIcon className='h-8 w-8 rounded-full cursor-pointer '/>
            </div>
        </div>
    </header>
  )
}

export default Header