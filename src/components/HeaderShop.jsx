import React from 'react'
import Logo from '../assets/indexLogo.png'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const HeaderShop = () => {
  return (
    <div className='h-32 w-full bg-[#FFCB04]'>
        <div className='flex items-center justify-between text-center'>
            <div className='flex items-center justify-center max-md:m-auto max-md:pt-2'>
                <img src={Logo} className='w-36 max-md:'/>
                <h1 className='font-semibold text-4xl '>CrazyCat Shop</h1>
            </div>
            <div className='pr-20 max-md:hidden'>
                <ul className='flex items-center gap-10'>
                    <li><NavLink to="/" className='text-xl hover:underline hover:scale-110 block max-md:hidden'>Home</NavLink></li>
                    <li><NavLink to="/shop" className='text-xl hover:underline hover:scale-110 block max-md:hidden'>Lojinha</NavLink></li>
                    <li><NavLink to="/plans" className='text-xl hover:underline hover:scale-110 block max-md:hidden'>Planos</NavLink></li>
                    <li><NavLink to="/contact" className='text-xl hover:underline hover:scale-110 block max-md:hidden'>Contate-nos</NavLink></li>
                </ul>
            </div>
            <div id='icons ' className='pr-20 max-md:hidden'>
                <ul className='flex items-center gap-10'>
                    <li className='text-3xl hover:scale-110'><a href="#"><IoIosPerson /></a></li>
                    <li className='text-3xl hover:scale-110'><a href="#"><CiSearch /></a></li>
                    <li className='text-3xl hover:scale-110'><a href="#"><CiHeart /></a></li>
                    <li className='text-3xl hover:scale-110'><NavLink to="/cart"><IoCartOutline /></NavLink></li>
                </ul>
            </div>
        </div>
    </div> 
  )
}

export default HeaderShop