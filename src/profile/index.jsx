import React from 'react'
import Header from '@/components/home/Header'
import { Link } from 'react-router-dom'


function Profile() {
  return (
    <div>
        <Header />
        <div className='pt-32'>
            <div className='flex items-center justify-between px-10'>
                <h2 className='text-xl font-bold'>My Listing</h2>
                <Link to='/add-listing'>
                    <button className='bg-indigo-900 text-white hover:bg-transparent hover:text-indigo-900 transition rounded-lg px-4 py-1'>+ Add New Listing</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile