import React from 'react'
import Logo from '../assets/indexLogo.png'
import { NavLink } from 'react-router-dom'

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
                    <li><NavLink to="/" className='text-xl'>Home</NavLink></li>
                    <li><NavLink to="/shop" className='text-xl'>Lojinha</NavLink></li>
                    <li><NavLink to="/plans" className='text-xl'>Planos</NavLink></li>
                    <li><NavLink to="/contact" className='text-xl'>Contate-nos</NavLink></li>
                </ul>
            </div>
            <div id='icons ' className='pr-20 max-md:hidden'>
                <ul className='flex items-center gap-10'>
                    <li><a href="#">a</a></li>
                    <li><a href="#">b</a></li>
                    <li><a href="#">c</a></li>
                    <li><a href="#">d</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderShop