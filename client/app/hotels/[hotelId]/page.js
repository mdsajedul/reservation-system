'use client'
import { useGetHotelByIdQuery, useGetRoomsByHotelIdQuery } from '@/lib/redux/features/hotel/hotelApi'
import React, { useState } from 'react'
import {BsArrowLeftShort } from 'react-icons/bs'
import { useParams } from 'next/navigation'
import RoomCard from '@/components/cards/RoomCard'

export default function HotelDetails() {
    const {hotelId}= useParams()
    const [panel,setPanel]=useState('overview')
    const {data,isLoading,isError,error:hotelDeatilsError} = useGetHotelByIdQuery(hotelId)
    const {data:rooms,isLoading:roomIsLoading,isError:roomIsError,error} = useGetRoomsByHotelIdQuery(hotelId)
    
    let roomCardContent;
    if(roomIsLoading){
        roomCardContent = <div>Loading</div>
    }else if(!roomIsLoading && roomIsError){
        roomCardContent = <div>{error?.data?.message}</div> 
    }else if(!roomIsLoading && !roomIsError && rooms.length<=0){
        roomCardContent = <div>No room found!</div>
    }else if(!roomIsLoading && !roomIsError && rooms.length > 0){
        roomCardContent = rooms?.map((room,index)=>(
            <RoomCard room={room} hotelId={hotelId} key={index}/>
        ))
    }

    let hotelDetailsContent;
    if(isLoading){
        hotelDetailsContent = <div>Loading</div>
    }else if(!isLoading && isError){
        hotelDetailsContent = <div>{hotelDeatilsError?.data?.message}</div>
    }else if(data){
        hotelDetailsContent = <div>
        <div className='py-5'>
            <BsArrowLeftShort fontSize={28} fontWeight={'bold'}/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-2xl overflow-hidden'>
                <img src={data?.images[0]} alt="" className='w-full max-h-full'  />
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={data?.images[0]} alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={data?.images[1]} alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={data?.images[0]} alt="" className='w-full h-full'  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={data?.images[1]} alt="" className='w-full h-full'  />
                </div>
            </div>
        </div>
        <div className='flex justify-between py-4'>
            <div>
                <h1 className='text-2xl font-bold'>Hotel Grand Sultan</h1>
                <p className=''>{data?.description?.overview}</p>
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
                <button onClick={()=>setPanel('overview')} className='border-b-2 w-28 '>Overview</button>
                <button onClick={()=>setPanel('policies')} className='border-b-2 w-28'>Policies</button>
            </div>
            <div className='grid grid-cols-3'>
                <div className="col-span-2 py-3 px-2">
                    {panel==='overview' &&
                    <div>
                        <div>
                            <p>{data?.description?.overview}</p>
                        </div>
                        <div>
                            <ul className='p-4'>
                                {
                                    data?.description?.features?.map((feature,index)=>(
                                        <li key={index}>{index+1}.{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>}
                    {panel==="policies"&&
                    <div>
                        <div>
                            <ul className='py-3 px-2'>
                                {
                                    data?.policies?.map((policy,index)=>(
                                        <li key={index}>
                                            <div>
                                                <p className='font-bold'>{policy?.name}</p>
                                                <p>{policy?.description}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>}
                    
                </div>
                <div>
                    {/* here will be right content         */}
                </div>
            </div>
            <div>
                <h3>Rooms</h3>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        roomCardContent
                    }
                </div>
            </div>
        </div>
    </div>
    }

  return (
    <div>
        {
            hotelDetailsContent
        }
    </div>
  )
}
