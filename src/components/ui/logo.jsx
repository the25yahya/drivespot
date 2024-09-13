import React from 'react'
import logo from '../../assets/d.png'
function Logo(props) {
  return (
    <div className='flex items-center cursor-pointer'>
        <img className='w-9 mx-1' src={logo} alt="" />
        <p className='font-semibold'>DriveSpot</p>
    </div>
  )
}

export default Logo