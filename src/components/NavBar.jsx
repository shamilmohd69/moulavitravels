import React from 'react'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-[#371275]/95 text-white py-4 px-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
            <div className='text-2xl font-bold'>Mo</div>
            <div className=' space-x-4 hidden md:flex'>
                <a href="#" className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>Home</a>
                <a href="#" className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>About Us</a>
                <a href="#" className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>Services</a>
                <a href="#" className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>Contact Us</a>
                <a href="#" className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>Login</a>
            </div>
            <div className='space-x-4 hidden md:flex'>
                <button className='bg-[#FFBD05] text-[#371275] font-semibold px-4 py-2 rounded'>Contact Now</button>
            </div>
            <div className='md:hidden flex items-center'>
                <button className='text-[#FFBD05] hover:text-[#ffbc05cc] font-semibold'>
                    <Image src="/ham_menu.svg" alt="Menu" width={24} height={24} />    
                </button>
            </div>
        </div>
    )
}

export default NavBar