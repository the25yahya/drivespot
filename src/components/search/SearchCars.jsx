import React, { useEffect, useState } from 'react'
import CarComponent from '../ui/CarComponent'
import { carInventory, carInventoryImgs } from '../../../configs/schema'
import Service from '@/data/Service'
import { db } from '../../../configs/index'
import { eq } from 'drizzle-orm'

function SearchCars() {

  const [carList,setCarList] = useState([])
  const getCarListingDetail = async() => {
    const result =await db.select().from(carInventory).where(eq(carInventory.brand,'Tesla'))
    .innerJoin(carInventoryImgs,eq(carInventory.id,carInventoryImgs.CarInventoryId))
    const resp=Service.FormatResultInventory(result)
    setCarList(resp);
        
  }
  useEffect(()=>{
    getCarListingDetail()
  })
  return (
    <div className='p-4'>
        <div>
            <h4 className='text-xl font-bold mb-8'>{carList.length} Cars Found</h4>
        </div>
        <div className='flex gap-5 flex-wrap'>
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