import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"

const RouteSwitcher = () => {
  const [cartNumber, setCartNumber] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])

  const changeCartNumber = (p) => {
    setShoppingCart(shoppingCart.concat(p))
  }

  useEffect(() =>{
    setCartNumber(shoppingCart.length)
    console.log(shoppingCart)
  })

  return (
    <div className="font-Poppins h-screen bg-rose-100">
      <Navbar cartNumber={cartNumber} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products clickHandler={changeCartNumber} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteSwitcher
