import React from 'react'

function DefaultBtn(props) {
  return (
    <button className='bg-black text-sm text-white px-6 py-2 hover:text-black hover:bg-transparent transition rounded-lg'>{props.value}</button>
  )
}

export default DefaultBtn