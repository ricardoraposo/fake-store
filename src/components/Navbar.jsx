import { GoKeyboard } from "react-icons/go"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
  const headerItem = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/Products",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ]

  return (
    <nav className="bg-rose-500 p-8 box-border">
      <div className="flex justify-between items-center ">
        <div className="pl-24 text-white  flex justify-center items-center gap-4">
          <a href="/">
            <GoKeyboard className="text-5xl" />
          </a>
          <a href="/" className="font-bold text-5xl">
            Little Keyboards
          </a>
        </div>
        <div className="flex items-center text-white">
          <ul className="pr-36 flex gap-6 text-2xl">
            {headerItem.map((item) => {
              return (
                <li className="hover:scale-110 hover:transition-transform">
                  <a href={item.path}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <div className="hover:scale-110 hover:transition-transform">
            <a href="/" className="relative ">
              <AiOutlineShoppingCart className="bg-white h-16 w-16 p-4 mr-12 text-black rounded-full" />
              <a
                className="absolute bg-white rounded-full border-2 border-rose-300 text-rose-500 w-8 h-8 
                bottom-0 left-[-12px] text-center pt-1"
              >
                1
              </a>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
