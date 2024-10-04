import React, { useEffect, useState } from 'react';
import Header from '@/components/home/Header';
import { useParams } from 'react-router-dom';
import { db } from '../../configs';
import { eq,and } from 'drizzle-orm';
import { carInventory, carInventoryImgs,carSeller,carSellerImgs } from '../../configs/schema';
import Service from '@/data/Service';
import { IoIosPricetag } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaRoad,FaRegCalendarAlt,FaCheck,FaSpinner   } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { SiCoronaengine } from "react-icons/si";
import { BiCylinder } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import FinanceCalculator from '@/components/listing-details-page/FinanceCalculator';
import { useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import OwnerDetails from '@/components/listing-details-page/OwnerDetails';  


function ListingDetails() {
    const { id } = useParams();
    const [listingState, setListingState] = useState([]);
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);

    const isused = queryParams.get('isused');

    const fetchListingDetails = async () => {
        if (isused==='new') {
            try {
                let query = db.select()
                    .from(carInventory)
                    .innerJoin(carInventoryImgs, eq(carInventory.id, carInventoryImgs.CarInventoryId))
                    .where(eq(carInventory.id, id));
                
                const result = await query;
                const resp = Service.FormatResultInventory(result);
                setListingState(resp);
            } catch (error) {
                console.error("Error fetching listing details:", error);
            }
        }else if(isused==='used'){
            try {
                let query = db.select().from(carSeller)
                .innerJoin(carSellerImgs, eq(carSeller.id, carSellerImgs.carSellerId))
                .where(eq(carSeller.id,id))
                const result = await query;
                const resp = Service.FormatResult(result);
                setListingState(resp);
   
            } catch (error) {
                console.error("Error fetching listing details:", error);
            }
        }
    };

    useEffect(() => {
        fetchListingDetails();
    }, [id]);
    useEffect(()=>{
        console.log(listingState);
    },[listingState])

    // Check if data is loaded before rendering
    if (!listingState[0]) {
        return <div className='grid place-items-center h-screen'><FaSpinner className='animate-spin text-3xl' /></div>;
    }

    return (
        <div>
            <Header />
            <div className='p-32'>
                <div className='mb-8'>
                    <h1 className='text-4xl'>{listingState[0].name||listingState[0].listingTitle}</h1>
                    <p className='font-bold text-lg'>{listingState[0].brand}</p>
                </div>
                <div className='flex flex-wrap px-20 justify-center gap-32'>
                    <div className='w-[400px] md:w-[500px] lg:w-[700px]'>
                        <Carousel>
                        <CarouselContent>
                            {listingState[0].images.map((img,index)=>{
                                return(
                                    <CarouselItem key={index}><img src={img?.imageUrl} alt="" /></CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                        <div className='my-4'>
                            <h3 className='font-semibold'>Description</h3>
                            <p>{listingState[0].description}</p>
                        </div>
                        <div className='border border-gray-300 p-4 mt-10'>
                            <h3 className='font-semibold my-4'>Features</h3>
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
                            <p className='text-2xl font-bold my-2'>${listingState[0].price||listingState[0].sellingPrice}</p>
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
                        <OwnerDetails
                        carDetails={listingState}
                        ownerImage={listingState[0].userImageUrl}
                        ownerName={listingState[0].userName}
                        ownerEmail={listingState[0].createdBy} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingDetails;
