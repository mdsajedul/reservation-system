'use client'
import React from 'react'

export default function InputField({id,name,type,required,onChange,placeholder,register,pattern,minLength,maxLength,label},props) {
    console.log(pattern);
  return (
    <>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>

        <input
            id={id}
            name={name}
            type={type}
            // autoComplete="email"
            placeholder={placeholder}
            // required={required}
            onChange={onChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
            {
                ...register(name,{required,pattern:{
                    value: pattern?.value,
                    message: pattern?.message
                },
                minLength: {
                    value:minLength,
                    message: `This input must exceed ${minLength} characters`
                },
                maxLength: {
                    value: maxLength,
                    message: `This input not be exceed ${maxLength} characters`
                }
            })
            }
            {
                ...props
            }
    />
    
    </>
    
  )
}
