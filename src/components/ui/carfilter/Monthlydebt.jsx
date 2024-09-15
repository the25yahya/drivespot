import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function Monthlydebt() {
  return (
    <Select>
    <SelectTrigger className="px-2 w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Monthly Debt" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="Monthly Debt">Monthly Debt</SelectItem>
        <SelectItem value="No Monthly Debt">No Monthly Debt</SelectItem>
    </SelectContent>
    </Select> 
  )
}

export default Monthlydebt