import React from 'react'
import { useStateContext } from '@/Context/ContextProvide'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Year } from '@/data/carfilter'

function Yearfilter() {

  const {filter,handleYearChange} = useStateContext()
  return (
    <Select>
    <SelectTrigger className="w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Year" />
    </SelectTrigger>
    <SelectContent
    >
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