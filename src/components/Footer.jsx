import React from 'react'
import { FaInstagram, FaSymfony } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from '../assets/logoBranca.png'

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col items-center pt-8'>
        <img src={Logo} className='w-[255px]'/>
        <ul className='flex gap-6'>
            <li><a href="https://www.instagram.com/crazycatgang/" target='_blank'><FaInstagram className='text-white w-8 h-8'/></a></li>
            <li><a href="https://www.facebook.com/crazycatgang" target='_blank'><FaFacebook className='text-white w-8 h-8'/></a></li>
            <li><a href="https://www.linkedin.com/company/crazycatgang/" target='_blank'><FaLinkedin className='text-white w-8 h-8'/></a></li>
            <li><a href="#"><FaYoutube className='text-white w-8 h-8'/></a></li>
        </ul>
        <p className='text-white py-6'>© 2024 Crazy Cat Gang - Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer