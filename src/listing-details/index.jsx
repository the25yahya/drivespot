import React, { useEffect, useState } from 'react';
import Header from '@/components/home/Header';
import { useParams } from 'react-router-dom';
import { db } from '../../configs';
import { eq } from 'drizzle-orm';
import { carInventory, carInventoryImgs } from '../../configs/schema';
import Service from '@/data/Service';
import { IoIosPricetag } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaRoad,FaRegCalendarAlt,FaCheck   } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { SiCoronaengine } from "react-icons/si";
import { BiCylinder } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import FinanceCalculator from '@/components/listing-details-page/FinanceCalculator';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function ListingDetails() {
    const { id } = useParams();
    const [listingState, setListingState] = useState([]);

    const fetchListingDetails = async () => {
        try {
            let query = db.select()
                .from(carInventory)
                .innerJoin(carInventoryImgs, eq(carInventory.id, carInventoryImgs.CarInventoryId))
                .where(eq(carInventory.name, id));
            
            const result = await query;
            const resp = Service.FormatResultInventory(result);
            setListingState(resp);
        } catch (error) {
            console.error("Error fetching listing details:", error);
        }
    };

    useEffect(() => {
        fetchListingDetails();
    }, [id]);

    // Check if data is loaded before rendering
    if (!listingState[0]) {
        return <div className='grid place-items-center'>Loading...</div>;
    }

    console.log(listingState);
    return (
        <div>
            <Header />
            <div className='p-32'>
                <div className='pl-32 mb-8'>
                    <h1 className='text-4xl'>{listingState[0].name}</h1>
                    <p className='font-bold text-lg'>{listingState[0].brand}</p>
                </div>
                <div className='flex flex-wrap px-20 justify-center gap-32'>
                    <div className='w-[500px]'>
                        <Carousel>
                        <CarouselContent>
                            {listingState[0].images.map((img)=>{
                                return(
                                    <CarouselItem><img className='w-[500px]' src={img.imageUrl} alt="" /></CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        <div>
                            <h3 className='font-semibold'>Description</h3>
                            <p>{listingState[0].description}</p>
                        </div>
                        <div className='border border-gray-300 p-4 mt-10'>
                            <h3 className='font-semibold'>Features</h3>
                            <div>
                            {listingState[0].features && typeof listingState[0].features === 'object' ? (
                                Object.entries(listingState[0].features).map(([feature, isAvailable], index) => (
                                    isAvailable ? ( // Only show features that are true
                                        <div className='flex items-center gap-1' key={index}><FaCheck />{feature}</div>
                                    ) : null
                                ))
                            ) : (
                                <div>No features available.</div> // Fallback if not an object
                            )}
                            </div>
                        </div>
                        <FinanceCalculator/>
                    </div>
                    <div>
                        <div className='border text-center border-gray-300 px-10 py-6 shadow-lg rounded-lg'>
                            <p>Our Price</p>
                            <p className='text-2xl font-bold my-2'>${listingState[0].price}</p>
                            <button className='flex items-center gap-1 bg-indigo-800 text-white px-4 py-1 rounded-sm'>
                                <IoIosPricetag />
                                <p>Make An offer price</p>
                            </button>
                        </div>
                        <div className='border border-gray-300 mt-10 shadow-lg p-4'>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <FaCar />
                                    <p className='font-semibold'>Category</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].type}</p>
                                </div>
                            </div>
                            {/* Other fields for mileage, fuel type, etc. */}
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <FaRoad />
                                    <p className='font-semibold'>Mileage</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].mileage} miles</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <LuFuel/>
                                    <p className='font-semibold'>Fuel Type</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].fuelType}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <FaRegCalendarAlt/>
                                    <p className='font-semibold'>Year</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].year}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <SiCoronaengine/>
                                    <p className='font-semibold'>Engine Size</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].engineSize}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <BiCylinder/>
                                    <p className='font-semibold'>Cylinder</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].cylinder}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 border-b pb-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <IoMdColorPalette/>
                                    <p className='font-semibold'>Color</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{listingState[0].color}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingDetails;
