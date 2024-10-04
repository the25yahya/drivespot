import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { BiSortDown } from "react-icons/bi";
import '../../search/input.css'
import { db } from '../../../configs';
import { carInventory,carInventoryImgs } from '../../../configs/schema';
import { useStateContext } from '@/Context/ContextProvide';
import { eq } from 'drizzle-orm';

function SearchBar({ toggleFilter }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Update searchTerm state on input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchSearch = async() =>{
    try {
      let query = db.select()
          .from(carInventory)
          .innerJoin(carInventoryImgs, eq(carInventory.id, carInventoryImgs.CarInventoryId))
          .where(eq(carInventory.name, searchTerm));
      
      const result = await query;
      const resp = Service.FormatResultInventory(result);

    } catch (error) {
        console.error("Error fetching details:", error);
    }
  }
  return (
    <div className='flex justify-start gap-6 px-10 flex-wrap'>
      <div className='shadow-sm flex items-center border w-2/3 py-2 px-2 gap-1 border-gray-400 rounded-sm'>
        <CiSearch className='text-xl' />
        <input
          onClick={fetchSearch}
          className='none-input w-full border-none'
          type="text"
          placeholder='Find a car here...'
          value={searchTerm} // Set the input value to searchTerm
          onChange={handleInputChange} // Call handleInputChange on value change
        />
      </div>
      <div onClick={() => toggleFilter()} className='shadow-sm flex items-center border-gray-400 border px-2 rounded-sm gap-2 font-bold cursor-pointer'>
        <span><LuSettings2 /></span>
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

export default SearchBar;
