import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/home/Header'
import InputField from '@/components/add-listing/InputField'
import addlisting from '../data/add-listing.json'
import DropDown from '@/components/add-listing/DropDown'
import TextArea from '@/components/add-listing/TextArea'
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Await, useNavigate, useSearchParams } from 'react-router-dom'
import { db } from '../../configs'
import { CarImgs, CarListing } from '../../configs/schema'
import IconField from '@/components/add-listing/IconField'
import ImageUpload from '@/components/add-listing/ImageUpload'
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from 'sonner'
import { useUser } from '@clerk/clerk-react'
import { eq } from 'drizzle-orm'
import Service from '@/data/Service'


function AddListing() {
  const {user} = useUser();
  const formRef = useRef(null);
  const [formData,setformData] = useState([]);
  const [featuresData,setFeaturesData] = useState([]);
  const [triggerUploadImage,setTriggerUploadImage] = useState('');
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [carEditInfo,setCarEditInfo] = useState([])

  //get the url query params
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  useEffect(()=>{
    if (mode=='edit') {
      getCarListingDetail()
    }
  },[])

  const getCarListingDetail = async() => {
    const result =await db.select().from(CarListing)
    .innerJoin(CarImgs,eq(CarListing.id,CarImgs.CarListingId))
    .where(eq(CarListing.id,id))
    const resp=Service.FormatResult(result)
    setCarEditInfo(resp[0]);  
    setFeaturesData(resp[0].features);     
  }

  const HandleInputChange = (name,value) =>{
    setformData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const HandleFeaturesChange = (name,value)=>{
    setFeaturesData((prevData)=>({
      ...prevData,
      [name]:value
    }))    
  }


  const onSubmit = async(e)=>{
    setLoader(true)
    e.preventDefault()
    if (mode=='edit') {
        try{
          toast('Please Wait while the server is proccessing your request ...')
          const result = await db.update(CarListing).set({
            ...formData,
            createdBy:user.primaryEmailAddress?.emailAddress,
            features:featuresData
          }).where(eq(CarListing.id,id)).returning({id:CarListing.id})
          if (result){
            setLoader(false)
            setTriggerUploadImage(result[0].id);
            navigate('/profile')
          }
        }catch(e){
          console.log("ERROR INSERTING DATA",e);
    
        }
    }else{
      if (formRef.current.checkValidity()) {
        try{
          toast('Please Wait while the server is proccessing your request ...')
          const result = await db.insert(CarListing).values({
            ...formData,
            createdBy:user.primaryEmailAddress?.emailAddress,
            features:featuresData
          }).returning({id:CarListing.id});
          if (result){
            setLoader(false)
            setTriggerUploadImage(result[0].id);
          }
        }catch(e){
          console.log("ERROR INSERTING DATA",e);
    
        }
      }else {
        alert("Form is invalid. Please correct the errors and try again.");
        setLoader(false)
      }
    }
    
  }
  
  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 py-32'>
        <h2 className='text-4xl font-bold'>Add New Listing</h2>
        <form ref={formRef} action="" className='p-10 border rounded-xl mt-10'>
          <div>
            <h2 className='text-2xl font-medium mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-10'>
              {addlisting.carDetails.map((item,index)=>{return(
                              <div className='' key={item.name || index}>
                                <label className='mb-2 font-semibold flex items-center gap-1' htmlFor="">
                                    <IconField icon={item?.icon} />
                                    {item.label} {item.required && <span className='text-red-500 text-lg'>*</span>}
                                </label>
                                {
                                  item.fieldType === 'text' || item.fieldType === 'number' ? (
                                    <InputField HandleInputChange={HandleInputChange} item={item} carInfo={carEditInfo} />
                                  ) : item.fieldType === 'dropdown' ? (
                                    <DropDown HandleInputChange={HandleInputChange} item={item} carInfo={carEditInfo} />
                                  ) : item.fieldType === 'textarea' ? (
                                    <TextArea HandleInputChange={HandleInputChange} item={item} carInfo={carEditInfo} />
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
                        <Checkbox checked={featuresData?.[item.name]} onCheckedChange={(value)=>HandleFeaturesChange(item.name,value)
                        } />
                        <h2>{item.label}</h2>
                      </div>
                    )
                  })}
                </div>
            </div>
            <Separator className="my-10" />
            <div>
              <ImageUpload
               setLoader={(v)=>{setLoader(v);navigate('/profile')}} 
               triggerUploadImage={triggerUploadImage}
               carEditInfo={carEditInfo}
               />
            </div>


            <div className='w-full flex justify-end'>
                <button
                type='submit'
                onClick={(e)=>onSubmit(e)}
                disabled={loader}
                className='bg-indigo-900 text-white px-5 py-2 rounded-lg hover:bg-transparent hover:text-indigo-900'>
                    {loader?<BiLoaderAlt className='animate-spin'/>:'Submit'}
                </button>
            </div>
         
        </form>
      </div>
    </div>
  )
}

export default AddListing