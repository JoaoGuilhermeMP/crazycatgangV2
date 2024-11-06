import React from 'react'
import HeaderShop from '../../components/HeaderShop'
import HeaderImage from '../../assets/shopImages/headerShop.png'
import { FaFilter } from "react-icons/fa";
import Alimentador from '../../assets/shopImages/alimentador.png'
import Trofeu from '../../assets/shopImages/trophy.svg'
import Garantia from '../../assets/shopImages/guarantee.svg'
import Entrega from '../../assets/shopImages/entrega.svg'
import Suporte from '../../assets/shopImages/suporte.svg'
import Footer from '../../components/Footer';
import Garantias from '../../components/Garantias';
import { NavLink } from 'react-router-dom';


const Shop = () => {
  return (
    <div className='bg-[#F5B42C] h-full w-full'>
        <HeaderShop />
        <div>
            <img src={HeaderImage} className='w-full max-md:h-44' />
        </div>
        <div className='w-full bg-white h-24 flex justify-evenly items-center max-md:flex-col max-md:h-32'>
          <span className='w-52 flex items-center justify-center gap-2 text-xl border-r-2'><a href="#" className='hover:scale-110'>
            <FaFilter />
          </a>Filtro</span>
          <span className='text-xl'>Mostrando 1-16 resultados de 1-32</span>
          <span className='text-xl flex items-center justify-center gap-4'>
            Mostrar <input type="number" placeholder='4' min={4} max={30} className='w-12 h-10 border  text-center'/> 
            Valores 
            <select name="valores" id="">
              <option value="default">Padrão</option>
              <option value="barato">Menor preço</option>
              <option value="caro">Maior preço</option>
              <option value="popular">Mais vendidos</option>
              <option value="desconto">Promoção</option>
            </select>
          </span>
        </div>
        <div className='h-full w-full pt-14 grid grid-cols-4 justify-items-center p-4  bg-[#F5B42C] max-md:grid-cols-1 max-md:grid-rows-1'>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4 max-md:pt-3'>
              <NavLink to="/items" >
                <h1 className='text-2xl font-semibold pb-4 hover:underline'>Alimentador</h1>
              </NavLink>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4 '>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4 '>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
          <div id='card' className='w-64 h-40 border mb-80'>
            <div> 
              <img src={Alimentador} alt="" />
            </div>
            <div className='bg-white h-full pl-4'>
              <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
              <p className='text-gray-500 text-lg pb-4'>Moderno e automático</p>
              <span className='font-semibold text-2xl'>R$240.00</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center text-center gap-14 py-10 max-md:px-8'>
          <a href="#" className='text-2xl w-10 h-10 text-center hover:border hover:bg-gray-500 hover:border-transparent hover:rounded-md'>1</a>
          <a href="#" className='text-2xl w-10 h-10 text-center hover:border hover:bg-gray-500 hover:border-transparent hover:rounded-md'>2</a>
          <a href="#" className='text-2xl w-10 h-10 text-center hover:border hover:bg-gray-500 hover:border-transparent hover:rounded-md'>3</a>
          <a href="#" className='text-2xl hover:underline hover:scale-110'>Próximo</a>
        </div>
        <Garantias />
        <Footer />
    </div>
  )
}

export default Shop