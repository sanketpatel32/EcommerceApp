import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import HeaderButton from './HeaderButton'
const Header = ({ setCartOpen, cartDisplay }) => {
  const handleCartOpen = () => setCartOpen(true)
  const handleCartClose = () => setCartOpen(false)

  

  return (
    <>
      <Row className='bg-dark text-white p-3 m-0'>
        <Col></Col>
        <Col className='text-center d-flex justify-content-center gap-5'>
     
        <Col className='text-center d-flex justify-content-center gap-5'>
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>Shop</HeaderButton>
          <HeaderButton>About</HeaderButton>
        </Col>

        </Col>
        <Col className='text-end'>
          <Button variant="outline-light" onClick={handleCartOpen}>Cart</Button>
        </Col>
      </Row>

      <Row className='bg-secondary d-flex justify-content-center text-center py-5 m-0'>
        <Col>
          <h1 className='text-white m-0 display-1 fw-bold'>The Generics</h1>
        </Col>
      </Row>

      <Cart show={cartDisplay} handleClose={handleCartClose} />
    </>
  )
}

export default Header