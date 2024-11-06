import React from 'react'
import HeaderShop from '../../components/HeaderShop'
import HeaderImage from '../../assets/shopImages/headerShop.png'
import Garantias from '../../components/Garantias'
import Footer from '../../components/Footer'

const Payment = () => {
  return (
    <div>
        <HeaderShop />
        <div>
            <img src={HeaderImage} alt="" className='w-full max-md:h-44' />
        </div>
        <div className='bg-[#F5B42C] h-screen w-full'>
            <div className='w-[600px]'>
                <form className='flex flex-col' >
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" name='nome' />

                    <label htmlFor="nomeFantasia">Nome fantasia (opcional)</label>
                    <input type="text" name="nomeFantasia" />

                    <label htmlFor="pais">País</label>
                    <input type="text" name="pais" id="" />

                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" name="endereco" id="" />

                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name='cidade' />

                    <label htmlFor="estado">Estado</label>
                    <select name="estadi" id="">
                        <option value="pr">Paraná</option>
                    </select>

                    <label htmlFor="cep">CEP</label>
                    <input type="text" name="cep" id="" />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" name="telefone" id="" />

                    <label htmlFor="email">Endereço de E-Mail</label>
                    <input type="text" name="email" id="" />

                    <label htmlFor="descricao">Informações Adiocionais</label>
                    <input type="text" name="descricao" id="" />
                </form>
            </div>
            <div>
                
            </div>
        </div>
        <Garantias />
        <Footer />
    </div>
  )
}

export default Payment