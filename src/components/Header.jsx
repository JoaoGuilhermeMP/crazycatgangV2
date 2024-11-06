import React from 'react'
import logo from '../assets/indexLogo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-14 py-6 bg-[#FFCB04] max-md:justify-between'>
         <div className='max-md:mx-auto max-md:max-h-[100px]'>
            <img src={logo} className='w-36 max-md:self-center'/>
         </div>
         <div>
            <ul className='flex items-center gap-10 pr-8'>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><NavLink to="/">Home</NavLink></li>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><NavLink to="/contact">Contate-Nos</NavLink></li>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><NavLink to="/plans">Planos</NavLink></li>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><NavLink to="/shop">Lojinha</NavLink></li>
                <li className='text-xl text-white border border-transparent w-32 h-12 flex items-center justify-center rounded-md bg-black hover:scale-110 max-sm:hidden'><NavLink to="/signup">Inscreva-se</NavLink></li>
            </ul>
         </div>
    </header>
  )
}

export default Header