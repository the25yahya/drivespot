import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function DownPayement() {
  return (
    <Select>
    <SelectTrigger className="w-[120px] h-[40px] px-2 bg-white border-none">
        <SelectValue placeholder="Down Payement" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="Down Payement">Down Payement</SelectItem>
        <SelectItem value="No Down Payement">No Down Payement</SelectItem>
    </SelectContent>
    </Select> 
  )
}

export default DownPayement