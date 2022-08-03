import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { get,deletes } from '../api';
import Swal from 'sweetalert2';
import { authContext } from '../context/Auth';
import { FaArrowLeft } from 'react-icons/fa';

export default function Product() {
    const {user,logged,setUser} = useContext(authContext)
    const {id} = useParams();
 
    // const navigate = useNavigate()
    const role = 2

    const [oneProduct, setOneProduct] = useState([]);

    useEffect(() => {
      get(`/products/${id}`,{
      })
      .then((data)=>{
         setOneProduct(data)
   
      })
      .catch(error=>{
      })
    }, []);

    // const deleteProduct = (event) => {
    //   event.preventDefault()
    //   deletes(`/products/${id}`,{
    //   })
    //   .then((data)=>{
    //     setOneProduct(data)
    //     navigate("/products")
    //  })
    //  .catch(error=>{
    //  })
    // }

    const buyAlert=()=>{
      Swal.fire({
        icon:"error",
        title:"Oops",
        text:"something went wrong :(",
        
      })
    }


  return (
    <div className="container px-5 py-24 mx-auto bg-gray-100" >
      <button><Link className='mb-5 flex w-full justify-center px-4 py-3 bg-teal-500 hover:bg-teal-400 text-center text-lg text-white rounded duration-300' to="/products"><FaArrowLeft className="mt-1 mr-5 text-xl " />Back</Link></button>
      <div className="shadow-xl rounded-lg lg:w-4/5 mx-auto flex flex-wrap">
        <img className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={oneProduct.image} alt={oneProduct.name} />
        <div className="px-4 grid content-between lg:w-1/2 w-full lg:pl-10 lg:pr-6 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-3xl font-semibold mb-4 ">{oneProduct.name}</h2>
        <p className="leading-relaxed text-base text-gray-800 mb-4">{oneProduct.description}</p>
        <div className="flex mb-4">
        <p className="font-medium text-2xl text-gray-900" >Price: ${oneProduct.price}</p>
        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 mr-10 focus:outline-none hover:bg-indigo-600 rounded" onClick={buyAlert}>Buy</button>
        {user.role==role&&<button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 mr-10 focus:outline-none hover:bg-red-600 rounded" onClick={buyAlert}>delete</button>}
        </div>
        </div>
        </div>
    </div>
    
  )
}
