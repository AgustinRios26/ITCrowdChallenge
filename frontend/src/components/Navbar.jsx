import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { get } from '../api'
import { authContext } from '../context/Auth'
import logoImg from '../resources/logoit-crowd.png'

export default function Navbar() {
    const {user,logged,setUser} = useContext(authContext)
    const navigate = useNavigate()

    const logout = () =>{
        get("/auth/logout")
        .then(result=>{
            setUser({type:'LOGOUT'})
            navigate("/")
        })
    }

    let [open,setOpen]=useState(false);

    return (
         <nav className='shadow-md w-full  sticky top-0 left-0'>
            <div className='md:flex items-center justify-between min-h-[90px] bg-white py-4 md:px-10 px-7'>
                <div> <Link to="/">
                <img src={logoImg} />
                    </Link>
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to="/products">Products</Link></li>
                
                {
                    !logged?<>
                        <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to="/login">Login</Link></li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='bg-emerald-600 text-white py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
    duration-500' to="/signup">Sign Up</Link></li>
                    </>:
                    <>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>Hi {user.name}!</li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to="/create">Publish</Link></li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'><button className='bg-emerald-600 text-white py-2 px-6 rounded md:ml-0 hover:bg-emerald-400 
    duration-500' onClick={logout}>Log out</button></li>
                    </>
                }
           
            </ul>
        </div>
         </nav>
    
    )
}