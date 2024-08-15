import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]); // Fetch data when the ID changes

  const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student";

  const fetchData = () => {
    axios.get(`${url}/${id}`)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    
    <div>
      <Header />
      <h1>Product detail: {id}</h1>
      <p><img alt="Sample" src={data.img} /></p>
      <p>Name: {data.name}</p>
      <Footer/>
    </div>
  );
}
