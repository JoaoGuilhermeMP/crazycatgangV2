import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/CCGheader.png'
import Main from '../../components/main'

const Home = () => {
  return (
    <div>
      <Header />
      <img src={HeaderImage} className='w-full h-[700px] max-md:max-h-[350px]'/>
      <Main />
    </div>
  )
}

export default Home