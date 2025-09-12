import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
const Header = () => {
  return (
    <>
      <Row className='bg-dark text-white p-3 m-0'>
        <Col></Col>
        <Col className='text-center d-flex justify-content-center gap-5'>
          <span>Home</span>
          <span>Store</span>
          <span>About</span>
        </Col>
        <Col className='text-end'>
          <Button variant="outline-light">Cart</Button>
        </Col>
      </Row>

      <Row className='bg-secondary d-flex justify-content-center text-center py-5 m-0'>
        <Col>
          <h1 className='text-white m-0'>Generic</h1>
        </Col>
      </Row>
    </>
  )
}

export default Header