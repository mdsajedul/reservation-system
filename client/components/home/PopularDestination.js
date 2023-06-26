import React from 'react';
import ImageCard from '../cards/ImageCard';

export default function PopularDestination() {
  return (
    <div className="py-20">
      <div className="py-4">
        <p className="font-semibold text-lg">Popular destinations</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div>
          <ImageCard
            destination="Dhaka"
            imageSrc="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80"
            height={400}
          />
        </div>
        <div className="grid gap-5">
          <ImageCard
            destination="Dhaka"
            imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            height={220}
          />
          <ImageCard
            imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            height={160} destination={'Khulna'}
          />
        </div>
        <div>
          <ImageCard
            destination="Dhaka"
            imageSrc="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            height={400}
          />
        </div>
        <div className="grid gap-5">
          <ImageCard
            imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            height={160} destination={'Tangail'}
          />
          <ImageCard
            imageSrc="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            height={220} destination={'Comilla'}
          />
        </div>
      </div>
    </div>
  );
}
