import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.cart);   

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 && <p>Your cart is empty</p>}
            {items.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <button onClick={()=> dispatch(removeItem(item.id))}>remove</button>
                </div>
            ))}
            {items.length > 0 && (
                <button onClick={() => dispatch(clearCart())}>Clear cart</button>
            )}
        </div>
    )
}

export default Cart;