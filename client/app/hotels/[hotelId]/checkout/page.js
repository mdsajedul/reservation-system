'use client'
import { useGetRoomByIdQuery } from '@/lib/redux/features/room/roomApi'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { BsCalendarEvent } from 'react-icons/bs'
import { TbStairs } from 'react-icons/tb'
import { MdPeopleOutline } from 'react-icons/md'
import {LuBath, LuBedDouble} from 'react-icons/lu'
import Button from '@/components/buttons/Button'
import { FaSmoking, FaSmokingBan } from 'react-icons/fa'


export default function Checkout() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room')
  
  const {data,isLoading,isError,error} = useGetRoomByIdQuery(roomId);
  
  let roomDetailsContent;
  if(isLoading){
    roomDetailsContent = <div>Loading</div>
  }else if(isError){
    roomDetailsContent = <div>{error}</div>
  }else if(data){
    roomDetailsContent = (
      <div className='py-5'>
        <div className='md:grid md:grid-cols-3 sm:grid-cols-1'>
          <div className='col-span-2 p-3'>
            <div className='border rounded p-2 shadow md:flex gap-3'>
              <div className='flex items-center'>
                <img className='rounded md:w-40 ' src={data?.room?.images[0]} alt=""/>
              </div>
              <div>
                <span className='text-xs bg-green-600 text-white rounded-3xl px-2 py-1'>{data?.room?.availability}</span>
                <h2 className='pb-1'>King bed stylish apartment with loft style room</h2>
                <h2 className='pt-1 pb-2'>Price {data?.room?.price}</h2>
                <div className='flex justify-between'>
                  <div className='text-gray-500 text-xs'>
                    <span className=''>BEDS</span>
                    <div className='flex items-center gap-1'>
                      <span >{data?.room?.bedType}</span>
                      <LuBedDouble/>
                    </div>
                  </div>
                  <div className='text-gray-500 text-xs'>
                    <span className=''>GUESTS</span>
                    <div className='flex justify-center items-center gap-1'>
                      <span >{data?.room?.occupancy}</span>
                      <MdPeopleOutline/>
                    </div>
                  </div>
                  <div className='text-gray-500 text-xs'>
                    <span className=''>BATHROOMS</span>
                    <div className='flex justify-center items-center gap-1'>
                      <span >3</span>
                      <LuBath/>
                    </div>
                  </div>
                  <div className='text-gray-500 text-xs'>
                    <span className=''>FLOORS</span>
                    <div className='flex justify-center items-center gap-1'>
                      <span >{data?.room?.floor}</span>
                      <TbStairs/>
                    </div>
                  </div>
                  <div className='text-gray-500 text-xs'>
                    <span className=''>SMOKING</span>
                    <div className='flex justify-center items-center gap-1'>
                      <span >{data?.room?.smokingPolicy===true?'YES':'NO'}</span>
                      {
                        data?.room?.smokingPolicy===true? <FaSmoking/>:<FaSmokingBan/>
                      }
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='p-3 w-full'>
            <div className='border rounded p-3 bg-white shadow'>
              <h2 className='pb-3  text-sm'>Reservation summary</h2>
              <div className='py-2 border rounded'>
                <div className="flex justify-between px-2 text-xs pb-2">
                  <div className=''>
                    <p className='pb-2 text-gray-500'>CHECK-IN</p>
                    <p className='text-sm font-semibold'>Sun, 22 May 2023</p>
                    <p>From {data?.hotel?.checkInTime}</p>
                  </div>
                  <div className='border-r-2'></div>
                  <div>
                    <p className='pb-2 text-gray-500'>CHECK-OUT</p>
                    <p className='text-sm font-semibold'>Wed, 25 May 2023</p>
                    <p>From {data?.hotel?.checkOutTime}</p>
                  </div>
                </div>
                <div className='p-2'>
                  <p className='text-gray-500 text-xs'>TOTAL LENGTH OF STAY</p>
                  <div className='flex items-center'>
                    <span className='text-gray-500 text-xs pe-2'>3 days </span> <BsCalendarEvent color='gray' fontSize={'14px'}/>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='pb-3 pt-4 text-sm'>Your price summary</h2>
                <table class="table-auto w-full">
                    <tbody className='w-full ps-5'>
                      <tr className='text-xs'>
                        <td>Room</td>
                        <td>{data?.room?.price}</td>
                      </tr>
                      <tr className='text-xs'>
                        <td>VAT (8%)</td>
                        <td>1200</td>
                      </tr>
                      <div className='py-1'
                      >

                      </div>
                      <tr className='text-sm font-semibold pt-2'>
                        <td>Total</td>
                        <td>3800</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <div className='py-3'>
                <button className='w-full bg-blue-600 text-white px-2 py-2 rounded-md text-sm'>Request To Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=''>{roomDetailsContent}</div>
  )
}
