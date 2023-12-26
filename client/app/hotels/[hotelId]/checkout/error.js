'use client'
import ErrorHandler from '@/components/errors/ErrorHandler'
import React from 'react'

export default function Error({error}) {
  return (
    <div><ErrorHandler error={error}/></div>
  )
}
