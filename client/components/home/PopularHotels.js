import React, { useEffect } from 'react'
import HotelCard from '../cards/HotelCard'
import { useGetHotelsMutation } from '@/lib/redux/features/hotel/hotelApi'
import { useSelector } from 'react-redux';

export default function PopularHotels() {
  const [getHotels] = useGetHotelsMutation();
  const {hotels,isLoading,error} = useSelector((state)=>state.hotels)


  let cardsContent ;
  
  if(isLoading){
    cardsContent = <div>Loading...</div>
  }else if(error ){
    cardsContent = <div>Something went wrong</div>
  }else if(!isLoading && !error && hotels?.length<=0){
    cardsContent = <div>No Hotel Found!</div>
  }else if(!isLoading && !error && hotels?.length >0){
    cardsContent = hotels?.map((hotel,index)=>{
      return(
        <HotelCard hotel={hotel} key={index}/>
      )
    })
  }


  useEffect(()=>{
    getHotels()
  },[getHotels])
  return (
    <div className='py-20'>
        <div className='py-4'>
            <p className='font-semibold text-lg'>Hotel loved by guests</p>
        </div>
        <div className='grid grid-cols-5 gap-4'>
            {
              cardsContent
            }
        </div>
    </div>
  )
}
