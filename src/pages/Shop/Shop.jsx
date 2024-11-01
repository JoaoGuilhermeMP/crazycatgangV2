import React from 'react'
import HeaderShop from '../../components/HeaderShop'
import HeaderImage from '../../assets/shopImages/headerShop.png'

const Shop = () => {
  return (
    <div className='bg-[#F5B42C] h-screen w-full'>
        <HeaderShop />
        <div>
            <img src={HeaderImage} className='w-full' />
        </div>
    </div>
  )
}

export default Shop