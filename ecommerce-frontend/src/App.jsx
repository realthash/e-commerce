import { useState, useEffect } from 'react'
import axios from 'axios'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Routes, Route } from 'react-router'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFoundPage } from './pages/NotFoundPage'
// import './App.css'

function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items').then((res) => {
      setCart(res.data)
    })
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
