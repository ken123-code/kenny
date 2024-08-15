import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Box,
  CardActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, setCart, removeFromCart } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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

  const addProduct = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const removeProduct = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>

        {cart.length > 0 ? (
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image={item.img}
                    alt={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => addProduct(item.id)} color="primary">
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => removeProduct(item.id)} color="secondary">
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={() => removeFromCart(item.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" color="text.secondary">
            Your cart is empty.
          </Typography>
        )}

        <Box sx={{ mt: 4, mb: 2 }}>
          <Divider />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Total Quantity: {totalQuantity}
          </Typography>
          <Typography variant="h5">
            Total Price: ${total.toFixed(2)}
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/checkout"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Proceed to Checkout
        </Button>
      </Container>
      <Footer />
    </div>
  );
}
