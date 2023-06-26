import React from 'react'
import HotelCard from '../cards/HotelCard'

export default function PopularHotels() {
  return (
    <div className='py-20'>
        <div className='py-4'>
            <p className='font-semibold text-lg'>Hotel loved by guests</p>
        </div>
        <div className='grid grid-cols-5 gap-4'>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
            <HotelCard/>
        </div>
    </div>
  )
}
