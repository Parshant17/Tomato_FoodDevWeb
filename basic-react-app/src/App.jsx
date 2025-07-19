import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Placeorder from './pages/Placeorder/Placeorder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LogInPopUp setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
