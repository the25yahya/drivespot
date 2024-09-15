import React from 'react'
import { Input } from "@/components/ui/input"


function InputField({item,HandleInputChange}) {
  return (
    <div>
        <Input
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