import React from 'react'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (

    <Container fluid className='p-0 m-0'>
      <Header />
      <Product />
      <Footer />
    </Container>

  )
}

export default App