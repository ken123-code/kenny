import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import './section4.css'
import { Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './section4.css'
export default function Section4() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  maxWidth='fluid'>
      <Container sx={{ maxHeight:'100vh',height: "70vh", display: 'flex', flexWrap: 'wrap', maxWidth:"100%", justifyContent:'center', alignItems:'center', marginBottom:"50px" }} >
      <Typography sx={{ maxHeight:'50px'}} variant="h2">Thong tin khach hang</Typography>
        <Box sx={{ maxHeight:'200px', display: 'flex', flexWrap: 'wrap', width:"100%", justifyContent:'center' }}>
        <TextField 
          color="warning"
          sx={{ m: 1, width: '48%',height:'fit-content'}}
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
        />
        <TextField  color="warning" sx={{ m: 1 ,width: '48%',height:'fit-content'}} id="demo-helper-text-misaligned-no-helper" label="Name" />
        <TextField color="warning" sx={{ m: 1, width: '97.5%',height:'fit-content', marginTop:"20px" }} id="demo-helper-text-misaligned-no-helper" label="Email" />
        </Box>
      </Container>
      </Container>
    </React.Fragment>
  );
}
