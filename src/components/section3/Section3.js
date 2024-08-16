import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

const Section3 = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4, mt:4 ,mb:4 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 4, 
          color: 'primary.main'
        }}
      >
        About Us
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={1}
            sx={{
              color: 'white',
              display: 'grid',
              flexDirection: 'column',
              minWidth: 0,
              overflowWrap: 'break-word',
              backgroundColor: 'rgb(255, 255, 255)',
              backgroundClip: 'border-box',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
              backgroundImage: 'linear-gradient(195deg, rgba(66, 66, 74, 0.9), rgba(25, 25, 25, 0.9)), url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '400px', // Adjust height as needed
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '0.75rem',
              placeItems: 'center',
              marginLeft: '20px', // Left margin
              marginRight: '20px', // Right margin
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                color: 'white', // Set text color to white
              }}
            >
              <Typography variant="caption" color="white">
                Productivity
              </Typography>
              <Typography variant="h4" gutterBottom color="white">
                Search and Discover!
              </Typography>
              <Typography variant="body2" paragraph color="white">
                Don't be scared of the truth because we need to restart the human foundation in truth. And I love you like Kanye loves Kanye. I love Rick Owens’ bed design.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '16px' }}
                href="#/sections/page-sections/applications"
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={1}
            sx={{
              color: 'white',
              display: 'grid',
              flexDirection: 'column',
              minWidth: 0,
              overflowWrap: 'break-word',
              backgroundColor: 'rgb(255, 255, 255)',
              backgroundClip: 'border-box',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
              backgroundImage: 'linear-gradient(195deg, rgba(66, 66, 74, 0.9), rgba(25, 25, 25, 0.9)), url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '400px', // Adjust height as needed
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '0.75rem',
              placeItems: 'center',
              marginLeft: '10px', // Left margin
              marginRight: '10px', // Right margin
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                color: 'white', // Set text color to white
              }}
            >
              <Typography variant="caption" color="white">
                Design
              </Typography>
              <Typography variant="h4" gutterBottom color="white">
                Find music and play it!
              </Typography>
              <Typography variant="body2" paragraph color="white">
                As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '16px' }}
                href="#/sections/page-sections/applications"
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={1}
            sx={{
              color: 'white',
              display: 'grid',
              flexDirection: 'column',
              minWidth: 0,
              overflowWrap: 'break-word',
              backgroundColor: 'rgb(255, 255, 255)',
              backgroundClip: 'border-box',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
              backgroundImage: 'linear-gradient(195deg, rgba(66, 66, 74, 0.9), rgba(25, 25, 25, 0.9)), url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '400px', // Adjust height as needed
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '0.75rem',
              placeItems: 'center',
              marginLeft: '10px', // Left margin
              marginRight: '10px', // Right margin
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                color: 'white', // Set text color to white
              }}
            >
              <Typography variant="caption" color="white">
                Support
              </Typography>
              <Typography variant="h4" gutterBottom color="white">
                Check bugs and fix!
              </Typography>
              <Typography variant="body2" paragraph color="white">
                If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '16px' }}
                href="#/sections/page-sections/applications"
              >
                Get Started
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
