// import  from 'next/navigation';
import React from 'react'
import { TbServerOff } from 'react-icons/tb';

export default function ErrorHandler({error}) {
    // console.log(error);
    let errorContent;
    if(error.status==="FETCH_ERROR"){
        errorContent = 
        <div className='h-screen flex items-center'>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p className="font-bold">An error occurred</p>
                <p>{error?.message}</p>
                <p>Network Error, Check your internet connection</p>
            </div>
        </div>
        
    }else if(error?.status===500){
        errorContent= 
        <div className=' py-14 flex justify-center items-center'>
            <div>
                <div className='flex justify-center'>
                    <div className='bg-red-100 rounded-full p-3'>
                        <div className='bg-red-200 rounded-full p-5'>
                            <TbServerOff fontSize={72} color='red' className='text-center '/>
                        </div>
                    </div>
                    
                </div>
                <h1 className='text-red-500 text-4xl text-center font-bold py-3'>500 - Server Error</h1>
                <p className='text-lg text-center font-semibold text-gray-700'>Oops something went wrong. Try to refresh this page </p> <p className='text-center text-lg font-semibold text-gray-700'> or feel free to contact us if the problem presists. </p>
            </div>
        </div>
    }else if(error?.status===401){
       console.log('401');
    }
  return (
    <div>
        {
            errorContent
        }
    </div>
  )
}
