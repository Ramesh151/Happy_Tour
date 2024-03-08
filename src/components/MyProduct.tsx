import React from 'react'
import CardC from './CardC'

export default function MyProduct() {
  return (
    <div>
      <h1 className=' text-yellow-100 text-5xl lg:text-5xl md:text-3xl font-mono text-center mb-4'>
        MY Products 
      </h1>
        <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-3 place-items-center'>
       <CardC/>
       <CardC/>
       <CardC/>
       <CardC/>
       <CardC/>
    </div>
    </div>
  
  )
}
