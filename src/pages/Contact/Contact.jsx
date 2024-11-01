import React from 'react'
import Header from '../../components/Header'
import GatoNaLua from '../../assets/gatoNaLua.png'
import CasalGato from '../../assets/casalGato.png'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div className='bg-[#F5B42C] h-screen w-screen overflow-x-hidden'>
        <Header />
        <div className='max-h-screen flex items-center justify-between mx-16 mt-4  max-md:flex-col max-md:mt-4 max-md:mb-[45px]'>
            <div className=''>
                <h1 className='text-6xl font-semibold mb-4'>Contate-nos</h1>
                <h2 className='text-2xl'>Entre em contato conosco para relatar problemas e efetuar denúncias!</h2>
                <form className='flex flex-col'>
                    <div className='inline pt-4 max-md:flex max-md:flex-col'>
                        <label htmlFor="nome" className='pt-4'>Nome</label>
                        <input type="text" placeholder='Seu Nome!' className='w-72 h-10 bg-inherit border rounded-md mx-2 placeholder:text-black focus:outline-none focus:pl-2 placeholder:px-2 max-md:mx-0'/>
                        <label htmlFor="sobrenome" className='pt-4 pl-4 max-md:pl-0'>Sobrenome</label>
                        <input type="text" placeholder='Seu Sobrenome!' className='w-72 h-10 bg-inherit border rounded-md mx-2 placeholder:text-black focus:outline-none focus:pl-2  placeholder:px-2 max-md:mx-0'/>
                    </div>

                    <label htmlFor="motivo" className='pt-4'>Motivo para contato</label>
                    <select name="motivo" id="motivo" className='rounded-md  bg-inherit border first:text-white focus:outline-none'>
                        <option value="nenhum" >Nenhum</option>
                        <option value="problemaPlanos">Problema com os Planos</option>
                        <option value="larTemporario">Dúvidas sobre lar temporário</option>
                        <option value="lojinha">Problema com a lojinha</option>
                        <option value="adocao">Dúvidas sobre o processo de adoção</option>
                        <option value="voluntario">Desejo ser voluntário</option>
                        <option value="resgate">Dúvidas sobre o processo de resgate</option>
                        <option value="outro">Outro</option>
                    </select>

                    <label htmlFor="email" className='pt-4'>E-mail</label>
                    <input type="email" name="email" id="email" placeholder='email@email.com' className='h-10 bg-inherit border rounded-md focus:outline-none focus:pl-2  placeholder:text-black placeholder:px-2' />

                    <label htmlFor="Description" className='pt-4'>Observações</label>
                    <textarea name="Description" id="description" placeholder='Conte-nos mais sobre o motivo de seu contato!' className='h-44 border rounded-md bg-inherit focus:outline-none focus:pl-2  placeholder:px-2 placeholder:text-black'></textarea>

                    <button type="submit" className='border h-14 mt-6 text-white bg-black border-transparent rounded-md'>Enviar</button>
                </form>
                <img src={CasalGato} className='mx-auto max-md:mb-[70px]'/>
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