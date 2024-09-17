import React, { useState } from 'react'
import { MdCloudUpload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { storage } from '../../../configs/firebaseConfig';
import { uploadBytes,ref, getDownloadURL } from 'firebase/storage';

function ImageUpload() {
    const [selectedFileList,setSelectedFileList]=useState([]);

    const OnFileSelected = (e)=>{
        const files = e.target.files;
        for (let i = 0; i < files?.length; i++) {
            const file = files[i];
            setSelectedFileList((prev)=>[...prev,file])
        }
    }
    const RemoveImage = (image,index)=>{
        const result = selectedFileList.filter((item)=>item!=image);
        setSelectedFileList(result);
    }


    const UploadImages = () => {
        selectedFileList.forEach((file)=>{
            const fileName = Date.now()+'.jpeg';
            const storageRef = ref(storage,'drivespot-carImgs/'+fileName);
            const metaData = {
                ContentType : 'image/jpeg'
            }
            uploadBytes(storageRef,file,metaData).then((snapShot)=>{
                console.log('file uploaded successfully');
                
            }).then((res)=>{
                getDownloadURL(storageRef).then(async(downloadUrl)=>{
                    console.log(downloadUrl);
                    
                })
            })
        })
    }

  return (
    <div className='my-20'>
        <h2 className='text-xl font-semibold'>Upload Images</h2>
        <div className='my-6'>
            <div className='flex items-center flex-wrap gap-2 my-6'>
                {selectedFileList.map((image,index)=>(
                    <div key={index} className='relative'>
                        <h2 onClick={()=>RemoveImage(image,index)} className='absolute right-0 -top-4 text-lg cursor-pointer'><IoMdCloseCircle/></h2>
                        <div className='w-fit m-2'>
                            <img className='max-w-[300px] max-h-[300px] object-cover' src={URL.createObjectURL(image)} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <label htmlFor="upload-images">
                <div className=' border border-black p-5 rounded-xl grid place-content-center w-[150px] cursor-pointer h-[130px]'>
                    <MdCloudUpload className='text-3xl m-2' />
                </div>
            </label>
            <input multiple onChange={OnFileSelected} type="file" id='upload-images' className='opacity-0'/>
        </div>
    </div>
  )
}

export default ImageUpload