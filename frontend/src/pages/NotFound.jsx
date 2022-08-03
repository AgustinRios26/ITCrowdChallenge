import React from 'react'
import notFound from '../resources/error.jpg'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container mx-auto overflow-hidden flex-col md:flex items-center justify-center py-4 ">
    <div className="flex justify-center max-w-[600px]">
      <img src={notFound} className='md:block w-7/12' />
    </div>
      <div className="md:w-1/2 py-14 px-12 flex flex-col items-center">
        <p className='text-xl pb-6 '>Page Not Found</p>
        <button className=' text-xl md:my-0 my-7'><Link className='bg-emerald-600 text-white py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
    duration-500' to="/">Go to home</Link></button>
      </div>
   </div>   
  )
}