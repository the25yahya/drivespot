import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Year } from '@/data/carfilter'

function Yearfilter() {
  return (
    <Select>
    <SelectTrigger className="w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Year" />
    </SelectTrigger>
    <SelectContent>
        {Year.map((item)=>{
          return(
            <SelectItem key={item.id} value={item.Year}>{item.Year}</SelectItem>
          )
        })}
    </SelectContent>
    </Select>
  )
}

export default Yearfilter