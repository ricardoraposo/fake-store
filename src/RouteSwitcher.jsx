import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"

const RouteSwitcher = () => {
  const [cartNumber, setCartNumber] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])

  const addToCart = (p) => {
    const isThere = shoppingCart.some((i) => {
      return i.name === p.name
    })

    if (isThere) {
      setShoppingCart(
        shoppingCart.map((item) => {
          if (item.name === p.name) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return { ...item }
          }
        })
      )
    } else {
      setShoppingCart(shoppingCart.concat(p))
    }
  }

  useEffect(() => {
    setCartNumber(shoppingCart.reduce((acc, i) => acc + i.quantity, 0))
    console.log(shoppingCart)
  })

  return (
    <div className="font-Poppins h-screen bg-rose-100">
      <Navbar cartNumber={cartNumber} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Products"
            element={<Products clickHandler={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteSwitcher
