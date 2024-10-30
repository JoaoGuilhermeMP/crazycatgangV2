import React from 'react'
import Header from '../../components/Header'
import GatoNaLua from '../../assets/gatoNaLua.png'
import CasalGato from '../../assets/casalGato.png'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div className='bg-[#F5B42C] h-screen w-screen overflow-x-hidden'>
        <Header />
        <div className='max-h-screen flex items-center justify-between mx-16 mt-4'>
            <div className=''>
                <h1 className='text-6xl font-semibold'>Contate-nos</h1>
                <h2 className='text-2xl'>Entre em contato conosco para relatar problemas e efetiar denúncias!</h2>
                <form className='flex flex-col'>
                    <label htmlFor="nome" className='pt-4'>Nome</label>
                    <input type="text" placeholder='Seu Nome!' className='w-72 h-10 bg-inherit border rounded-md placeholder:text-white placeholder:px-2'/>

                    <label htmlFor="sobrenome" className='pt-4'>Sobrenome</label>
                    <input type="text" placeholder='Seu Sobrenome!' className='w-72 h-10 bg-inherit border rounded-md placeholder:text-white placeholder:px-2'/>

                    <label htmlFor="email" className='pt-4'>E-mail</label>
                    <input type="email" name="email" id="email" placeholder='email@email.com' className='h-10 bg-inherit border rounded-md placeholder:text-white placeholder:px-2' />

                    <label htmlFor="Description" className='pt-4'>Motivo para contato</label>
                    <textarea name="Description" id="description" placeholder='Digite aqui o motivo para o contato!' className='h-44 border rounded-md bg-inherit placeholder:px-2 placeholder:text-white'></textarea>

                    <button type="submit" className='border h-14 mt-6 text-white bg-black border-transparent rounded-md'>Enviar</button>
                </form>
                <img src={CasalGato} className='mx-auto mb-8'/>
            </div>
            <div>
                <img src={GatoNaLua} className='pr-32 max-md:hidden' />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact