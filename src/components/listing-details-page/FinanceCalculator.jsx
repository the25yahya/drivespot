import React from 'react'

function FinanceCalculator() {
  return (
    <form className='w-[600px] border border-gray-300 shadow-lg mt-10 p-6'>
        <h1 className='text-2xl font-bold mb-4'>Finance Calculator</h1>
        <div className='grid grid-cols-2'>
            <div>
                <label htmlFor="price" className='block text-sm mb-1'>Price</label>
                <input className='border border-gray-300' type="text" id='price' name='price' required />
            </div>
            <div>
                <label htmlFor="interest" className='block text-sm mb-1'>Interest rate</label>
                <input className='border border-gray-300' type="text" name='interest' />
            </div>
            <div className='mt-4'>
                <label className='block text-sm mb-1' htmlFor="payement-years">payement-years</label>
                <input className='border border-gray-300' type="text" required name='payement-years' />
            </div>
        </div>
        <button type='submit' className='bg-indigo-900 rounded-lg px-4 py-1 text-white hover:text-black hover:bg-transparent transition mt-4'>Calculate</button>
    </form>
  )
}

export default FinanceCalculator