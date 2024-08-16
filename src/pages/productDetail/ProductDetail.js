import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { AppContext } from "../../AppContext"; // Import AppContext
import './productDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { cart, setCart } = useContext(AppContext); // Use AppContext

  useEffect(() => {
    fetchData();
  }, [id]);

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";

  const fetchData = () => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddToCart = () => {
    const quantity = parseInt(document.getElementById('quantity').value, 10) || 1;
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      // Update quantity if product already in cart
      setCart(cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      // Add new product to cart
      setCart([...cart, { ...data, quantity }]);
    }
  };

  return (
    <>
      <Header />
      <Box
        padding={2}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {/* Cột hình ảnh */}
        <Box flex={1} maxWidth="600px" minWidth="300px" marginRight={2}>
          <img
            alt="Sample"
            src={data.img}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>

        {/* Cột nội dung */}
        <Box flex={2} maxWidth="800px" minWidth="300px" textAlign="left">
          <Typography variant="h4" gutterBottom>
            {data.name}
          </Typography>

          <Box marginTop={2}>
            <Typography variant="h6">Giá: {data.price} $</Typography>
          </Box>

          <Box
            marginTop={2}
            display="flex"
            flexDirection="column"
            width={"20vw"}
            alignItems="left"
            className="Box1"
          >
            <TextField
              id="quantity"
              type="number"
              label="Số lượng"
              InputProps={{ inputProps: { min: 1 } }}
              defaultValue={1}
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCart />}
              onClick={handleAddToCart} // Add event handler
            >
              Thêm vào giỏ hàng
            </Button>
          </Box>

          <Box marginTop={2}>
            <Typography variant="h6">Mô tả sản phẩm</Typography>
            <Typography>{data.des}</Typography>
          </Box>

          <Box marginTop={2}>
            <Typography variant="h6">Categories</Typography>
            <Typography>{data.category}</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
