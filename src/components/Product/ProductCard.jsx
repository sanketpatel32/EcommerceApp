import React from 'react'
import { Button, Card } from 'react-bootstrap'
const ProductCard = (props) => {
  return (
    <Card style={{ maxWidth: '18rem', margin: '0 auto' }}>
      <Card.Title className='text-center mt-2'>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Footer className='d-flex justify-content-between align-items-center bg-light'>
        <Card.Text className='mb-0'>${props.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard