import React from 'react'
import { FaCar,FaHeart } from "react-icons/fa";
import { GiRoad } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import '../../components/search/carsearch.css'
function CarComponent(props) {
  return (
        <div className='border font-mono rounded-lg shadow-lg w-fit bg-white'>
            <div className='px-4 flex justify-between items-center'>
                <div className='flex items-center mt-4 gap-1'>
                    <GiRoad className='font-bold text-lg' />
                    <span className='font-semibold'>{props.mileage} km</span>
                </div>
                <FaHeart/>
            </div>
            <div className='px-10'>
                <img className='w-52 h-32 my-4 cropped-image cursor-pointer' src={props.img} alt="" />
            </div>
            <div className='px-2'>
                <p className='text-lg text-gray-400'>{props.brand}</p>
            </div>
            <div className='px-4 flex items-center justify-between'>
                <p className='font-bold'>{props.name}</p>
                <p className='font-semibold'>${props.price}</p>
            </div>
            <div className='px-10 py-3 mt-4 flex justify-center border-t w-full gap-4 p-t-2'>
                <div className='flex items-center gap-2'>
                    <FaCar className='text-blue-500' />
                    <p className='opacity-60 text-sm'>{props.type}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <BsFuelPump className='text-blue-500' />
                    <p>{props.fuelType}</p>
                </div>
            </div>
       </div>
  )
}

export default CarComponent