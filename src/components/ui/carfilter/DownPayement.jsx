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
    <SelectTrigger className="w-[120px] h-[40px] bg-white border-none">
        <SelectValue placeholder="Brand" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
    </SelectContent>
    </Select> 
  )
}

export default DownPayement