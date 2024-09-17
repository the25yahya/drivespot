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
          {cars.map((car)=>{
            return(
              <CarComponent
              key = {car.name}
              brand = {car.brand}
              name = {car.name}
              img = {car.img}
              id = {car.id}
              price = {car.price}
              type = {car.type}
              tag = {car.tag}
              />
            )
          })}
        </div>
        <div className='w-full grid place-items-center mt-10'>
            <button className='bg-indigo-900 text-lg flex rounded-lg items-center gap-2 text-white px-4 py-1 hover:bg-transparent hover:text-indigo-900 transition'>Discover All Cars <IoLogOutOutline/></button>
        </div>
      </div>
      <BuildDeal />
      <Footer />
    </div>
  )
}

export default App