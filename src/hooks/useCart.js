import React, { Children, createContext, useContext, useState } from "react";

const CartContext = createContext(null)

export default function CartProvider ({children}) {
    
    const [cartItems, setCartItems] = useState(sample_foods
        .slice(1,4)
        .map(food => ({food, quantity: 1, price: food.price})));
    const [totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3);
    
    const removeFromCart = foodId => {
        const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
        setCartItems(filteredCartItems);
    };

    const changeQuantity = (cartItem, newQuantity) => {
        
    }

    return (
        <CartContext.Provider value={{
            cart:{items: cartItems, totalPrice, totalCount },
            removeFromCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);