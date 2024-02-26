import React, { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartProvider = (props) => {
    const [item, setItem] = useState([]);

    return (  
        <cartContext.Provider value={{item, setItem }}>
            {props.children}
        </cartContext.Provider>
    );
};
