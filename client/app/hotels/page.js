import HorizontalHotelCard from '@/components/cards/HorizontalHotelCard'
import HotelCard from '@/components/cards/HotelCard'
import React from 'react'

export default function Hotels() {
  return (
    
    <div className=' grid grid-cols-3'>
        <div className='col-span-1 bg-[#F8F8F8] border-r-2 py-5'>
            <div>
                <div>
                    <span>Your Search</span>
                </div> 
                <div>
                    
                </div>
            </div>
        </div>
        <div className='col-span-2 p-5'>
            <div className='pb-5'>
                <p>140 search results for</p>
                <div className='flex justify-between'>
                    <p>Dhaka, Dec 9-12, 2 guest, 1 room</p>
                    <div className='border-2 rounded-full px-2 py-1'>
                        Sort By
                    </div>
                </div>
            </div>

            <div>
                <HorizontalHotelCard/>
            </div>
        </div>
    </div>
  )
}
