const ShoppingCart = (props) => {
  return (
    <div className="absolute z-30 top-0 right-0 h-screen w-[400px] overflow-auto bg-white">
      <div className="flex flex-col justify-center items-center">
        <h2>Shopping Cart</h2>
        {props.shoppingCart.map(i => {
            return (
              <div className="flex">
                <div>{i.name}</div>
                <div>{i.quantity}</div>
                <div>
                  <button onClick={() => props.addItem(i)} className="p-10">+</button>
                  <button onClick={() => props.removeItem(i)} className="p-10">-</button>

                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default ShoppingCart
