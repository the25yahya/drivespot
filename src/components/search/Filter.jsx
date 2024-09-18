import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { FaAngleDown } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider"
import { Separator } from '../ui/separator';


function Filter() {
  return (
    <div className='bg-white w-72 border-gray-400 pt-4'>
        <div className='flex items-center justify-between px-4'>
            <h4 className='font-bold'>Filter</h4>
            <p className='text-indigo-800 font-bold'>Reset</p>
        </div>
        <Separator className='mt-4'/>
        <div className='my-6 px-4'>
            <h4 className='font-bold mb-4'>Car type</h4>
            <div className='w-full flex items-center justify-center gap-2'>
                <button className='border-indigo-900 border px-3 py-2 rounded text-sm'>New Car</button>
                <button className='border-indigo-900 border px-3 py-2 rounded text-sm'>Used Car</button>
            </div>
        </div>
        <div className='px-4 my-4'>
            <h4 className='font-bold mb-2'>Brand</h4>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>All Brands</p>
                <Checkbox />
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src="" alt="" />
                    <p>BMW</p>
                </div>
                <Checkbox />
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src="" alt="" />
                    <p>BMW</p>
                </div>
                <Checkbox />
                </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src="" alt="" />
                    <p>BMW</p>
                </div>
                <Checkbox />
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src="" alt="" />
                        <p>BMW</p>
                </div>
                <Checkbox />
            </div>
        </div>
        <Separator className='my-4'/>
        <div>
            <h4 className='font-bold m-4'>Price Range</h4>
            <Slider className='w-60 ml-2 mt-2' defaultValue={[33]} max={100} step={1} />
            <div className='flex justify-center gap-1 mt-4'>
                <button className='border border-indigo-800 w-24 py-1 rounded'>$0</button>
                <div>-</div>
                <button className='border border-indigo-800 w-24 py-1 rounded'>$1.000.000</button>
            </div>
        </div>
    </div>
  )
}

export default Filter