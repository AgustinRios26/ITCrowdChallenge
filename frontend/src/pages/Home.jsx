import React, { useContext } from 'react'
import { authContext } from '../context/Auth'
import {Link} from 'react-router-dom'
import homeImg from '../resources/home.jpg'

export default function Home() {
  const {user,logged,setUser} = useContext(authContext)

  return (
    <main>
            <div className="container mx-auto overflow-hidden flex items-center justify-center py-4 ">
            <div className="md:w-1/2 py-14 px-12 flex flex-col items-center">
                    <h2 className=' text-5xl text-emerald-600 font-bold pb-6 ' >
                        Ecommerce
                    </h2>
                    <p className="text-2xl italic text-gray-600 mb-6">
                        A challenge for IT Crowd
                    </p>
                    {
                    !logged?<>
                    
                      <button className=' text-xl my-7'><Link className='bg-gray-300 py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
     duration-500' to="/login">Login</Link></button> 
                     <p className='text-gray-700 text-xl'>Or</p>
                     <button className='text-xl my-7'><Link className='bg-emerald-600 text-white py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
    duration-500' to="/signup">Get Started!</Link></button>
                    
              
                    </>:
                    <>
                    <p className='text-xl pb-4' >
                      See our products!
                    </p>
                        <button className=' text-xl md:my-0 my-7'><Link className='bg-emerald-600 text-white py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
    duration-500' to="/products">Click Here!</Link></button>
                    </>
                }
                   
                </div>
                <div className="flex justify-center max-w-[1000px] ">
                    <img src={homeImg} className='hidden md:block w-7/12' />
                </div>
            </div>
            </main>
  )
}
