import React from 'react'
import { Input } from "@/components/ui/input"


function InputField({item,HandleInputChange,carInfo}) {
  return (
    <div>
        <Input
         defaultValue={carInfo?.[item.name]}
         type={item?.fieldType} 
         name={item?.name} 
         required={item?.required} 
         onChange={(e)=>HandleInputChange(item.name,e.target.value)
         }
         />
    </div>
  )
}

export default InputField