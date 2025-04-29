import React from 'react'
import { Inknut_Antiqua } from 'next/font/google'

const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const Hero = () => {
  return (
    <div className='relative w-full h-[80vh]  md:h-screen text-[#371275] '>
      <img src="/hero_img1.jpg" alt="Hero" className='w-full h-[80vh] md:h-screen object-cover' />
      <div className='absolute w-full h-[80vh] md:h-screen top-0 left-0 flex flex-col justify-center items-center '>
        <div className='max-w-[800px]'>

          <img src="/hero_title.png" alt="Hero" className='p-4' />
        </div>
        <div className='w-full p-3 md:p-10  '>
          <h1 className={'md:text-4xl font-semibold font-serif ' + ' ' + inknut.className}>
            JOURNEY WITH FAITH, EXPLORE <br />  WITH WONDER
          </h1>
          <h1 className='mt-4 mb-10 md:text-3xl font-semibold text-black'>Book Your Ziyara Now, Let Us guide You Home.</h1>
          <a href="" className='bg-[#FFBD05]/95 text-[#371275] font-[550] py-3 rounded px-10  md:text-2xl'>Book Now</a>
        </div>
        <div className='w-full py-5 bg-[#FFBD05]/80 flex justify-around mt-5 text-white'>
          <h3 className=' font-semibold text-sm md:text-2xl'>MADEENA ZIYARA</h3>
          <h3 className=' font-semibold text-sm md:text-2xl'>JEDDAH SHARAFIYA</h3>
          <h3 className=' font-semibold text-sm md:text-2xl'>TAIF TOUR</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero