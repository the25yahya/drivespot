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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { toast } from 'sonner'
  

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

    function deleteListingImgs(carId, callback) {
        // Delete associated images first
        db.delete(CarImgs)
            .where(eq(CarImgs.CarListingId, carId))
            .then(() => {
                if (callback) callback();
            })
            .catch(error => {
                console.error("Error deleting images:", error);
            });
    }
    
    function deleteListingDetails(carId, user, callback) {
        // Delete the car listing after images are deleted
        db.delete(CarListing)
            .where(eq(CarListing.id, carId))
            .where(eq(CarListing.createdBy, user?.primaryEmailAddress.emailAddress))
            .returning({ deletedListing: CarListing.listingTitle })
            .then(() => {
                toast('Car Details Deleted Successfully')
                if (callback) callback();
            })
            .catch(error => {
                console.error("Error deleting listing:", error);
            });
    }
    
    function onDelete(carId, user) {
        // First, delete images, then delete the listing
        deleteListingImgs(carId, () => {
            deleteListingDetails(carId, user, () => {
                // After both images and listing are deleted, refresh the car listings
                getCarListings();
            });
        });
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
                            <CarComponent name={car.name||car.listingTitle}
                            img={car.images[0]?.imageUrl}
                            price={car.price || car.sellingPrice}
                            type={car.type}
                            tag={car.tag}
                            id={car.id}
                            brand={car.brand}
                            fuelType={car.fuelType}
                            mileage={car.mileage} />
                            <div className='w-full flex items-center justify-center gap-2 mt-4'>
                                <Link to={'/add-listing?mode=edit&id='+car.id}>
                                    <button className='bg-black hover:bg-transparent hover:text-black transition flex items-center gap-1 text-white px-4 rounded-lg py-1'>
                                        <MdEdit />
                                        <span>Edit</span>
                                    </button>
                                </Link>
                                <div className='bg-black hover:bg-transparent hover:text-black transition  flex items-center gap-1 text-white px-4 rounded-lg py-1'>
                                    <MdDelete />
                                    <AlertDialog>
                                    <AlertDialogTrigger><span>Delete</span></AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={()=>onDelete(car.id,user)}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default MyListing