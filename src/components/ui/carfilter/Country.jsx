import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Country } from '@/data/carfilter'

function Countryfilter() {
  return (
    <Select>
    <SelectTrigger className="w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Country" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        {Country.map((item)=>{
          return(
              <SelectItem key={item.id} value={item.Country}>{item.Country}</SelectItem>
          )
        })}
    </SelectContent>
    </Select> 
  )
}

export default Countryfilter