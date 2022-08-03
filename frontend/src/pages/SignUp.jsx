import React, { useContext, useState } from 'react'
import { post } from '../api'
import Errors from '../components/Errors'
import { authContext } from '../context/Auth'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import signupImg from '../resources/signup.jpg'


export default function SignUp() {

    const {setUser} = useContext(authContext)
    const navigate = useNavigate()

    const name = useInput("name","")
    const email = useInput("email","")
    const password = useInput("password","")

    const [errors,setErrors] = useState({
        isErrors:false,
        errors:[]
    })

    const signup = (event)=>{
        event.preventDefault()

        post("/auth/signup",{
            email:email.value,
            password:password.value,
            name:name.value
        }).then(({user})=>{
            setUser({type:'SIGNUP',payload:user})
            navigate("/products")
        })
        .catch(error=>{
            setErrors({
                isErrors:true,
                errors:error.errors.map(e=>e.message)
            })
        })

    }

    return (
        <>
        <main className="h-screen -mt-24">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="max-w-[600px] md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img src={signupImg} className="w-screen" alt="Signup Img"/>
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form onSubmit={signup}>
            
          <div className="mb-6">
            <h2 className="flex justify-center items-center mb-6 text-3xl font-semibold" >Sign Up</h2>
            <input className="form-control block w-full px-4 py-2 text-xl text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name" {...name} />
          </div>
          <div className="mb-6">
            <input className="form-control block w-full px-4 py-2 text-xl text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email" {...email}/>
          </div>

          <div className="mb-6">
            <input className="form-control block w-full px-4 py-2 text-xl text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password"{...password}/>
          </div>

          <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">Sign Up</button>
          <Errors errors={errors}/>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <a className='px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3' href='http://localhost:4000/auth/google'><FcGoogle className='mr-7 '/> Continue with Google</a>

          <a className='px-7 py-3 text-white bg-[#1877f2] font-medium text-sm leading-snug uppercase rounded mb-4 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center' href='http://localhost:4000/auth/facebook'><FaFacebook className='mr-7 '/> Continue with Facebook</a>
          
        </form>
      </div>
    </div>
  </div>
</main>
        </>
    )
}