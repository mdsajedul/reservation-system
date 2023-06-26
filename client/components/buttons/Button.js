'use client'
import React from 'react';
const Button = ({children, variant, onClick, size})=>{

    const getVariantClasses = (variant) =>{
        if(variant==='primary'){
            return 'bg-blue-600 text-white'
        }
        else if(variant==='secondary'){
            return 'bg-gray-600 text-white'
        }
        else if(variant==='outline-primary'){
            return 'border-2 border-blue-600 bg-white text-blue-600'
        }
    }

    const getSizeClasses = (size)=>{
        if(size==='sm'){
            return '1';
        }else if (size==='md'){
            return '2';
        }else if(size==='lg'){
            return '3'
        }
    }

    const buttonClasses = `py-2 px-4 rounded-lg  cursor-pointer ${getVariantClasses(
        variant
      )}`;

    return(
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
