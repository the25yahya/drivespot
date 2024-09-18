import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { BiSortDown } from "react-icons/bi";
import '../../search/input.css'

function SearchBar() {
  return (
    <div className='flex justify-start gap-6 px-10 flex-wrap'>
        <div className='shadow-sm flex items-center border w-2/3 py-2 px-2 gap-1 border-gray-400 rounded-sm'>
            <CiSearch className='text-xl' />
            <input className='none-input w-full border-none' type="text" placeholder='Find a car here...' />
        </div>
        <div className='shadow-sm flex items-center border-gray-400 border px-2 rounded-sm gap-2 font-bold cursor-pointer'>
            <span className=''><LuSettings2 /></span>
            <span>Filter</span>
        </div>
        <div className='shadow-sm flex items-center border-gray-400 border px-4 rounded-sm gap-2 font-bold cursor-pointer'>
            <span>Sort By:</span>
            <span>Recommended</span>
            <span><BiSortDown className='text-xl'/></span>
        </div>
    </div>
  )
}

export default SearchBar