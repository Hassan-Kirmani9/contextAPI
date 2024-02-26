import React, { useContext } from 'react'
import { cartContext } from '../context/cart'



export const Cart = (props) => {
  const cartItems = useContext(cartContext)
  const total =  cartItems.item.reduce((a,b)=> a +b.price , 0)

  return (
<>
<p>CART</p>
<div className='cart_box'>
      {cartItems && cartItems.item.map(item=><li>{item.name} - {item.price}</li>)}

    </div>
<h4>
  total - ${total}
</h4>
</>
  )
}
