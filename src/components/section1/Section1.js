import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./section1.css";
import { Grid, Paper, responsiveFontSizes, styled } from "@mui/material";
import axios from "axios";
import { AppContext } from "../../AppContext";

export default function Section1() {
  const { cart, setCart, removeFromCart, count, setCount   } = useContext(AppContext);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const [data,setData]=useState([])
      useEffect(()=>{
        fetchData();
      },[])
      const url="https://66a07be77053166bcabb8fcc.mockapi.io/student"
      const fetchData =()=>{
        axios.get(url)
        .then(function(res){
            setData(res.data)
        })
        .catch(function(error){
          console.log(error)
        })
      }
  return (
    <>
      <Container className="d-flex container1 bg-light border" fluid>
        <Grid container spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
          <Grid item xs={4}>
              <Item>Exploring Historical Books</Item>
              <Item> Discover profound historical books, from major events to legendary figures. </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
