import Image from 'next/image'
import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function HeroBanner() {
  return (
    <section>
        <div>
          <div className="relative">
            <Image  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hero Image" width={1080} height={720} className="w-full h-72 relative rounded-3xl opacity-90 bg-blend-overlay" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">Book your hotel by Tripstar</h1>
              <h2 className="text-lg md:text-2xl text-white font-medium">2345 hotels in locations around the world</h2>
            </div>
          </div>
          <div className='flex justify-center '>
            <div style={{top:'375px'}} className='grid absolute grid-cols-9 w-7/12  bg-white shadow-md rounded-full px-10 py-3'>
              <div className='col-span-2 border-r-2 flex justify-center'>
                <div>
                  <p className='text-sm font-semibold'>Location</p>
                  <p className='font-light text-sm'>Where are you going</p>
                </div>
              </div>
              <div className='col-span-2 border-r-2 flex justify-center'>
                <div>
                  <p className='text-sm font-semibold'>Check-in</p>
                  <p className='font-light text-sm'>Add date</p>
                </div>
              </div>
              <div className='col-span-2 border-r-2 flex justify-center'>
                <div>
                  <p className='text-sm font-semibold'>Check-out</p>
                  <p className='font-light text-sm'>Add date</p>
                </div>
              </div>
              <div className='col-span-2 border-r-2 flex justify-center'>
                <div>
                  <p className='text-sm font-semibold'>Guest</p>
                  <p className='font-light text-sm'>Number of guest</p>
                </div>
              </div>
              <div className='col-span-1 flex ps-5 justify-center items-center'>
                <div className=''>
                  <BsFillArrowRightCircleFill fontSize={36} color='blue'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
