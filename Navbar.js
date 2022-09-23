import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='pl-8 flex space-x-8 border items-center'>
      <div className='h-20 w-[50px] md:w-[60px] mt-4'><img src={logo}></img></div>
      <Link to='/' className='text-blue-400  font-bold text-xl md:text-3xl'>React-Movies-App</Link>
      <Link to="/fav" className='text-blue-400  font-bold text-xl md:text-3xl'>Favourate</Link>

    </div>
  
    </>
  )
}

export default Navbar
