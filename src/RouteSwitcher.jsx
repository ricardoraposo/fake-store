import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Products from "./components/Products"

const RouteSwitcher = () => {
  return (
    <div className="font-Poppins h-screen bg-rose-100">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteSwitcher
