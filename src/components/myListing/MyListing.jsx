import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../../configs'
import { CarImgs, CarListing } from '../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/data/Service'
import CarComponent from '../ui/CarComponent'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function MyListing() {
    const {user} = useUser()
    const [carList,setCarList] = useState([])
    useEffect(()=>{
        user&&getCarListings()
    },[user])

    const getCarListings = async() =>{
        const result = await db.select().from(CarListing)
        .leftJoin(CarImgs,eq(CarListing.id,CarImgs.CarListingId))
        .where(eq(CarListing.createdBy,user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(CarListing.id))

        const resp=Service.FormatResult(result)
        setCarList(resp)        
    } 
  return (
    <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>My Listing</h2>
                <Link to='/add-listing'>
                    <button className='bg-indigo-900 text-white hover:bg-transparent hover:text-indigo-900 transition rounded-lg px-4 py-1'>+ Add New Listing</button>
                </Link>
            </div>
            <div className='flex flex-wrap mt-10'>
                {carList.map((car,index)=>{
                    return(
                        <div className='m-4' key={index}>
                            <CarComponent name={car.brand}
                            img={car.images[0].imageUrl}
                            price={car.sellingPrice}
                            type={car.type} />
                            <div className='w-full flex items-center justify-center gap-2 mt-4'>
                                <Link to={'/add-listing?mode=edit&id='+car.id}>
                                    <button className='bg-black hover:bg-transparent hover:text-black transition flex items-center gap-1 text-white px-4 rounded-lg py-1'>
                                        <MdEdit />
                                        <span>Edit</span>
                                    </button>
                                </Link>
                                <button className='bg-black hover:bg-transparent hover:text-black transition  flex items-center gap-1 text-white px-4 rounded-lg py-1'>
                                    <MdDelete />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default MyListing