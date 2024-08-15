import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';

export default function StatsSection() {
  return (
    <Box sx={{ padding: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 2,
                height: '100%', // Ensure boxes stretch to fill available height
                backgroundColor: 'background.paper', // Optional: Add a background color
                minHeight: 250, // Optional: Minimum height for boxes
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h1" color="primary" sx={{ fontSize: '3rem', mb: 2 }} >
                <CountUp end={300} duration={5} />
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Projects
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Of “high-performing” level are led by a certified project manager
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 2,
                height: '100%', // Ensure boxes stretch to fill available height
                backgroundColor: 'background.paper', // Optional: Add a background color
                minHeight: 250, // Optional: Minimum height for boxes
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h1" color="primary" sx={{ fontSize: '3rem', mb: 2 }}>
                <CountUp end={70} duration={5} />
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Hours
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                That meets quality standards required by our users
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 2,
                height: '100%', // Ensure boxes stretch to fill available height
                backgroundColor: 'background.paper', // Optional: Add a background color
                minHeight: 250, // Optional: Minimum height for boxes
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography variant="h1" color="primary" sx={{ fontSize: '3rem', mb: 2 }}>
                <CountUp end={30} duration={5} />
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Support
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Actively engage team members that finishes on time
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
