import React from 'react'
import { Inknut_Antiqua } from 'next/font/google'

const inknut = Inknut_Antiqua({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const About = () => {
    return (
        <div className='bg-[#FFBD05]'>
            <div className='p-5 md:p-10'>

                <h1 className='text-[#371275] md:text-xl border-3 border-[#371275] w-fit px-4 py-2 font-[550]'>ABOUT MOULAVI</h1>
                <h1 className={'text-[#371275] text-lg md:text-3xl font-semibold mt-3' + ' ' + inknut.className}>TOP - NOTCH IMMIGRATION  AND VISA CONSULTING</h1>
                <p className='text-[#371275] text-lg md:text-xl mt-3'>Expert guidance and personalized support for a seamless immigration journey</p>
                
            </div>
        </div>
    )
}

export default About