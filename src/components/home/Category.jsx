import React from 'react'
import categories from '../../data/category.json'
import { Link } from 'react-router-dom'
import { useStateContext } from '@/Context/ContextProvide'

function Category() {   
  
  const {filter,handleCategoryChange} = useStateContext()
  return (
    <div className='text-center mt-20'>
        <h1 className='text-3xl font-semibold my-10'>Browse by Type</h1>
        <div className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-20'>
        {categories.map((item)=>{
            return(
              <Link to='/search'>
                <div onClick={()=>handleCategoryChange(item.type)} key={item.id} className='my-4 grid place-items-center border rounded-lg w-32 py-1 cursor-pointer'>
                    <img className='cropped-image w-10' src={item.img} alt="" />
                    <h2>{item.type}</h2>
                </div>
              </Link>
            )
        })}
        </div>
    </div>
  )
}

export default Category