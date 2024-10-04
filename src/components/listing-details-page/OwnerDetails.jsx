import React from 'react'
import Service from '@/data/Service'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
function OwnerDetails(props) {

  const navigate = useNavigate()

  const {user} = useUser()
  const OnMessageOwner = async() => {
    const ownerId = props.ownerEmail.split('@')[0];
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
    try{
      await Service.CreateSendbirdUser(userId,user?.fullName,user?.imageUrl)
      .then(resp=>{
        console.log(resp);
        
      })
    }catch(e){
      console.error(e);
    }
    try{
      await Service.CreateSendbirdUser(ownerId,props.carDetails.userName,props.carDetails.userImageUrl)
      .then(resp=>{
        console.log(resp);
        
      })
    }catch(e){
      console.error(e);
      
    }
    try{
      await Service.CreateSendbirdChannel([userId,ownerId],props.carDetails.listingTitle)
      .then(
        resp=>{
          console.log(resp);
          navigate('/profile')
        }
      )
    }catch(e){
      console.error(e);
      
    }
  }
  return (
    <div className='border border-gray-300 p-6 my-10'>
        <h2 className='text-lg font-semibold mb-2'>Owner Info</h2>
        <img className='w-20 rounded-full' src={props.ownerImage} alt="" />
        <p className='my-1 text-lg font-bold'>{props.ownerName}</p>
        <p className='text-gray-600 text-sm'>{props.ownerEmail}</p>
        <button onClick={OnMessageOwner} className='mt-4 bg-indigo-800 px-4 py-1 text-white cursor-pointer hover:bg-white hover:text-black transition'>Message Owner</button>
    </div>
  )
}

export default OwnerDetails