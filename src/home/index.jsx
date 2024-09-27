import React from 'react'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Category from '../components/home/Category'
import salary from '../assets/salary.png'
import calendar from '../assets/schedule.png'
import protection from '../assets/encrypted.png'
import cert from '../assets/award.png'
import CarComponent from '../components/ui/CarComponent'
import cars from '../data/cars.json'
import { IoLogOutOutline } from "react-icons/io5";
import BuildDeal from '../components/home/BuildDeal'
import Footer from '../components/Footer'
import { FaMedal } from "react-icons/fa";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Category />
      <div className='text-center py-20 mt-10'>
        <div className='w-full grid place-items-center'>
          <h1 className='text-center text-5xl font-semibold'>
            <span className='block mb-2'>All The Ways To Find</span><span className='text-indigo-900'>Car Chemistry</span>
          </h1>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-16 mt-16'>
          <div className='flex items-center'>
            <img className='w-10' src={salary} alt="" />
            <p className='w-32 font-extrabold'>Money back Guarantee</p>
          </div>
          <div className='flex items-center'>
            <img className='w-10' src={calendar} alt="" />
            <p className='w-32 font-extrabold'>6 months-warranty</p>
          </div>
          <div className='flex items-center'>
            <img className='w-10' src={protection} alt="" />
            <p className='w-32 font-extrabold'>175 inspection point</p>
          </div>
          <div className='flex items-center'>
            <img className='w-10' src={cert} alt="" />
            <p className='w-32 font-extrabold'>Certified Pre-owned</p>
          </div>
        </div>
        <div className='my-20 flex flex-wrap items-center justify-center gap-10'>
          {cars.map((car,index)=>{
            return(
              <div key={index} className='border rounded-lg shadow-lg w-fit p-4'>
              <div className='w-full flex justify-between items-start'>
                  <div className='text-start'>
                      <h2 className='font-bold text-lg'>{car.name}</h2>
                      <p className='font-semibold text-gray-400'>{car.type}</p>
                  </div>
                  <img className='cropped-image w-8 mt-1' src={car.brand} alt="" />
              </div>
              <div className='cursor-pointer  h-[215px] w-72'>
                  <img className='cropped-image' src={car.img} alt="" />
              </div>
              <div className='flex justify-between items-center'>
                  <div className='text-sm gap-1 flex items-center py-1 px-2 rounded-lg bg-red-100 text-red-900'>
                      <p><FaMedal/></p>
                      <p>{car.tag?car.tag:'New'}</p>
                  </div>
                  <p className='text-lg font-bold'>${car.price}</p>
              </div>
         </div>)
          })}
        </div>
        <div className='w-full grid place-items-center mt-10'>
            <Link to={'/search'}>
              <button className='bg-indigo-900 text-lg flex rounded-lg items-center gap-2 text-white px-4 py-1 hover:bg-transparent hover:text-indigo-900 transition'>Discover All Cars <IoLogOutOutline/></button>
            </Link>
        </div>
      </div>
      <BuildDeal />
      <Footer />
    </div>
  )
}

export default App