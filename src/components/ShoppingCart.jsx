const ShoppingCart = (props) => {
  return (
    <div>
      {props.shoppingCart.map(i => {
        return (
          <div className="absolute z-10 text-white">
            <div>{i.name}</div>
            <div>{i.quantity}</div>
          </div>
        )
      })}
      <div className="z-0 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80"></div>
    </div>
  )
}

export default ShoppingCart
