import React from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import HeaderButton from './HeaderButton'
import Name from './Name'


const Header = ({ setCartOpen, cartDisplay }) => {
  const handleCartOpen = () => setCartOpen(true)
  const handleCartClose = () => setCartOpen(false)



  return (
    <>
      <Row className='bg-dark text-white p-1 m-0 fixed-top'>
        <Col></Col>
        <Col className='text-center d-flex justify-content-center gap-5'>

          <Col className='text-center d-flex justify-content-center gap-5'>
            <HeaderButton to="/home"> Home </HeaderButton>
            <HeaderButton to="/product">Shop</HeaderButton>
            <HeaderButton to="/about">  About </HeaderButton>
          </Col>

        </Col>
        <Col className='text-end'>
          <Button variant="outline-light" onClick={handleCartOpen}>Cart</Button>
        </Col>
      </Row>
      <Name />
      <Cart show={cartDisplay} handleClose={handleCartClose} />
    </>
  )
}

export default Header