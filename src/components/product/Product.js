import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { AppContext } from '../../AppContext';
import Swal from 'sweetalert2';

export default function ProductCard(props) {
  const { product } = props;
  const { addToCart } = useContext(AppContext);

  const handleAdd = (id) => {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
    });
    addToCart(id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={product.img} // Use the product image here
          alt={product.name}
          sx={{
            height: 140,
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {product.des}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Price: ${product.price}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAdd(product.id)}
            >
              Add to cart
            </Button>
            <Button
              component={Link}
              to={`/detail/${product.id}`}
              variant="text"
              color="primary"
            >
              Chi tiết sản phẩm
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
