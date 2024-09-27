import React, { useState } from 'react'
import Header from '@/components/home/Header'
import SearchBar from '@/components/search/SearchBar'
import Filter from '@/components/search/Filter'
import SearchCars from '@/components/search/SearchCars'

function Search() {

  const [showFilter,setShowFilter] = useState(true)
  const toggleFilter = ()=>{
    setShowFilter(!showFilter)
}
  return (
    <div>
        <Header />
        <div className='pt-24 border-b pb-4'>
            <SearchBar toggleFilter={toggleFilter} />
        </div>
        <div className='bg-zinc-100 w-full flex gap-10 fixed'>
            <Filter showFilter={showFilter} />
            <SearchCars />
        </div>
    </div>
  )
}

export default Search