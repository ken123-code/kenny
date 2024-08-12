import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, Table } from "reactstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NotFound from "../notFound/NotFound";
import './cart.css'
export default function Cart() {
  const { cart, setCart, removeFromCart, count, setCount   } = useContext(AppContext);
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0);
  // Calculate the total price whenever the cart changes
  // useEffect(() => {
  //   const calculateTotal = () => {
  //     return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  //   };
    
  //   setTotal(calculateTotal());
  
  // }, [cart]);
  useEffect(() => {
    const calculateTotals = () => {
      let totalPrice = 0;
      let totalQty = 0;
      
      cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalQty += item.quantity;
      });

      setTotal(totalPrice);
      setTotalQuantity(totalQty);
    };

    calculateTotals();
  }, [cart]);
   // Add a specific product to the cart
   const addProduct = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Remove a specific product from the cart
  const removeProduct = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };
  return (
    <div>
      <Header/>
      {cart.length>0? <Container>
        <Table hover >
          <thead className="text-center" >
            <tr>
              <th>id</th>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {cart.map((item, index) => (
              <tr>
                <th className="align-middle text-center" scope="row">{index+1}</th>
                <td className="align-middle"><img alt="Sample" width={'220px'} src={item .img} />
                </td>
                <td className="align-middle text-center">{item.name}</td>
                <td className="align-middle text-center" width={100}>${item.price}</td>
                <td className="align-middle text-center">{item.quantity}</td>
                
                <td className="align-middle text-center"> 
                  <Button onClick={() => addProduct(item.id)} color="success">
                    +
                  </Button>
                  <Button onClick={() => removeFromCart(item.id)} color="danger">
                    -
                  </Button>
                </td>
              </tr>
            ))}
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Price: ${total.toFixed(2)}</h3>
          </tbody>
        </Table>
      </Container> : <NotFound/>}
      
      <Footer/>
    </div>
  );
}
