import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Brands } from '@/data/carfilter'

function Brand(props) {
  return (
                    <Select>
                        <SelectTrigger className="w-[120px] h-[40px bg-white border-none]">
                            <SelectValue placeholder="Brand" />
                        </SelectTrigger>
                        <SelectContent>
                            {Brands.map((item)=>{
                                return(
                                    <SelectItem key={item.id} value={item.Brand}>{item.Brand}</SelectItem>
                                )
                            })}
                        </SelectContent>
                   </Select>
  )
}

export default Brand