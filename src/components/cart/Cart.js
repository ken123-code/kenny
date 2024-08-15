import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
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
  Pagination,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Cart() {
  const { cart, setCart, removeFromCart } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "COD",
  });

  useEffect(() => {
    const calculateTotals = () => {
      let totalPrice = 0;
      let totalQty = 0;

      cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
        totalQty += item.quantity;
      });

      setTotal(totalPrice);
      setTotalQuantity(totalQty);
    };

    calculateTotals();
  }, [cart]);

  const addProduct = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // const removeProduct = (id) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };
  const removeProduct = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find(item => item.id === id);
  
      if (item) {
        if (item.quantity > 1) {
          // If quantity is more than 1, just decrement
          return prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // Quantity is 1 or less, show confirmation dialog
          const confirmed = window.confirm("Are you sure you want to remove this item from your cart?");
          if (confirmed) {
            // Remove the item if confirmed
            return prevCart.filter(item => item.id !== id);
          }
        }
      }
      return prevCart;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_k8v6elf",
        "template_vzu3lkn",
        formData,
        "5qyYNTCqEBNH3rWm-"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column: Cart Items */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Your Cart
            </Typography>

            {cart.length > 0 ? (
              <Grid container spacing={3}>
                {cart.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        boxShadow: 3,
                        borderRadius: 2,
                      }}
                    >
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
                        <IconButton
                          onClick={() => addProduct(item.id)}
                          color="primary"
                        >
                          <AddIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => removeProduct(item.id)}
                          color="secondary"
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            const confirmed = window.confirm(
                              "Are you sure you want to remove this item?"
                            );
                            if (confirmed) {
                              removeFromCart(item.id);
                            }
                          }}
                          color="error"
                        >
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
          </Grid>

          {/* Right Column: Summary */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "background.paper",
                height: "100%",
              }}
            >
              <Typography variant="h4" gutterBottom>
                Payment Information
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Payment Method
                </Typography>
                <RadioGroup
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                >
                  <FormControlLabel
                    value="COD"
                    control={<Radio />}
                    label="Cash on Delivery (COD)"
                  />
                  <FormControlLabel
                    value="Card"
                    control={<Radio />}
                    label="Credit/Debit Card"
                  />
                </RadioGroup>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Total Quantity: {totalQuantity}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Total Price: ${total.toFixed(2)}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
