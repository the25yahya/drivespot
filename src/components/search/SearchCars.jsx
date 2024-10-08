import React, { useEffect, useState } from 'react'
import CarComponent from '../ui/CarComponent'
import { carInventory, carInventoryImgs,carSeller,carSellerImgs } from '../../../configs/schema'
import Service from '@/data/Service'
import { db } from '../../../configs/index'
import { eq,inArray,gt, desc,and,gte,lte } from 'drizzle-orm'
import { useStateContext } from '@/Context/ContextProvide'
import { useUser } from '@clerk/clerk-react'


function SearchCars() {

  const {user} = useUser()

  const {filters,isUsed} = useStateContext();
  const [carList,setCarList] = useState([])

  const getCarListingDetail = async() => {
    // Initialize the base query
    let query = db.select().from(carInventory)
      .innerJoin(carInventoryImgs, eq(carInventory.id, carInventoryImgs.CarInventoryId));
    
    // Dynamically apply filters
    if (filters.brand && filters.brand.length > 0) {
      query = query.where(inArray(carInventory.brand, filters.brand)); // Use inArray for multiple brands
    }
    
    if (filters.type) {
      query = query.where(eq(carInventory.type, filters.type));
    }
  
    if (filters.priceRange) {
      if (filters.priceRange.max === 'none') {
        // If 'max' is 'none', only apply 'greater than or equal to' condition
        query = query.where(gte(carInventory.price, filters.priceRange.min));
      } else {
        // Apply both min and max conditions
        query = query.where(and(
          gte(carInventory.price, filters.priceRange.min),
          lte(carInventory.price, filters.priceRange.max)
        ));
      }
    }
    
  
    if (filters.category && filters.category.length > 0) {
      query = query.where(inArray(carInventory.type, filters.category));
    }
  
    // Apply 'greater than' logic for year filter
    if (filters.year) {
      query = query.where(gt(carInventory.year, Number(filters.year))); // Ensure year is numeric
    }
  
    // Execute the query
    const result = await query;
    const resp = Service.FormatResultInventory(result);
    setCarList(resp);
    
  };

  const getCarListingSellerDetails = async () => {
    try {
      let query = db.select().from(carSeller)
      .innerJoin(carSellerImgs, eq(carSeller.id, carSellerImgs.carSellerId));
  
      const result = await query
      const resp = Service.FormatResult(result);
      console.log('Formatted response:', resp);
  
      setCarList(resp);
    } catch (error) {
      console.error("Error fetching car listing details:", error);
    }
  };
  
  
  
  useEffect(()=>{
    if (isUsed ==='used') {
      getCarListingSellerDetails()  
    }else if (isUsed ==='unused') {
      getCarListingDetail()
    }else{
      getCarListingDetail()
    }
  },[filters,isUsed])
  
  useEffect(()=>{

  },[carList])

  return (
    <div className='p-10 pb-40 overflow-scroll max-h-screen w-screen'>
        <div>
            <h4 className='text-xl font-bold mb-8'>{carList.length} Cars Found</h4>
        </div>
        <div className='flex gap-8 flex-wrap'>
        {carList.map((car,index)=>{
                    return(
                        <div key={index}>
                            <CarComponent name={car.name||car.listingTitle}
                            img={car.images[0].imageUrl}
                            price={car.price||car.sellingPrice}
                            type={car.type}
                            brand={car.brand}
                            fuelType={car.fuelType}
                            mileage={car.mileage}
                            tag={car.tag}
                            id={car.id} />
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default SearchCars