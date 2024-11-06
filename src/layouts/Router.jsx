import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Shop from '../pages/Shop/Shop'
import Plans from '../pages/Plans/Plans'
import Login from '../pages/Login/Login'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/signup' element={<Login />} />
    </Routes>
  )
}

export default Router