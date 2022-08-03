import React, { useEffect, useState } from 'react'
import { get } from '../api'
import { Link } from 'react-router-dom';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'


export default function Products() {
  const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(8);
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);


  const previousPage = () => {
    return actualPage > 1 ? setActualPage(actualPage - 1) : null;
  };

  const nextPage = () =>{ 
    return actualPage < totalPages ? setActualPage(actualPage + 1): null};

    const getAllProducts = () => {
      get(`/products/?page=${actualPage}&limit=${limit}`,{
      })
      .then((data)=>{
        setProducts(data.data)
        setTotalPages(data.totalPages)
      })
      .catch(error=>{
      })
    }

  useEffect(() => {
  getAllProducts();
  }, [actualPage, totalPages]);

  return (
    <main className=' bg-gray-100 '>
      <h2 className='pt-6 flex text-3xl font-semibold justify-center '>Products</h2>
      <div className='grid grid-flow-row grid-cols-1 px-4  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10' > 
      {products.map(product => (
        <div className=' grid justify-center	px-9 py-4 shadow-xl rounded-lg' key={product._id}>
        <img className='rounded-tl-lg rounded-tr-lg' src={product.image[0]} alt={product.name} />
        <h3 className='grid mb-2 text-2xl font-bold capitalize justify-center pt-4 pb-2' > {product.name} </h3>  
        <p className='text-lg text-red-500 font-bold py-4'>$  {product.price} </p>
        <div><Link className='flex w-full justify-center px-4 py-3 bg-teal-500 hover:bg-teal-400 text-center text-lg text-white rounded duration-300' to={`/products/${product._id}`}>View Details <FaArrowRight className="mt-1 ml-7 text-xl " /> </Link></div>
   </div>
 ))}
 </div>
    <div className='flex justify-around pb-6 ' >
            <button onClick={previousPage} className="flex px-7 py-3 bg-amber-500 text-white font-medium text-sm rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out">
						<FaArrowLeft className="mr-7 text-xl " />BACK</button>
        <button	onClick={nextPage}	className="flex px-7 py-3 bg-amber-500 text-white font-medium text-sm rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out"	>
						NEXT	<FaArrowRight className="ml-7 text-xl " /></button>
      </div>
    </main>

  )
}