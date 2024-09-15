import React, { useState } from 'react'
import Header from '@/components/home/Header'
import InputField from '@/components/add-listing/InputField'
import addlisting from '../data/add-listing.json'
import DropDown from '@/components/add-listing/DropDown'
import TextArea from '@/components/add-listing/TextArea'
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Hand } from 'lucide-react'


function AddListing() {
  const [formData,setformData] = useState([])
  const HandleInputChange = (name,value) =>{
    setformData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
  console.log(formData);
  
  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 py-32'>
        <h2 className='text-4xl font-bold'>Add New Listing</h2>
        <form action="" className='p-10 border rounded-xl mt-10'>
          <div>
            <h2 className='text-2xl font-medium mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10'>
              {addlisting.carDetails.map((item,index)=>{return(
                                <div key={index}>
                                <label className='mb-2 font-semibold' htmlFor="">
                                    {item.label} {item.required && <span className='text-red-500'>*</span>}
                                </label>
                                {
                                  item.fieldType === 'text' || item.fieldType === 'number' ? (
                                    <InputField HandleInputChange={HandleInputChange} item={item} />
                                  ) : item.fieldType === 'dropdown' ? (
                                    <DropDown item={item} />
                                  ) : item.fieldType === 'textarea' ? (
                                    <TextArea item={item} />
                                  ) : null
                                }
                              </div>
              )
              })}
            </div>
            </div>
            <Separator className="my-10" />
            <div>
                <h2 className='text-2xl font-medium mb-6'>Features</h2>
                <div className='grid grid-cols-2 md:grid-cols-3'>
                  {addlisting.features.map((item,index)=>{
                    return(
                      <div className='flex items-center gap-2 my-1' key={index}>
                        <Checkbox />
                        <h2>{item.label}</h2>
                      </div>
                    )
                  })}
                </div>
            </div>


            <div className='w-full flex justify-end'>
                <button className='bg-indigo-900 text-white px-5 py-2 rounded-lg hover:bg-transparent hover:text-indigo-900'>Submit</button>
            </div>
         
        </form>
      </div>
    </div>
  )
}

export default AddListing