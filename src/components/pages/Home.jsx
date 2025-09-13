import React from 'react'
import Header from '../Header/Header';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Name from '../Product/Name';
const Home = () => {
    const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <Container fluid className='p-0 m-0'>
      <Header setCartOpen={setCartDisplay}  cartDisplay = {cartDisplay}/>
        <Name />
      <Product />
      <Footer />
    </Container>
  )
}

export default Home