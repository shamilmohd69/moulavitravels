import React from 'react';
import { Inknut_Antiqua } from 'next/font/google';

const inknut = Inknut_Antiqua({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const WhyChoose = () => {
    return (
        <div className="bg-[#371275] text-[#FFBD05]">
            <div className="p-3 md:p-10">
                <h1 className="text-[#371275] md:text-xl bg-[#FFBD05] w-fit px-8 py-2 font-semibold">
                    WHY CHOOSE US
                </h1>
                <div className='w-full flex justify-between'>
                    <h2 className={`text-lg md:text-3xl font-semibold mt-5 ${inknut.className}`}>
                        DISCOVER YOUR ZIYARA <br />
                        BEGINS HERE
                    </h2>
                    <div className='md:w-1/3 lg:mr-10 hidden md:block'>
                        <h4 className='text-white'>We are trusted travel agent providing
                            unforgettable travel experiences. with a team
                            of experts and a wide network, we ensure every detail of your perfect runs perfectly</h4>
                        <a href="" className='flex items-center gap-2 mt-2'>LEARN MORE <div><img src="/arrow-top-right.png" alt="Arrow" /></div></a>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row mt-3  items-center gap-3 px-2 md:max-w-3/4">
                    <img
                        src="/masjidAli.jpg"
                        alt="Mosque illustration"
                        className="sm:max-w-1/2 object-cover rounded-2xl md:rounded-4xl "
                    />
                    <img
                        src="/chooseusimg.png"
                        alt="Decorative group graphic"
                        className=" sm:mt-0 sm:max-w-1/2 object-contain"
                    />
                </div>
                <div className='md:w-md px-2'>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        <a href="" className='bg-[#FFBD05] text-[#371275] text-center py-1 rounded-lg'>JEDDAH</a>
                        <a href="" className='bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg'>MAKKAH</a>
                        <a href="" className='bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg'>RABIQ</a>
                    </div>
                    <div className='grid grid-cols-3 gap-2 mt-3'>
                        <a href="" className='bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg'>YANBU</a>
                        <a href="" className='bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg'>UMLUJ</a>
                        <a href="" className='bg-[#371275] text-[#FFBD05] text-center py-1 border border-[#FFBD05] rounded-lg'>ALWAJ</a>
                    </div>
                </div>
                <div className='md:hidden mt-5 px-2'>
                    <h4 className='text-white text-sm'>We are trusted travel agent providing
                        unforgettable travel experiences. with a team
                        of experts and a wide network, we ensure every detail of your perfect runs perfectly</h4>
                    <a href="" className='flex items-center gap-2 mt-2'>LEARN MORE <div><img src="/arrow-top-right.png" alt="Arrow" /></div></a>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
