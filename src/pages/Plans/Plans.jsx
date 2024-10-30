import React from 'react'
import Header from '../../components/Header'
import GatoDeitado from '../../assets/gatoDeitado.png'
import GatoLambendoPata from '../../assets/gatoLambendoPata.png'
import Cards from '../../components/Cards'

const Plans = () => {
  return (
    <div>
        <Header />
        <div className='bg-[#F5B42C] h-screen w-full relative'>
            <h1 className='text-7xl text-center pt-14'>CrazyCatPlans</h1>
            <div className='flex items-center justify-center pt-24'>
                <span className='w-40 h-14 border-2 p-2 rounded-md bg-[#FFCB04] flex items-center justify-center'>Escolha seu Plano</span>
            </div>
            <img src={GatoLambendoPata} className='absolute top-64 left-72'/>
            <img src={GatoDeitado} className='absolute right-52 top-52'/>
            <div>
                <Cards />
            </div>
        </div>
    </div>
  )
}

export default Plans