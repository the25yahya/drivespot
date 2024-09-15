import React from 'react'
import cars from '../../assets/cars.png'
import Brand from '../ui/carfilter/Brand'
import Model from '../ui/carfilter/Model'
import Year from '../ui/carfilter/Year'
import Monthlydebt from '../ui/carfilter/Monthlydebt'
import DownPayement from '../ui/carfilter/DownPayement'
import Country from '../ui/carfilter/Country'


import { MdChevronRight } from "react-icons/md";

function Hero() {
  return (
    <div className='md:flex items-center gap-10 p-10 justify-center pt-20 bg-slate-100'>
        <div className='text-center'>    
            <div>
                <img className='w-[550px]' src={cars} alt="" />
            </div>
            <p className='w-80 text-lg font-semibold ml-16 mt-5'>With a community network of <strong>5,000+ agents</strong>, DriveSpot is ready to help you find your dream car</p>
        </div>
        <div className='border border-gray-300 p-8 shadow-lg rounded-lg text-center'>
            <div className='grid place-items-center mb-4'><h1 className='font-bold text-5xl w-[300px] md:w-[400px]'>Find the car you want, Your way !</h1></div>
            <div className='my-10'>
                <div className='flex items-center gap-3 my-4'>
                    <Brand />
                    <Model />
                    <Year />
                </div>
                <div className='flex items-center gap-3 my-4'>
                    <Country />
                    <Monthlydebt/>
                    <DownPayement />
                </div>
            </div>
            <div className='rounded-lg flex items-center justify-between px-4 bg-black text-white py-3 mt-4'>
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