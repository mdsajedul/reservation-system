import Image from 'next/image';
import React from 'react'

export default function ImageCard({imageSrc, destination, height}) {
    const cardStyle = {
        height: height? `${height}px` : 'auto'
    };
  return (
    <div className='rounded-2xl relative overflow-hidden shadow' style={cardStyle}>
        <img src={imageSrc} alt='destinaiton' className='w-full h-full' />
        <div className="absolute bottom-3 left-3 text-xs  rounded-2xl  px-4 py-1 bg-white bg-opacity-75 text-black">
        <p className="text-sm">{destination}</p>
      </div>
    </div>
  )
}
