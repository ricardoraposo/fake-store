import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"

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
    setCartNumber(
      shoppingCart.reduce((acc, i) => acc + i.quantity, 0),
      shoppingCart
    )
    console.log(shoppingCart)
  })

  return (
    <div className="font-Poppins h-screen bg-rose-100">
      <ShoppingCart shoppingCart={shoppingCart}/>
      <Navbar cartNumber={cartNumber} />
      <BrowserRouter className="relative">
        <Routes>
          <Route path="/" element={<Home  />} />
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
