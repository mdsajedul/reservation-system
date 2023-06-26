import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaGreaterThan} from 'react-icons/fa'

export default function HotelCard() {
  return (
    <div className='bg-white box-shadow p-2 rounded-2xl relative'>
        <div className=' flex justify-between '>
            <div className='bg-green-300 rounded-2xl px-1  absolute top-4 left-4'>
                <span className='text-xs'>9.8</span>
            </div>
            <div className='bg-white bg-opacity-50 rounded-full p-1 absolute right-4 top-4'>
                <AiFillHeart color='white'/>
            </div>
        </div>
        <img src={'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} alt="" className='rounded-2xl'  />

        <div className='py-3'>
            <p className='font-semibold text-sm'>Hotel Grand Sultan</p>
            <p className='font-light text-sm'>Chittagong</p>
        </div>
        <div className='flex justify-between font-semibold items-center'>
            <div>
                from  $130/night
            </div>
            <div>
            <FaGreaterThan/>
            </div>
        </div>

    </div>
  )
}
