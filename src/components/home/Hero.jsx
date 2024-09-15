import React from 'react'
import cars from '../../assets/cars.png'
import Brand from '../ui/carfilter/Brand';
import Yearfilter from '../ui/carfilter/Year';
import Monthlydebt from '../ui/carfilter/Monthlydebt';
import DownPayement from '../ui/carfilter/DownPayement';
import Countryfilter from '../ui/carfilter/Country';

import { MdChevronRight } from "react-icons/md";

function Hero() {
  return (
    <div className='md:flex items-center gap-16 p-10 justify-center py-24 bg-slate-100'>
        <div className='text-center mt-10 md:mt-0'>    
            <div>
                <img className='w-[550px]' src={cars} alt="" />
            </div>
            <p className='text-2xl font-semibold mt-5'>With a community network of <strong className='block'>5,000+ agents</strong>, DriveSpot is ready to help you find your dream car</p>
        </div>
        <div className='border border-gray-300 p-8 shadow-lg rounded-lg text-center mt-10'>
            <div className='grid place-items-center mb-4'><h1 className='font-bold text-5xl w-[300px] md:w-[400px]'>Find the car you want, <span className='text-indigo-900'>Your way !</span></h1></div>
            <div className='my-10'>
                <div className='flex items-center gap-3 my-4'>
                    <Brand />
                    <Yearfilter />
                    <Countryfilter />
                </div>
                <div className='flex items-center gap-3 my-4'>
                    <Monthlydebt/>
                    <DownPayement />
                </div>
            </div>
            <div className='rounded-lg flex items-center justify-between px-4 bg-indigo-900 text-white py-3 mt-4'>
                <div className='flex items-center gap-2'>
                    <p>102.123.123</p>
                    <p className='opacity-80'>CARS LISTED</p>
                </div>
                <button className='flex items-center'>
                    <span className='mb-1'>Search Now</span><span><MdChevronRight /></span>
                </button>
            </div>
            <div className='mt-4'>
                <p className='flex items-center gap-2'><span>Want to search more customized?</span><span className='underline flex items-center mb-1 cursor-pointer'>Advanced Search <MdChevronRight/></span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero