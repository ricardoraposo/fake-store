import { GoKeyboard } from "react-icons/go"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className="bg-black p-8 box-border">
      <div className="flex justify-between items-center ">
        <div className="pl-24 text-white  flex justify-center items-center gap-4">
          <a href="/"><GoKeyboard className="text-5xl" /></a>
          <a href="/" className="font-bold text-5xl">Little Keyboards</a>
        </div>
        <div className="flex gap-8 items-center text-white">
          <ul className="pr-36 flex gap-6 text-2xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Products">Products</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <div>
            <a href=""><AiOutlineShoppingCart className="bg-white h-16 w-16 p-4 text-black rounded-full"/></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
