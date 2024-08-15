import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Button, IconButton, Paper, styled } from "@mui/material";
import axios from "axios";
import { AppContext } from "../../AppContext";
import { Twitter, Facebook, Instagram, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Section1() {
  const { cart, setCart, removeFromCart, count, setCount } = useContext(AppContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";
  
  const fetchData = () => {
    axios.get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        backgroundImage: 'url("https://demos.creative-tim.com/material-kit-pro-react/static/media/bg.2363c20a.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Material Design</Typography>
          <IconButton color="primary">
            <Menu />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="primary" href="#">
              <Twitter />
            </IconButton>
            <IconButton color="primary" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="primary" href="#">
              <Instagram />
            </IconButton>
          </Box>
        </Box> */}

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>
            Material Kit
          </Typography>
          <Typography variant="body1" paragraph>
            The time is now for it be okay to be great. People in this world shun people for being nice.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button  component={Link} to="/product" variant="contained" color="primary" >
              Shopping
            </Button>
            <Button variant="text" color="primary">
              Read more
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
