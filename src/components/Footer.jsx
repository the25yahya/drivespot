import React from 'react'
import img from '../assets/footer.png'
function Footer() {
  return (
    <footer className=' border-t shadow-lg py-8 mt-20 bg-slate-100'>
        <div className='flex flex-wrap items-center justify-around gap-20'>
        <div>
            <h1 className='text-4xl font-bold'>
                <span className='block'>Buy and Sell cars.</span><span className='text-indigo-900'>Best Online Platform</span>
            </h1>
            <button className='my-10 rounded-lg text-lg bg-indigo-900 hover:bg-transparent text-white hover:text-indigo-900 transition px-4 py-2'>Get started</button>
            <img className='w-[600px]' src={img} alt="" />
        </div>
        <div className='flex gap-10'>
            <div>
                <h4 className='font-bold text-lg text-indigo-900 mb-8'>Buy & Sell</h4>
                <p className='font-semibold opacity-60 mt-2'>New Cars</p>
                <p className='font-semibold opacity-60 mt-2'>Used cars</p>
                <p className='font-semibold opacity-60 mt-2'>Sell Cars</p>
            </div>
            <div>
                <h4 className='font-bold text-lg text-indigo-900 mb-8'>Products</h4>
                <p className='font-semibold opacity-60 mt-2'>Auto News</p>
                <p className='font-semibold opacity-60 mt-2'>Video Review</p>
                <p className='font-semibold opacity-60 mt-2'>Dealer inspire</p>
            </div>
            <div>
                <h4 className='font-bold text-lg text-indigo-900 mb-8'>Abouts us</h4>
                <p className='font-semibold opacity-60 mt-2'>About us</p>
                <p className='font-semibold opacity-60 mt-2'>Contact cars</p>
                <p className='font-semibold opacity-60 mt-2'>Faq Cars</p>
            </div>
        </div>
        </div>
        <div className='w-full grid place-items-center'><p className='mt-10 opacity-90'>&copy; DriveSpot 2024 All Rights Reserved.</p></div>
    </footer>
  )
}

export default Footer