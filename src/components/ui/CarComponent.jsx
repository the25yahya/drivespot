import React from 'react'
import { FaMedal } from "react-icons/fa";

function CarComponent(props) {
  return (
        <div className='border rounded-lg shadow-lg w-fit p-4'>
            <div className='w-full flex justify-between items-start'>
                <div className='text-start'>
                    <h2 className='font-bold text-lg'>{props.name}</h2>
                    <p className='font-semibold text-gray-400'>{props.type}</p>
                </div>
                <img className='cropped-image w-8 mt-1' src={props.brand} alt="" />
            </div>
            <div className='cursor-pointer  h-[215px] w-72'>
                <img className='cropped-image' src={props.img} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-sm gap-1 flex items-center py-1 px-2 rounded-lg bg-red-100 text-red-900'>
                    <p><FaMedal/></p>
                    <p>{props.tag?props.tag:'New'}</p>
                </div>
                <p className='text-lg font-bold'>${props.price}</p>
            </div>
       </div>
  )
}

export default CarComponent