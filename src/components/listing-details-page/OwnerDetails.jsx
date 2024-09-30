import React from 'react'

function OwnerDetails(props) {
  return (
    <div className='border border-gray-300 p-6'>
        <h2>Owner Info</h2>
        <img src={props.ownerImage} alt="" />
        <p>{props.ownerName}</p>
        <p>{props.ownerEmail}</p>
        <button>Message Owner</button>
    </div>
  )
}

export default OwnerDetails