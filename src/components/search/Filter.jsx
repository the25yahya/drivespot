import React,{useState} from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider"
import { Separator } from '../ui/separator';
import { useStateContext } from '@/Context/ContextProvide'

function Filter({showFilter}) {

   const {isUsed,setUsed,setUnused,filters,clearFilters,handleBrandChange,handleCategoryChange,handleYearChange} = useStateContext()


    const [brands,setBrands] = useState(false); 
    const toggleBrands = ()=>{
        setBrands(!brands)
    }

  return (
    <div className={showFilter?'bg-white min-w-72 border-gray-400 pt-4 overflow-y-scroll max-h-screen pb-40':'bg-white hidden min-w-72 border-gray-400 pt-4 overflow-y-scroll max-h-screen pb-40'}>
        <div className='flex items-center justify-between px-4'>
            <h4 className='font-bold'>Filter</h4>
            <p onClick={()=>clearFilters()} className='text-indigo-800 font-bold cursor-pointer'>Reset</p>
        </div>
        <Separator className='mt-4'/>
        <div className='my-6 px-4'>
            <h4 className='font-bold mb-4'>Car type</h4>
            <div className='w-full flex items-center justify-center gap-2'>
                <button onClick={setUnused} className={isUsed=='unused'?'border-indigo-900 border px-3 py-2 rounded text-sm bg-indigo-900 text-white':'border-indigo-900 border px-3 py-2 rounded text-sm'}>New Car</button>
                <button onClick={setUsed}  className={isUsed=='used'?'border-indigo-900 border px-3 py-2 rounded text-sm bg-indigo-900 text-white':'border-indigo-900 border px-3 py-2 rounded text-sm'}>Used Car</button>
            </div>
        </div>
        <div className='px-4 my-4'>
            <h4 className='font-bold mb-2'>Brand</h4>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>All Brands</p>
                <Checkbox />
            </div>
            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center gap-1'>
                    <img className='w-6' src="https://m.media-amazon.com/images/I/31Y77t5hbAL._AC_.jpg" alt="" />
                    <p className='font-semibold'>Tesla</p>
                </div>
                <Checkbox
                    checked={filters.brand?.includes('Tesla')}  // Set the checked state based on filters
                    onCheckedChange={() => handleBrandChange('Tesla')} 
                />
            </div>
            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center gap-1'>
                    <img className='w-6' src="https://logo-marque.com/wp-content/uploads/2021/03/Hyundai-Logo.png" alt="" />
                    <p className='font-semibold'>Hyuandai</p>
                </div>
                <Checkbox 
                    checked={filters.brand?.includes('Hyundai')}
                    onCheckedChange={() => handleBrandChange('Hyundai')}
                />
                </div>
            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center gap-1'>
                    <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png" alt="" />
                    <p className='font-semibold'>BMW</p>
                </div>
                <Checkbox 
                        checked={filters.brand?.includes('BMW')}
                        onCheckedChange={() => handleBrandChange('BMW')}
                />
            </div>
            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center gap-1'>
                    <img  className='w-6' src="https://i.pinimg.com/originals/7f/1e/ce/7f1ecec019caa2531d35a6c5d756cf73.png" alt="" />
                    <p className='font-semibold'>Honda</p>
                </div>
                <Checkbox 
                        checked={filters.brand?.includes('Honda')}
                        onCheckedChange={() => handleBrandChange('Honda')}
                />
            </div>
            <div className={brands?'flex justify-between items-center my-3':' justify-between items-center my-3 hidden'}>
                <div className='flex items-center gap-1'>
                    <img  className='w-6' src="https://m.media-amazon.com/images/I/71xdCxyPe0L.jpg" alt="" />
                    <p className='font-semibold'>Toyota</p>
                </div>
                <Checkbox 
                        checked={filters.brand?.includes('Toyota')}
                        onCheckedChange={() => handleBrandChange('Toyota')}
                />
            </div>
            <div className={brands?'flex justify-between items-center my-3':' justify-between items-center my-3 hidden'}>
                <div className='flex items-center gap-1'>
                    <img  className='w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFyQgwg4AludLx0QzO7gVfCJq8orw4sxhCz379nPcf0vUwxvHx5_7bP0C8DdtsG2ogwc&usqp=CAU" alt="" />
                    <p className='font-semibold'>Ford</p>
                </div>
                <Checkbox 
                        checked={filters.brand?.includes('ford')}
                        onCheckedChange={() => handleBrandChange('ford')}
                />
            </div>
            <div className={brands?'flex justify-between items-center my-3':' justify-between items-center my-3 hidden'}>
                <div className='flex items-center gap-1'>
                    <img  className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" alt="" />
                    <p className='font-semibold'>Volskswagen</p>
                </div>
                <Checkbox />
            </div>
            <div className={brands?'flex justify-between items-center my-3':' justify-between items-center my-3 hidden'}>
                <div className='flex items-center gap-1'>
                    <img  className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" alt="" />
                    <p className='font-semibold'>Mercedes</p>
                </div>
                <Checkbox 
                        checked={filters.brand?.includes('Mercedes')}
                        onCheckedChange={() => handleBrandChange('Mercedes')}
                />
            </div>
            <div className='flex justify-center w-full cursor-pointer'>
                <p onClick={toggleBrands} className='flex items-center gap-1 text-gray-400 font-bold text-sm'>
                    <span>More Brands</span>
                    <span>{brands?<FaAngleUp/>:<FaAngleDown/>}</span>
                </p>
            </div>
        </div>
        <Separator className='my-4'/>
        <div className='px-4'>
            <h4 className='font-bold my-3'>Category</h4>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Sedan</p>
                <Checkbox
                        checked={filters.category?.includes('Sedan')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Sedan')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Electric</p>
                <Checkbox
                        checked={filters.category?.includes('Electric')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Electric')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Sport</p>
                <Checkbox
                        checked={filters.category?.includes('Sport')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Sport')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Convertible</p>
                <Checkbox
                        checked={filters.category?.includes('Convertible')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Convertible')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Van</p>
                <Checkbox
                        checked={filters.category?.includes('Van')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Van')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Suv</p>
                <Checkbox
                        checked={filters.category?.includes('Suv')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Suv')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Hatchback</p>
                <Checkbox
                        checked={filters.category?.includes('Hatchback')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Hatchback')} 
                />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>Truck</p>
                <Checkbox
                        checked={filters.category?.includes('Truck')}  // Set the checked state based on filters
                        onCheckedChange={() => handleCategoryChange('Truck')} 
                />
            </div>
        </div>
        <Separator className='my-4'/>
        <div className='px-4'>
            <h4 className='font-bold my-3'>Year</h4>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>1980's</p>
                <Checkbox
                        checked={filters.year?.includes(1980)}  // Set the checked state based on filters
                        onCheckedChange={() => handleYearChange(1980)}  />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>1990's</p>
                <Checkbox
                        checked={filters.year?.includes(1990)}  // Set the checked state based on filters
                        onCheckedChange={() => handleYearChange(1990)}  />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>2000's</p>
                <Checkbox
                        checked={filters.year?.includes(2000)}  // Set the checked state based on filters
                        onCheckedChange={() => handleYearChange(2000)}  />
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='font-semibold'>2020's</p>
                <Checkbox
                        checked={filters.year?.includes(2020)}  // Set the checked state based on filters
                        onCheckedChange={() => handleYearChange(2020)}  />
            </div>
        </div>
        <div>
            <h4 className='font-bold m-4'>Price Range</h4>
            <Slider className='w-60 ml-2 mt-2' defaultValue={[33]} max={100} step={1} />
            <div className='flex justify-center gap-1 mt-4'>
                <button className='border border-indigo-800 w-24 py-1 rounded'>$0</button>
                <div>-</div>
                <button className='border border-indigo-800 w-24 py-1 rounded'>$1.000.000</button>
            </div>
        </div>
    </div>
  )
}

export default Filter