import React from 'react'
import { Inknut_Antiqua } from 'next/font/google'

const inknut = Inknut_Antiqua({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const About = () => {
    return (
        <div className='bg-[#FFBD05]'>
            <div className='p-3 md:p-10'>
                <h1 className='text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 py-2 font-[550]'>ABOUT MOULAVI</h1>
                <h1 className={'text-[#371275] text-lg md:text-3xl font-semibold mt-3' + ' ' + inknut.className}>TOP - NOTCH IMMIGRATION  AND VISA CONSULTING</h1>
                <p className='text-[#371275] text-lg md:text-xl mt-3'>Expert guidance and personalized support for a seamless immigration journey</p>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center '>
                    <img src="/team_like.png" alt="" className='px-5 md:px-10' />
                    <div className='flex flex-col gap-5 md:gap-10 mt-5 md:mt-0 '>
                        <div className='flex gap-2  text-[#371275] '>
                            <img src="/tick.png" alt="" className='h-8 w-8 object-cover' />
                            <div>
                                <h1 className='text-xl font-normal'>Manpower Solutions & Visa Services</h1>
                                <h3>Expert manpower solutions and visa services for a global workforce.</h3>

                            </div>
                            {/* Best Immigration Consultants */}
                        </div>
                        <div className='flex gap-2  text-[#371275] '>
                            <img src="/tick.png" alt="" className='h-8 w-8 object-cover' />
                            <div>
                                <h1 className='text-xl font-normal'>Best Immigration Consultants</h1>
                                <h3>Trusted immigration consultants for a stress-free experience.</h3>

                            </div>
                            {/* Best Immigration Consultants */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About