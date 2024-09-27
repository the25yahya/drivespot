import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Type } from '@/data/carfilter'

function Typefilter() {
  return (
    <Select>
    <SelectTrigger className="w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Type" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        {Type.map((item)=>{
          return(
              <SelectItem key={item.id} value={item.Type}>{item.Type}</SelectItem>
          )
        })}
    </SelectContent>
    </Select> 
  )
}

export default Typefilter