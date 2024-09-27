import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Brands } from '@/data/carfilter'
import { useStateContext } from '@/Context/ContextProvide'

function Brand(props) {
    const {handleBrandChange} = useStateContext()
  return (
                    <Select>
                        <SelectTrigger className="w-[120px] h-[40px bg-white border-none]">
                            <SelectValue placeholder="Brand" />
                        </SelectTrigger>
                        <SelectContent>
                            {Brands.map((item)=>{
                                return(
                                    <div key={item.id}>
                                        <SelectItem value={item.Brand}>{item.Brand}</SelectItem>
                                    </div>
                                )
                            })}
                        </SelectContent>
                   </Select>
  )
}

export default Brand