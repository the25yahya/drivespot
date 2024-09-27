import React, { useEffect, useState } from 'react'
import CarComponent from '../ui/CarComponent'
import { carInventory, carInventoryImgs } from '../../../configs/schema'
import Service from '@/data/Service'
import { db } from '../../../configs/index'
import { eq,inArray,gt } from 'drizzle-orm'
import { useStateContext } from '@/Context/ContextProvide'


function SearchCars() {

  const {filters,setFilters} = useStateContext();

  const [carList,setCarList] = useState([])
  const getCarListingDetail = async() => {
    // Initialize the base query
    let query = db.select().from(carInventory)
      .innerJoin(carInventoryImgs, eq(carInventory.id, carInventoryImgs.CarInventoryId));
    
    // Dynamically apply filters
    if (filters.brand && filters.brand.length > 0) {
      console.log('Applying brand filter:', filters.brand); // Log the full brand array
      query = query.where(inArray(carInventory.brand, filters.brand)); // Use inArray for multiple brands
    }
    
    if (filters.type) {
      console.log('Applying type filter:', filters.type); // Log type filter
      query = query.where(eq(carInventory.type, filters.type));
    }
  
    if (filters.priceRange) {
      console.log('Applying price range filter:', filters.priceRange); // Log price range filter
      query = query.where(and(
        gte(carInventory.price, filters.priceRange[0]),
        lte(carInventory.price, filters.priceRange[1])
      ));
    }
  
    if (filters.category && filters.category.length > 0) {
      console.log('Applying category filter:', filters.category); // Log category filter
      query = query.where(inArray(carInventory.type, filters.category));
    }
  
    // Apply 'greater than' logic for year filter
    if (filters.year) {
      console.log('Applying year filter (greater than):', filters.year);
      query = query.where(gt(carInventory.year, Number(filters.year))); // Ensure year is numeric
    }
  
    // Log the final query structure before execution
    console.log('Query before execution:', query);
    
    // Execute the query
    const result = await query;
    const resp = Service.FormatResultInventory(result);
    setCarList(resp);
  };
  
  useEffect(()=>{
    getCarListingDetail()
  },[filters])
  return (
    <div className='p-4 overflow-scroll max-h-screen'>
        <div>
            <h4 className='text-xl font-bold mb-8'>{carList.length} Cars Found</h4>
        </div>
        <div className='flex gap-8 flex-wrap'>
        {carList.map((car,index)=>{
                    return(
                        <div key={index}>
                            <CarComponent name={car.name}
                            img={car.images[0].imageUrl}
                            price={car.price}
                            type={car.type}
                            brand={car.brand}
                            fuelType={car.fuelType}
                            mileage={car.mileage} />
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default SearchCars