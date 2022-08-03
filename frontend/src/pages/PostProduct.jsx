import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import Swal from 'sweetalert2';
import useInput from '../hooks/useInput';


export default function PostProduct() {
    const navigate = useNavigate()
     
    const name = useInput("name","")
    const description = useRef()
    const price = useInput("number","")
    const image = useInput("text","")

    const alertJob=()=>{
      Swal.fire({
        icon:"success",
        title:"Product Created!",
        timer:"4000"
      })
    }
  
    const postProduct = (event) =>{
      event.preventDefault()
      post("/products",{
        name:name.value,
        description:description.current.value,
        price:price.value,
        image:image.value
      })
      .then(data=>{
        alertJob()
        navigate("/products",{
          replace:true
      })
      })
      .catch(error=>{
      })
  
  
    }
  return (
    <div className='bg-gray-200 pt-2 overflow-hidden flex items-center justify-center' >
      <div className='max-w-4xl flex'>
      <img src='https://cdn.store-assets.com/s/160552/f/5670463.jpeg' className='hidden md:block w-1/2' />
      <div className='md:w-1/2  bg-white pb-8 px-12' >
      <form onSubmit={postProduct}>
        <h2 className='flex justify-center font-semibold text-xl py-3 '>Publish a Product</h2>
      <input className="w-full p-3 mb-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="Product Name" {...name} required />
      <span className='pb-1' >Description</span>
      <textarea ref={description} className="resize-none w-full p-3 mb-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" rows="8" placeholder='Describe your product' required></textarea>
      <span className='pb-1' >Price</span>
      <input className="w-full p-3 mb-3 text-md border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="1000" min="1" {...price} required />
      <span>Image</span>
      <input className="w-full p-3 mb-3 text-md border rounded shadow focus:outline-none focus:shadow-outline" placeholder="Please enter a URL" {...image} required />

      <button className="inline-block px-7 py-3 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out w-full">Create</button>

      </form>
      </div>

      </div>
    </div>
  )
}
