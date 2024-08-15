import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function NotFound() {
  return (
    <div>
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px - 80px)', // Adjust for header and footer height
          textAlign: 'center',
          
          color: '#ffffff', // White text
          padding: 4,
        }}
      >
        <Box
          sx={{
            p: 4, // Padding inside the box
            border: '2px solid #ffffff', // White border
            borderRadius: 2, // Rounded corners
            backgroundColor: '#d32f2f', // Ensure the box has the same background color
          }}
        >
          <Typography variant="h1" component="h1" sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
            404
          </Typography>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1">
            The page you’re looking for doesn’t exist or an error occurred. Please try again.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
