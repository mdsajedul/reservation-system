'use client'
import { useGetRoomByIdQuery } from '@/lib/redux/features/room/roomApi'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { BsCalendarEvent } from 'react-icons/bs'
import { TbStairs } from 'react-icons/tb'
import { MdPeopleOutline } from 'react-icons/md'
import {LuBath, LuBedDouble} from 'react-icons/lu'
import { FaSmoking, FaSmokingBan } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import InputField from '@/components/inputs/InputField'
import DatePicker from "react-datepicker";
import {format,addDays,differenceInDays } from 'date-fns'
import "react-datepicker/dist/react-datepicker.css";
import { usePostBookingMutation } from '@/lib/redux/features/booking/bookingApi'
<link rel="preload" href="react-datepicker/dist/react-datepicker.css"as='css'/> 



export default function Checkout() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room')
  const { register,  handleSubmit, watch, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(addDays(startDate,3)));
  const [bookingApi] = usePostBookingMutation()

  // console.log(startDate,endDate);

  
  const {data,isLoading,isError,error} = useGetRoomByIdQuery(roomId);

  const onSubmit =(data)=>{
    console.log(data);
    bookingApi({
      userId:'',
      roomId:'',
      guests:'',
      totalPrice:'',
      paymentStatus:'',
      BookingStatus:'',
      paymentMethod:'',
      checkInDate:'',
      checkOutDate:''
    })
    .unwrap()
    .then((response)=>{
      console.log('res',response);
    }).catch((error)=>{
      console.log('err',error)
    })
  }
  
  let roomDetailsContent;
  if(isLoading){
    roomDetailsContent = <div>Loading</div>
  }else if(isError){
    roomDetailsContent = <div>{error}</div>
  }else if(data){
    roomDetailsContent = (
      <div className='py-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='md:grid md:grid-cols-3 sm:grid-cols-1'>
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
            <div className='pt-8'>
              <h1>Overview</h1>

            </div>
            <div className='pt-8'>
              <h2>Enter your details</h2>
              <div>
                <div >
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                      <div>
                        <InputField 
                              label={"Your name"}
                              id={'name'}
                              type={'text'}
                              placeholder={'Your name'}
                              name={'name'}
                              register={register}
                              required="Name is required"
                              minLength={8}
                          />
                          {errors.name && <span className='text-red-600 text-xs py-3'>{errors.name.message}</span>}
                      </div>
                      <div>
                        <InputField 
                              label="Email adddress"
                              id={'email'}
                              type={'email'}
                              placeholder={' Your Email'}
                              name={'email'}
                              register={register}
                              required="Email is required"
                            pattern={{
                              value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message:"Invalid email address"
                            }}
                          />
                          {errors.email && <span className='text-red-600 text-xs py-3'>{errors.email.message}</span>}
                      </div>
                      <div>
                        <InputField 
                              label={"Your phone"}
                              id={'phone'}
                              type={'number'}
                              placeholder={'Your phone'}
                              name={'phone'}
                              register={register}
                              required="Phone number is required"
                              minLength={11}
                          />
                          {errors.phone && <span className='text-red-600 text-xs py-3'>{errors.phone.message}</span>}
                      </div>
                      <div>
                        <InputField 
                              label={"Guests"}
                              id={'guests'}
                              type={'number'}
                              placeholder={'Guests'}
                              name={'guests'}
                              register={register}
                              required="Guests number is required"
                              minLength={1}
                          />
                          {errors.guests && <span className='text-red-600 text-xs py-3'>{errors.guests.message}</span>}
                      </div>
                      <div>
                        <label className='text-sm' htmlFor="checkInDate">Check In</label> <br />
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
                        />
                      </div> 
                      <div>
                      <label className='text-sm' htmlFor="checkInDate">Check out</label> <br />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
                      />
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
                    <p className='text-sm font-semibold'>{format(new Date(startDate),'ccc, d LLL uu')}</p>
                    <p>From {data?.hotel?.checkInTime}</p>
                  </div>
                  <div className='border-r-2'></div>
                  <div>
                    <p className='pb-2 text-gray-500'>CHECK-OUT</p>
                    <p className='text-sm font-semibold'>{format(new Date(endDate),'ccc, d LLL uu')}</p>
                    <p>From {data?.hotel?.checkOutTime}</p>
                  </div>
                </div>
                <div className='p-2'>
                  <p className='text-gray-500 text-xs'>TOTAL LENGTH OF STAY</p>
                  <div className='flex items-center'>
                    <span className='text-gray-500 text-xs pe-2'>{differenceInDays(endDate,startDate)+1} days </span> <BsCalendarEvent color='gray' fontSize={'14px'}/>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='pb-3 pt-4 text-sm'>Your price summary</h2>
                <table className="table-auto w-full">
                    <tbody className='w-full ps-5'>
                      <tr className='text-xs'>
                        <td>Room</td>
                        <td>{data?.room?.price}</td>
                      </tr>
                      <tr className='text-xs'>
                        <td>VAT (8%)</td>
                        <td>1200</td>
                      </tr>
                      <tr className='py-1'
                      >

                      </tr>
                      <tr className='text-sm font-semibold pt-2'>
                        <td>Total</td>
                        <td>3800</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <div className='py-3'>
                <input className='w-full bg-blue-600 text-white px-2 py-2 rounded-md text-sm cursor-pointer'
                  value={'Request To Book'}
                  type='submit'

                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className=''>{roomDetailsContent}</div>
  )
}
