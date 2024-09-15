import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
function DropDown({item}) {
  return (
    <div>
        <Select>
            <SelectTrigger className="w-[200px] md:w-[500px]">
                <SelectValue placeholder={item.label} />
            </SelectTrigger>
            <SelectContent>
                {item.options.map((option)=>{return(
                    <SelectItem key={item.label} value="option">{option}</SelectItem>
                )})}
            </SelectContent>
        </Select>
    </div>
  )
}

export default DropDown