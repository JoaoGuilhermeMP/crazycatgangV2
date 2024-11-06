import React from 'react'
import HeaderShop from '../../components/HeaderShop'
import Alimentador from '../../assets/shopImages/alimentador.png'
import Arranhador from '../../assets/shopImages/arranhador.png'
import Catnip from '../../assets/shopImages/catnip.png'
import { RiStarSFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer'

const AboutItems = () => {
  return (
    <div className='bg-[#F5B42C] h-full w-full'>
        <HeaderShop />
        <div className='w-full h-32 bg-white flex items-center max-md:hidden'>
            <span className='pl-14'>
                <a href="/" className='text-xl text-gray-400 pr-4'>Home {">"} </a>
                <a href="/shop" className='text-xl text-gray-400 pr-4 border-r-2'>Lojinha {">"} </a>
                <a href="#" className='text-2xl font-semibold pl-4'>Arranhador</a>
            </span>

        </div>  
        <div className='bg-[#F5B42C] h-screen w-full flex pt-10 justify-around max-md:flex-col max-md:justify-center max-md:items-center max-md:pt-44'>
            <div>
                <img src={Alimentador} alt="" className='w-[481px] h-[500px] rounded-md max-md:h-96'/>
            </div>
            <div className='border-b-2 w-[600px] h-[700px] max-md:h-full max-md:w-full max-md:pb-14'>
                <h1 className='text-6xl font-semibold pb-8 max-md:text-4xl'>Alimentador</h1>
                <span className='text-4xl text-white'>R$250.00</span>
                <span className='flex pt-4'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='mr-4'/> <span className='border-l-2 pl-4'>5 avaliações</span></span>
                <p className='flex flex-wrap py-14 text-xl max-md:w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi architecto labore earum ducimus consequatur, impedit sint maxime, excepturi voluptatem maiores vel nobis aliquid voluptate hic quisquam. Autem earum odio adipisci.</p>
                <span className='text-xl'>Tamanho</span>
                <div className='flex pt-4 gap-2'>
                    <button className='border rounded-md bg-white w-7 h-7 hover:bg-gray-300 hover:border-transparent'>L</button>
                    <button className='border rounded-md bg-white w-7 h-7 hover:bg-gray-300 hover:border-transparent'>XL</button>
                    <button className='border rounded-md bg-white w-7 h-7 hover:bg-gray-300 hover:border-transparent'>XS</button>
                </div>
                <div className='flex items-center justify-around pt-14'>
                    <input type="number" min={1} placeholder='1' className='w-32 h-16 rounded-md max-md:w-24 placeholder:text-center placeholder:text-black' />
                    <NavLink to='/cart' className='h-16 w-32 flex items-center justify-center border border-black rounded-md max-md:w-24 bg-[#FFCB04]'>Carrinho</NavLink>
                    <NavLink to='/payment' className='h-16 w-32 border flex items-center justify-center border-black rounded-md max-md:w-24 bg-[#FFCB04]'>+ Comprar</NavLink>
                </div>
            </div>
        </div>
        <div className='border-t-2 max-md:border-none w-full max-md:pt-14'>
            <div className='flex gap-14 justify-center pt-4 text-3xl max-md:flex-col max-md:pt-32'>
                <a href="#" className='hover:underline'>Descrição</a>
                <a href="#" className='text-white hover:underline'>Mais informações</a>
                <a href="#" className='text-white hover:underline'>Avaliações [5]</a>
            </div>
            <div className='pt-14 flex flex-col justify-center items-center max-md:h-full'>
                <h1 className='w-[1026px] pb-8 max-md:w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas .quam vero.</h1>
                <p className='w-[1026px] max-md:w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo officia excepturi voluptatum eius mollitia voluptas officiis quos perspiciatis temporibus assumenda qui, veniam asperiores modi aliquam placeat obcaecati corrupti voluptatibus? Temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae fugiat maxime aperiam. Facilis iste nihil obcaecati temporibus, laborum officia architecto deserunt nobis, aut eum, modi quia. Explicabo dolorem aliquam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos in totam blanditiis laborum voluptate animi earum beatae nisi doloribus suscipit quod, amet eum distinctio voluptatibus quibusdam esse itaque. Aut, fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus iste animi quos amet nam laboriosam saepe distinctio voluptatem, vero qui exercitationem eum ipsa modi nesciunt voluptate eveniet labore repellat.</p>
                <div className='flex gap-14 pt-14 max-md:flex-col'>
                    <div>
                        <img src={Arranhador} alt="" className='w-[600px] h-96 rounded-md' />
                    </div>
                    <div>
                        <img src={Catnip} alt="" className='w-[600px] h-96 rounded-md' />
                    </div>
                </div>
            </div>
            <div className='h-screen w-full pt-32 max-md:h-full'>
                <h1 className='text-center text-4xl pb-14'>Produtos Recomendados</h1>
                <div className='grid grid-cols-4 grid-rows-1 justify-items-center max-md:grid-cols-1 '>
                    <div id='card' className='w-64 h-40 border max-md:mb-80'>
                        <div> 
                            <img src={Alimentador} alt="" />
                        </div>
                        <div className='bg-white h-full pl-4'>
                            <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
                            <p className='text-gray-500 text-lg pb-4'>Moderno e     automático</p>
                            <span className='font-semibold text-2xl'>R$240.00</span>
                        </div>
                    </div>
                    <div id='card' className='w-64 h-40 border max-md:mb-80'>
                        <div> 
                            <img src={Alimentador} alt="" />
                        </div>
                        <div className='bg-white h-full pl-4'>
                            <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
                            <p className='text-gray-500 text-lg pb-4'>Moderno e     automático</p>
                            <span className='font-semibold text-2xl'>R$240.00</span>
                        </div>
                    </div>
                    <div id='card' className='w-64 h-40 border max-md:mb-80'>
                        <div> 
                            <img src={Alimentador} alt="" />
                        </div>
                        <div className='bg-white h-full pl-4'>
                            <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
                            <p className='text-gray-500 text-lg pb-4'>Moderno e     automático</p>
                            <span className='font-semibold text-2xl'>R$240.00</span>
                        </div>
                    </div>
                    <div id='card' className='w-64 h-40 border max-md:mb-80'>
                        <div> 
                            <img src={Alimentador} alt="" />
                        </div>
                        <div className='bg-white h-full pl-4'>
                            <h1 className='text-2xl font-semibold pb-4'>Alimentador</h1>
                            <p className='text-gray-500 text-lg pb-4'>Moderno e     automático</p>
                            <span className='font-semibold text-2xl'>R$240.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutItems