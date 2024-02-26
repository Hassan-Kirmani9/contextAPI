import React, { useContext } from 'react';
import { cartContext } from "../context/cart";
import "../App1.css";

export const Item = (props) => {
    const cart = useContext(cartContext);
    console.log("cart",cart);
    
    return (
        <div className="box">
            <h5>{props.name}</h5>
            <h5> Price: ${props.price}</h5>
            <button onClick={()=> cart.setItem([...cart.item , {name: props.name , price:props.price }])}>Add to Cart</button>
        </div>
    );
};
