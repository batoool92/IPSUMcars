
import { Route, Routes } from 'react-router-dom'
import './App.css'

import MyCart from './Pages/MyCart/MyCart'
import Home from './Pages/Home/Home'
import CarDetails from './Pages/CarDetails/CarDetails'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/MyCart' element={<MyCart />}/>
      <Route path='/CarDetails' element={<CarDetails />}/>
    </Routes>
  )
}

export default App
