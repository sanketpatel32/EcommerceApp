import React from 'react'
import { Offcanvas } from 'react-bootstrap'

const Cart = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Cart content will go here */}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart