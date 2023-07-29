import { baseUrl } from '@/lib/config'
import Link from 'next/link';
import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaGreaterThan} from 'react-icons/fa'

export default function HotelCard({hotel}) {
    console.log(`${baseUrl}/${hotel?.images[0]}`);
  return (
    <Link href={`/hotels/${hotel?._id}`} className='bg-white box-shadow p-2 rounded-2xl relative'>
        <div className=' flex justify-between '>
            <div className='bg-green-300 rounded-2xl px-1  absolute top-4 left-4'>
                <span className='text-xs'>9.8</span>
            </div>
            <div className='bg-white bg-opacity-50 rounded-full p-1 absolute right-4 top-4'>
                <AiFillHeart color='white'/>
            </div>
        </div>
        <img src={hotel?.images[0]}  />

        <div className='py-3'>
            <p className='font-semibold text-sm'>{hotel?.hotelName}</p>
            <p className='font-light text-sm'>{hotel?.location?.city}</p>
        </div>
        <div className='flex justify-between font-semibold items-center'>
            <div>
                from  $130/night
            </div>
            <div>
            <FaGreaterThan/>
            </div>
        </div>

    </Link>
  )
}
