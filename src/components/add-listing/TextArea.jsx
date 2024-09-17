import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function TextArea({item,HandleInputChange}) {
  return (
    <div className='block'>
        <Textarea
        onChange={(e)=>HandleInputChange(item.name,e.target.value)}
        />
    </div>
  )
}

export default TextArea