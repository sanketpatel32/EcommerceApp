import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`border-0 transition-shadow ${isHovered ? 'shadow-lg' : 'shadow'}`}
      style={{ maxWidth: '18rem', margin: '0 auto', transition: 'box-shadow 0.3s ease-in-out' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title className='text-center'>{props.title}</Card.Title>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center bg-white border-0 pt-0'>
        <Card.Text className='mb-0'>${props.price}</Card.Text>
        <Button variant="primary" onClick={props.onAddToCart}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard