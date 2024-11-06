import React from 'react'
import Trofeu from '../assets/shopImages/trophy.svg'
import Garantia from '../assets/shopImages/guarantee.svg'
import Entrega from '../assets/shopImages/entrega.svg'
import Suporte from '../assets/shopImages/suporte.svg'


const Garantias = () => {
  return (
    <div className='w-full h-56 bg-white flex items-center justify-center gap-20 max-md:flex-col max-md:h-screen'>
          <div className='flex items-center gap-4'>
            <div>
              <img src={Trofeu} alt="" className='w-20'/>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'>Melhor qualidade</h1>
              <h2 className='text-xl text-gray-500'>Melhor qualidade de produtos</h2>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <img src={Garantia} alt="" className='w-20'/>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'>Garantia de entrega</h1>
              <h2 className='text-xl text-gray-500'>Acompanhe seu pedido</h2>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <img src={Entrega} alt="" className='w-20'/>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'>FRETE GRÁTIS</h1>
              <h2 className='text-xl text-gray-500'>Para pedidos acima de R$100</h2>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <img src={Suporte} alt="" className='w-20'/>
            </div>
            <div>
              <h1 className='text-2xl font-semibold'>SUPORTE 24H</h1>
              <h2 className='text-xl text-gray-500'>Fale conosco</h2>
            </div>
          </div>
        </div>
  )
}

export default Garantias