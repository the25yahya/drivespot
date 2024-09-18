import React from 'react'
import Header from '@/components/home/Header'
import SearchBar from '@/components/search/SearchBar'
import Filter from '@/components/search/Filter'

function Search() {
  return (
    <div>
        <Header />
        <div className='pt-24 border-b pb-4'>
            <SearchBar />
        </div>
        <div className='bg-zinc-100 w-full'>
            <Filter />
        </div>
    </div>
  )
}

export default Search