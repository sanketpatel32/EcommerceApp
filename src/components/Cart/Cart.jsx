import React from 'react'
import { Button, Offcanvas, Table } from 'react-bootstrap'
import CartCard from './CartCard'
import StoreContext from '../../store/StoreContext'

const Cart = ({ show, handleClose }) => {
  const storeCtx = React.useContext(StoreContext);

  const handlePurchase = () => {
    alert('Thank you for your purchase!');
  };
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
            {storeCtx.cart.map((item, idx) => (
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
        <Button
          variant=""
          onClick={handlePurchase}
          className="mt-3"
          disabled={storeCtx.cart.length === 0}
        >
          Purchase
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart