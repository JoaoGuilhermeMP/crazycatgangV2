import React from 'react'
import HeaderShop from '../../components/HeaderShop'
import Garantias from '../../components/Garantias'
import Footer from '../../components/Footer'
import HeaderImage from '../../assets/shopImages/headerShop.png'

const Cart = () => {
  return (
    <div>
        <HeaderShop />
        <div>
            <img src={HeaderImage} alt="" className='w-full max-md:h-44' />
        </div>
        <div className='bg-[#F5B42C] h-[530px] w-full'>
            <div>
                <table className='h-60'>
                    <thead className='bg-white h-14 w-[800px]'>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Meus eggs</td>
                        </tr>
                    </tbody>
                </table>
                <div>

                </div>
            </div>
        </div>
        <Garantias />
        <Footer />
    </div>
  )
}

export default Cart