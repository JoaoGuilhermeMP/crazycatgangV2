import React from 'react'
import PurpleCats from '../assets/purpleCats.png'
import IndexCats from '../assets/indexCats.png'
import ImageLoja from '../assets/imageShop.png'
import { BsBrowserChrome } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Footer from './Footer';

const Main = () => {
  return (
    <main className='bg-[#F5B42C]'>
        <section className='flex items-center justify-between px-32 pt-14 pb-8 max-md:flex-col'>
            <div>
                <h1 className='text-4xl mb-10 font-semibold'>Adote um pet e ganhe Carinho</h1>
                <p className='text-2xl mb-6'>Adote um pet com responsabilidade e ganhe um “Kit Casa Nova” totalmente de graça!</p>
                <a href="#" className=' text-white border border-transparent w-32 h-12 flex items-center justify-center rounded-md bg-black hover:scale-110 max-md:mx-auto max-md:mb-6'>Saiba Mais</a>
            </div>
            <div>
                <img src={PurpleCats} className='rounded-md max-md:max-h-[350px] max-md:max-w-[350px]' />
            </div>
        </section>
        <section className='flex items-center justify-between px-32 pt-14 pb-10 max-md:flex-col'>
            <div>
                <img src={IndexCats} className='max-md:max-h-[350px] max-md:max-w-[350px] max-md:mb-6'/>
            </div>
            <div>
                <h1 className='text-4xl mb-10 font-semibold'>Adote e faça a diferença</h1>
                <p className='text-2xl mb-6'>Conheça nossos gatinhos que estão em busca de um lar!</p>
                <a href="https://www.instagram.com/crazycatgang/" target='_blank' className=' text-white border border-transparent w-32 h-12 flex items-center justify-center rounded-md bg-black hover:scale-110 max-md:mx-auto'>Ver Todos</a>
            </div>
        </section>
        <section className='pb-8'>
            <h1 className='text-4xl px-14 py-14 font-semibold max-md:text-center'>Sua doação pode salvar vidas!</h1>
            <div className='grid grid-cols-2 gap-28 max-md:grid-cols-1 max-md:text-center'>
                <div className='px-14'>
                    <BsBrowserChrome className='w-8 h-8 mb-2 max-md:mx-auto'/>
                    <h2 className='text-2xl mb-2'>Saiba como ajudar</h2>
                    <p className='text-xl'>Seja por planos de adoção, voluntariado à lar provisório ou mesmo por meio de doações, toda forma de ajuda é válida!</p>
                </div>
                <div className='px-14'>
                    <IoPeopleCircleOutline className='w-8 h-8 mb-2 max-md:mx-auto' />
                    <h2 className='text-2xl mb-2'>Voluntarie-se!</h2>
                    <p className='text-xl pb-3'>Seja um voluntario e ajude-nos a salvar vidas! Clique em saiba Mais para efetuar seu cadastro!</p>
                    <a href="#" className=' text-white border border-transparent w-28 h-10 flex items-center justify-center rounded-md bg-black hover:scale-110 max-md:mx-auto'>Saiba Mais</a>
                </div>
                <div className='px-14'>
                    <IoLockClosedOutline className='w-8 h-8 mb-2 max-md:mx-auto' />
                    <h2 className='text-2xl mb-2'>Seja responsável!</h2>
                    <p className='text-xl pb-3'>O Brasil possui quase 185 mil animais abandonados ou resgatados após maus-tratos, sob a tutela de organizações não governamentais (ONGs) e grupos de protetores.</p>
                </div>
                <div className='px-14'>
                    <FaRegCalendarAlt className='w-8 h-8 mb-2 max-md:mx-auto' />
                    <h2 className='text-2xl mb-2'>Agende sua visita!</h2>
                    <p className='text-xl pb-3'>Agende sua visita e ajude-nos com lares provisórios!</p>
                </div>
            </div>
        </section>
        <img src={ImageLoja} className='w-full h-[620px] pt-10 max-md:max-h-[400px]'/>
        <Footer />
    </main>
  )
}

export default Main