import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'
import { AppContext } from '../../AppContext'
import Swal from 'sweetalert2'
export default function Product() {
  return (
    <div>
      <Header />
        <Products />
      <Footer />
    </div>
  )
}
