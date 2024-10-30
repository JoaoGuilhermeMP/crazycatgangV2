import React from 'react'
import Header from '../../components/Header'
import GatoDeitado from '../../assets/gatoDeitado.png'
import GatoLambendoPata from '../../assets/gatoLambendoPata.png'
import GatoCurioso from '../../assets/gatoCurioso.png'
import Footer from '../../components/Footer'


const Plans = () => {
  return (
    <div className='bg-[#F5B42C] h-full w-full'>
        <Header />
        <div className='bg-[#F5B42C] h-full w-full relative'>
            <h1 className='text-7xl text-center pt-14 max-md:text-5xl'>CrazyCatPlans</h1>
            <div className='flex items-center justify-center pt-24 max-md:pt-14'>
                <span className='w-40 h-14 border-2 p-2 rounded-md bg-[#FFCB04] flex items-center justify-center'>Escolha seu Plano</span>
            </div>
            <img src={GatoLambendoPata} className='absolute top-36 left-72 max-md:hidden'/>
            <img src={GatoDeitado} className='absolute right-52 top-14 max-md:hidden'/>
            <div className='flex items-center justify-between flex-row px-12 pt-14 max-md:flex-col max-md:gap-14'>
                <div id='silver' className='bg-[#FFCB04] border-transparent shadow-xl rounded-md border h-[480px] w-[515px] flex flex-col pt-14 max-md:w-[350px]'>
                  <h2 className='text-3xl pb-8 px-8'>SILVER</h2>
                  <h1 className='text-4xl font-semibold px-8 pb-8'>R$49,90 <span className='text-base font-normal'>mensais</span></h1>
                  <ul className='list-disc flex flex-col flex-wrap pl-10 '>
                    <li className='text-xl'>Em 6 mêses de assinatura, você leva como brinde 5 sachês para gatos!</li>
                    <li className='text-xl py-8 max-md:py-4'>Em 1 ano de assinatura, você ganha uma caxinha para carregar seu gato!</li>
                  </ul>
                  <button className='w-80 h-14 mt-4 border rounded-md self-center text-white bg-black border-transparent shadow-md hover:scale-105 max-md:w-[200px] max-md:h-10'>Assine Já!</button>
                </div>
                <div id='gold' className='bg-[#FFCB04] rounded-md border h-[500px] w-[515px] border-transparent shadow-xl flex flex-col pt-14 max-md:w-[350px]'>
                  <h2 className='text-3xl pb-8 px-8'>GOLD</h2>
                  <h1 className='text-4xl font-semibold px-8 pb-8'>R$69,90 <span>mensais</span></h1>
                  <ul className='list-disc flex flex-col flex-wrap pl-10 '>
                    <li className='text-xl'>Em 6 mêses de assinatura, você ganha 4Kg de ração para seu gato!</li>
                    <li className='text-xl py-6'>Em 1 ano de assinatura, você ganha uma caixa de areia!</li>
                    <li className='text-xl pb-6'>E todos os benefícios do plano anterior!</li>
                  </ul>
                  <button className='w-80 h-14 border rounded-md self-center text-white bg-black border-transparent shadow-md hover:scale-105 max-md:w-[200px] max-md:h-10'>Assine Já!</button>
                </div>
                <div id='platinum' className='bg-[#FFCB04] rounded-md border h-[520px] w-[515px] border-transparent shadow-xl flex flex-col pt-14 max-md:w-[350px] max-md:pt-14'>
                  <h2 className='text-3xl pb-8 px-8'>PLATINUM</h2>
                  <h1 className='text-4xl font-semibold px-8 pb-8'>R$99,90 <span>mensais</span></h1>
                  <ul className='list-disc flex flex-col flex-wrap pl-10 '>
                    <li className='text-xl'>Em 6 mêses de assinatura, você ganha brinquedos para seu gato!</li>
                    <li className='text-xl py-10'>Em 1 ano de assinatura, você ganha um arranhador!</li>
                    <li className='text-xl pb-8 max-md:pb-6'>E todos os benefícios do plano anterior!!!</li>
                  </ul>
                  <button className='w-80 h-14  border rounded-md self-center text-white bg-black border-transparent shadow-md hover:scale-105 max-md:w-[200px] max-md:h-10'>Assine Já!</button>
                </div>
            </div>
            <div className='text-center pt-8 flex items-center justify-center flex-col'>
              <h1 className='text-5xl'>Sua doação pode salvar vidas</h1>
              <div>
                <img src={GatoCurioso}  className='pt-12 max-md:w-56'/>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Plans