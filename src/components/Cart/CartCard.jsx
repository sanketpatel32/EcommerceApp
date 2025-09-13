import React from 'react'
import { Button } from 'react-bootstrap'

const CartCard = ({ imageUrl, title, price, quantity }) => {
  return (
    <tr>
      <td>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: 6,
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)"
          }}
        />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Button
          variant="outline-danger"
          size="sm"
          style={{
            borderRadius: "50%",
            width: 28,
            height: 28,
            padding: 0,
            fontSize: 18,
            lineHeight: 1
          }}
        >
          &times;
        </Button>
      </td>
    </tr>
  )
}

export default CartCard