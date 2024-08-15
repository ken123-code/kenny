import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import { Typography, Button, Checkbox, FormControlLabel } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import emailjs from 'emailjs-com';

// Custom theme if needed
const theme = createTheme({
  palette: {
    primary: {
      main: grey[800], // Customize primary color if needed
    },
    secondary: {
      main: grey[600], // Customize secondary color if needed
    },
  },
});

const Section4 = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [agree, setAgree] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agree) {
      alert("You must agree to the terms and conditions before sending the message.");
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: message,
    };

    emailjs.send('service_k8v6elf', 'template_vzu3lkn', templateParams, '5qyYNTCqEBNH3rWm-')
      .then((response) => {
        console.log('Success:', response);
        alert('Your message has been sent successfully!');
        // Clear the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setAgree(false);
      }, (error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth='lg'
          sx={{
            backgroundColor: grey[100],
            borderRadius: 2,
            backdropFilter: 'blur(10px)', // Apply background blur effect
            padding: 2,
            boxShadow: 3,
            height: 'calc(100vh - 20px)', // Full viewport height minus top and bottom margins
            marginTop: 10, // Margin top for desktop
            marginBottom: 10, // Margin bottom for desktop
            display: 'flex',
            alignItems: 'center', // Center content vertically
            justifyContent: 'center', // Center content horizontally
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 600, // Set a maximum width for better alignment
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiTextField-root': { m: 1, width: '100%' }, // Full width for input fields
            }}
          >
            <Typography variant="h2" sx={{ mb: 2 , textAlign:'center'}}>
              Thông tin khách hàng
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextField
                color="primary"
                label="First Name"
                placeholder="eg. Michael"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                color="primary"
                label="Last Name"
                placeholder="eg. Prior"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                color="primary"
                label="Email Address"
                placeholder="eg. material@design.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                color="primary"
                label="Your Message"
                placeholder="Enter your message here..."
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ ml: 1 }} // Add margin-left to space the text from the checkbox
                  >
                    I agree to the{' '}
                    <a href="#" style={{ textDecoration: 'underline' }}>
                      Terms and Conditions
                    </a>.
                  </Typography>
                }
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  mt: 2,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Section4;
