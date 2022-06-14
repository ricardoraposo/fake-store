const ShoppingCart = (props) => {
  return (
    <div className="absolute z-30 top-0 right-0 h-screen w-[400px] overflow-auto bg-white">
      {props.shoppingCart.map(i => {
        return (
          <div>
            <div>{i.name}</div>
            <div>{i.quantity}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ShoppingCart
