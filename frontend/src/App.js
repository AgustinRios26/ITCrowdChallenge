import { useContext, useEffect } from 'react';
import { get } from './api';
import { authContext } from './context/Auth';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Product from './pages/Product';
import PostProduct from './pages/PostProduct';
import NotFound from './pages/NotFound';



function App() {
  const {setUser} = useContext(authContext)
  
  // Recuperamos sesión del usuario
  useEffect(()=>{
    get("/auth/validate")
    .then(result=>{
      setUser({type:'LOGIN',payload:result.user})
    })
    .catch(error=>console.log(error))
  },[setUser])
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/create' element={<PostProduct/>}/>
    <Route path='*' element={<NotFound/>}/>

    </Routes>
    
    </>
  );
}

export default App;
