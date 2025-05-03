import React from 'react'
import { Inknut_Antiqua } from 'next/font/google'

const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const Services = () => {
  return (
    <div className='bg-[#FFBD05]'>
      <div className='p-3 md:p-10'>
        <h1 className='text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-8 py-2 font-[550] '>OUR SERVICES</h1>
        <h1 className={'text-[#371275] text-lg md:text-3xl font-semibold mt-5' + ' ' + inknut.className}>WE PROVIDE BEST SERVICES</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 mt-5 md:mt-10'>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Airplane.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>FLIGHT TICKET</h1>
            <p className='mt-2  md:text-lg md:font-medium'>Find Great deals on worldwide.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Hotel.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOTELS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Find your ideal accommodation, from luxury to budget.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Beach Umbrella.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HOLIDAYS</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Experience the best, remember forever.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Kaaba.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>HAJJ & UMRAH</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Travel with us for a meaningful Hajj and Umrah experience.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Glob.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>GLOBAL VISA</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Simplify your visa application process.</p>
          </div>
          <div className='bg-[#371275] text-white p-3 md:p-5 rounded-lg '>
            <img src="/Documents.svg" alt="airplane" className='w-15 h-15 md:w-20 m:h-20 ' />
            <h1 className='text-lg md:text-xl font-semibold mt-2'>ATTESTATION</h1>
            <p className='mt-2 md:text-lg md:font-medium'>Fast and easy apostille services.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services