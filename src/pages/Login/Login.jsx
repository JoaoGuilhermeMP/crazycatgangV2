import React from 'react'
import Logo from '../../assets/indexLogo.png'
import { FcGoogle } from "react-icons/fc";
import CasalGatos2 from '../../assets/casalGato2.png'

const Login = () => {
  return (
    <div className='bg-[#F5B42C] h-screen flex items-center justify-center flex-col overflow-hidden'>
        <div className='flex items-center justify-center flex-col mt-24'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <h1 className='text-4xl font-semibold my-5'>Crie sua conta!</h1>
            <div>
                <form className='flex flex-col'>
                    <input type="text" placeholder='email@email.com' className='bg-inherit h-10 border rounded-md placeholder:text-white placeholder:px-2 focus:outline-none' />
                    <button type="submit" className='border mt-4 h-10 text-white bg-black border-transparent rounded-lg hover:scale-105'>Inscreva-se com E-mail</button>
                </form>
                <h2 className='text-center pt-3 text-white'>----------------- Ou Continue com ------------------</h2>
                <button className='border w-96 flex items-center justify-center gap-2 text-center rounded-md h-10 mt-4 bg-white hover:scale-105'> <FcGoogle/> Google</button>
            </div>
                <p className='text-center mt-6 text-gray-500'>Ao clicar em continuar, você concorda com nossos <br /> <span className='text-black'>Termos de Uso</span> e <span className='text-black'>Política de Privacidade</span></p>
        </div>
        <img src={CasalGatos2} />
    </div>
  )
}

export default Login