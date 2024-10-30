import React from 'react'
import logo from '../assets/indexLogo.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-14 py-6 bg-[#FFCB04] max-md:justify-between'>
         <div className='max-md:mx-auto max-md:max-h-[100px]'>
            <img src={logo} className='w-36 max-md:self-center'/>
         </div>
         <div>
            <ul className='flex items-center gap-10 pr-8'>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><a href="#">Home</a></li>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><a href="#">Contate-Nos</a></li>
                <li className='text-xl hover:underline hover:scale-110 block max-md:hidden'><a href="#">Lojinha</a></li>
                <li className='text-xl text-white border border-transparent w-32 h-12 flex items-center justify-center rounded-md bg-black hover:scale-110 max-sm:hidden'><a href="#">Inscreva-se</a></li>
            </ul>
         </div>
    </header>
  )
}

export default Header