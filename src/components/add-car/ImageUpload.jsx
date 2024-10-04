import React, { useEffect, useState } from 'react'
import { MdCloudUpload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { storage } from '../../../configs/firebaseConfig';
import { uploadBytes,ref, getDownloadURL } from 'firebase/storage';
import { carSellerImgs } from '../../../configs/schema';
import { db } from '../../../configs'
import { eq } from 'drizzle-orm';

function ImageUpload({triggerUploadImage,setLoader,carEditInfo,mode}) {
  
    useEffect(()=>{
        if (triggerUploadImage) {
            UploadImages();
        }
    },[triggerUploadImage])

    const [selectedFileList,setSelectedFileList] = useState([]);
    const [carEditImageList,setCarEditImageList] = useState([]);

    // Effect to update carEditImageList when carEditInfo changes
    useEffect(() => {
        if (mode === 'edit' && carEditInfo?.images) {
            setCarEditImageList([])
            // Ensure carEditInfo.images is an array before using it
            if (Array.isArray(carEditInfo.images)) {
                carEditInfo?.images.forEach((image)=>{
                    setCarEditImageList(prev=>[...prev,image?.imageUrl])
                })
            } else {
                console.warn('Expected carEditInfo.images to be an array but received:', carEditInfo.images);
            }
        }
    }, [carEditInfo, mode]);

    
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

    const RemoveImageDb = async(image,index)=>{
        const result = await db.delete(carSellerImgs).where((eq(carSellerImgs.imageUrl,image)))  
    }


    const UploadImages = async () => {
        console.log("trigger: ", triggerUploadImage);
        setLoader(true);
      
        const uploadTasks = selectedFileList.map(async (file) => {
          const fileName = Date.now() + '.jpeg';
          const storageRef = ref(storage, 'drivespot-carImgs/' + fileName);
          const metaData = {
            ContentType: 'image/jpeg',
          };
      
          try {
            // Upload file to Firebase Storage
            const snapShot = await uploadBytes(storageRef, file, metaData);
            console.log('File uploaded successfully:', snapShot);
      
            // Get the download URL
            const downloadUrl = await getDownloadURL(storageRef);
            console.log('Download URL:', downloadUrl);
      
            // Insert into database
            await db.insert(carSellerImgs).values({
              imageUrl: downloadUrl,
              carSellerId: triggerUploadImage,
            });
            console.log("Image saved successfully to DB.");
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        });
      
        // Wait for all uploads to complete
        await Promise.all(uploadTasks);
      
        // Set loader to false once all uploads are done
        setLoader(false);
      };
      

  return (
    <div className='my-20'>
        <h2 className='text-xl font-semibold'>Upload Images</h2>
        <div className='my-6'>
            <div className='flex items-center flex-wrap gap-2 my-6'>
                {mode=='edit'?
            carEditImageList.map((image,index)=>(
                <div key={index} className='relative'>
                    <h2 onClick={()=>RemoveImageDb(image,index)} className='absolute right-0 -top-4 text-lg cursor-pointer'><IoMdCloseCircle/></h2>
                    <div className='w-fit m-2'>
                        <img className='max-w-[300px] max-h-[300px] object-cover' src={image} alt="" />
                    </div>
                </div>
            )):selectedFileList.map((image,index)=>(
                <div key={index} className='relative'>
                    <h2 onClick={()=>RemoveImage(image,index)} className='absolute right-0 -top-4 text-lg cursor-pointer'><IoMdCloseCircle/></h2>
                    <div className='w-fit m-2'>
                        <img className='max-w-[300px] max-h-[300px] object-cover' src={URL.createObjectURL(image)} alt="" />
                    </div>
                </div>
            ))
            }
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