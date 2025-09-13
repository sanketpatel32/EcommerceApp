import React from 'react'
import { Offcanvas,Table } from 'react-bootstrap'
import CartCard from './CartCard'

const Cart = ({ show, handleClose }) => {
const cartElements = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

}

]

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
  <Table hover responsive className="align-middle">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Price</th>
        <th>Qty</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cartElements.map((item, idx) => (
        <CartCard
          key={idx}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </tbody>
  </Table>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart