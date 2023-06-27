import React from 'react'
import Button from '../buttons/Button'

export default function HorizontalHotelCard() {
  return (
    <div className='grid grid-cols-4 box-shadow p-3 rounded-lg'>
        <div className='col-span-1'>
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt=""  className='w-full h-full rounded-lg'/>
        </div>
        <div className='col-span-2 px-5'>
            <div className='pb-1'>
                <h4 className='font-bold text-base'>Hotel Grand Sultan</h4>
                <p className='font-light text-sm'>0.5 km from city center</p>
                <div className='font-light text-sm'>
                    <span>Free cancellation</span> . <span>Brackfast included</span>
                </div>
            </div>
            <div>
                <h3 className='font-semibold text-base'>Confort Room</h3>
                <p className='font-light text-sm'>1x King size bed</p>
                <p className='font-light text-sm'>1x bathroom</p>
            </div>
            <div className='py-2'>
                <div className=''>
                    <span className='border-2 border-blue-700 px-3 py-1 rounded-full text-blue-600 text-sm'>#Hot deal</span>
                </div>
            </div>
        </div>
        <div className='col-span-1 relative'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-green-600'>Very Good</p>
                    <p className='font-light text-sm'>832 reviews</p>
                </div>
                <div>
                    <span className='bg-green-200 text-green-700 px-2 py-1 rounded-full'>8.9</span>
                </div>
            </div>
            <div className='bottom-1 absolute'>
                <p className="text-lg font-semibold">$450</p>
                <Button variant='primary'>See booking options</Button>
            </div>
        </div>
    </div>
  )
}
