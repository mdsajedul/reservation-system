import React from 'react'
import Button from '../buttons/Button'

export default function RoomCard({room}) {
  return (
    <div className='bg-white box-shadow p-2 rounded-2xl relative'>
        <div className='rounded-2xl overflow-hidden'>
            <img src={room?.images[0]} alt="" />
        </div>
        <div className='py-2 px-1'>
            <h3>{room?.roomType} - {room?.bedType}</h3>
            <p className='text-sm pb-2'>{room?.description?.overview}</p>
            <table class="table-fixed w-full text-xs py-2">
                <tbody className='py-2'>
                    <tr>
                        <td>Room Type </td>
                        <td>{room?.roomType}</td>
                    </tr>
                    <tr>
                        <td>Bed Type</td>
                        <td>{room?.bedType}</td>
                    </tr>
                    <tr>
                        <td>Occupancy</td>
                        <td>{room?.occupancy}</td>
                    </tr>
                </tbody>
            </table>
            <div className='py-2'>
                {
                    room?.facilities?.map((fc,index)=>(
                        <span className='bg-gray-200 text-gray-800 text-xs p-1 rounded-md' key={index}>{fc}</span>
                    ))
                }
            </div>
        </div>
        <div>
            <button className='bg-blue-600 text-white w-full rounded-md px-2 py-1 shadow-md' >Book now for $200</button>
        </div>
    </div>
  )
}
