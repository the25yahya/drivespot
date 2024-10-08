import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
function DropDown({item,HandleInputChange,carInfo}) {
  return (
    <div>
        <Select defaultValue={carInfo?.[item.name]} required={item.required} onValueChange={(value)=>{
          HandleInputChange(item.name,value) 
        }}>
            <SelectTrigger className="w-[200px] md:w-[500px]">
                <SelectValue placeholder={carInfo?.[item.name]?carInfo?.[item.name]:item.label} />
            </SelectTrigger>
            <SelectContent>
                {item.options.map((option,idx)=>{return(
                    <SelectItem key={idx} value={option}>{option}</SelectItem>
                )})}
            </SelectContent>
        </Select>
    </div>
  )
}

export default DropDown