import React from 'react'
import {BsArrowLeftShort } from 'react-icons/bs'

export default function HotelDetails() {
  return (
    <div>
        <div className='py-5'>
            <BsArrowLeftShort fontSize={28} fontWeight={'bold'}/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-2xl overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full max-h-full'  />
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <div className='rounded-2xl overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full h-full'  />
                </div>
            </div>
        </div>
        <div className='flex justify-between py-4'>
            <div>
                <h1 className='text-2xl font-bold'>Hotel Grand Sultan</h1>
                <p className=''>5 star hotel in the heart of Chittagong</p>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                    <p className='text-green-700'>Very Good</p>
                    <p>1920 reviews</p>
                </div>
                <div>
                    <span className='bg-green-200 text-green-700 px-2 py-1 rounded-full'>8.9</span>
                </div>
            </div>
        </div>
        {/* section  */}
        <div>
            <div className='border-b-2 border-gray-300 flex gap-10 px-2'>
                <button className='border-b-2 w-28 '>Overview</button>
                <button className='border-b-2 w-28'>Rooms</button>
                <button className='border-b-2 w-28'>Amenities</button>
                <button className='border-b-2 w-28'>Policies</button>
            </div>
            <div className='grid grid-cols-3'>
                <div className="col-span-2">
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}
