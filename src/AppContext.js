import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const AppContext = createContext({})


export const AppProvider=({children})=>{
    const [count, setCount] = useState(0)
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchProducts();
    },[])
    const [cart, setCart] = useState([])
    const url="https://66a07be77053166bcabb8fcc.mockapi.io/student"
    const fetchProducts = () => {
        axios.get(url)
        .then(function(res){
            setProducts(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    const addToCart = (productId) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        setCart(prevCart => {
          const existingItem = prevCart.find(item => item.id === productId);
          if (existingItem) {
            // If item exists, just increase the quantity
            return prevCart.map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // If item does not exist, find the product and add it with quantity 1
            const productToAdd = products.find(item => item.id === productId);
            if (productToAdd) {
              return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
            return prevCart; // If product is not found, return the existing cart
          }
        });
      };
      const removeFromCart = (productId) => {
        setCart(prevCart => {
          return prevCart.reduce((updatedCart, item) => {
            if (item.id === productId) {
              if (item.quantity > 1) {
                // If quantity is more than 1, decrease the quantity
                updatedCart.push({ ...item, quantity: item.quantity - 1 });
              }
              // If quantity is 1, do not add this item to updatedCart
            } else {
              // Keep other items as is
              updatedCart.push(item);
            }
            return updatedCart;
          }, []);
        });
      };
    
    const addCart = (id) => {
        const res = products.find(item=>item.id===id)
        console.log(id)
        console.log(products)
        setCart([...cart,res])
        console.log([...cart,res])
    }
    return <AppContext.Provider value={{count,setCount,cart,addCart, setCart,addToCart, removeFromCart }}>
        {children}
    </AppContext.Provider>
}