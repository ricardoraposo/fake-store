import { productArray } from "./utils/utils"
import ShoppingCart from './ShoppingCart'

const Products = (props) => {

  return (
    <div className="container grid grid-cols-3 gap-16 mt-28">
      {productArray.map((p) => {
        return (
          <button
            key={p.id}
            onClick={() => props.clickHandler(p)}
            className="w-48 h-48 bg-black text-white"
          >
            {p.name}
          </button>
        )
      })}
      <ShoppingCart shoppingCart={props.shoppingCart} />
    </div>
  )
}

export default Products
