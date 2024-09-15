import React from 'react'
import Deal from '../../assets/carmarket.jpg'

function BuildDeal() {
  return (
    <div className='flex items-start justify-center gap-16 mt-10 flex-wrap'>
        <div className='mt-20'>
            <h1 className='text-5xl font-bold'><span className='block'>Build Your Deal</span><span className='text-indigo-900'>With Confidence</span></h1>
            <p className='w-[500px] my-8'>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade in and monthly payements</p>
            <button className='bg-indigo-900 px-4 py-2 text-white transition hover:text-indigo-900 hover:bg-transparent rounded-lg'>Start your deal now</button>
        </div>
        <div>
            <img className='w-[500px]' src={Deal} alt="" />
        </div>
    </div>
  )
}

export default BuildDeal