import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function TextArea({item,HandleInputChange,carInfo}) {
  return (
    <div className='block'>
        <Textarea
        defaultValue={carInfo?.[item.name]}
        onChange={(e)=>HandleInputChange(item.name,e.target.value)}
        />
    </div>
  )
}

export default TextArea