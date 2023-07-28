'use client'
import InputField from '@/components/inputs/InputField'
import { useLoginMutation, useRegisterMutation } from '@/lib/redux/features/auth/authApi'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {

    const [inLoginPage,setInLoginPage]= useState(true)
    const [register] = useRegisterMutation()
    const [login] = useLoginMutation()
    const { register: registers,  handleSubmit, watch, formState: { errors } } = useForm();

    console.log(errors);

    const onSubmit = (data)=>{
        console.log(data);
        if(inLoginPage){
            login({
                email: data.email,
                password: data.password
            })
        }else{
            register({
                email:data.email,
                password:data.password,
                username: data.name
            })
        }
    }
      

  return (
    <div className='h-full bg-white'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {!inLoginPage &&
                    <div>
                        <InputField 
                            label={"Your name"}
                            id={'name'}
                            type={'text'}
                            placeholder={'Your name'}
                            name={'name'}
                            register={registers}
                            required="Name is required"
                            minLength={8}
                        />
                            {errors.name && <span className='text-red-600 text-xs py-3'>{errors.name.message}</span>}
                    </div>}
                    <div>
                        <InputField 
                            label="Email adddress"
                            id={'email'}
                            type={'email'}
                            placeholder={' Your Email'}
                            name={'email'}
                            register={registers}
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
                            label="Password"
                            id={'password'}
                            type={'password'}
                            placeholder={'Password'}
                            required="Password is required"
                            name={'password'}
                            register={registers}
                            minLength={8}
                        />
                        {errors.password && <span className='text-red-600 text-xs py-3'>{errors.password.message}</span>}
                    </div>

                    {!inLoginPage &&
                    <div>
                        <InputField 
                            label="Re-Enter Password"
                            id={'rePassword'}
                            type={'password'}
                            placeholder={'Password'}
                            required="Re-enter Password is required"
                            name={'rePassword'}
                            register={registers}
                            minLength={8}
                        />
                        {errors.rePassword && <span className='text-red-600 text-xs py-3'>{errors.rePassword.message}</span>}
                    </div>}

                    <div>
                        <input
                            type="submit"
                            value={'Sign in'}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    {inLoginPage? 'Not a member?' : 'Already a member?'} {' '}
                    <button onClick={()=>setInLoginPage(!inLoginPage)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {inLoginPage? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    </div>
  )
}
