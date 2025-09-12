import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

const Product = () => {

const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

const products = productsArr.map((product, index) => (
  <Col md={4} key={index}>
    <ProductCard title={product.title} price={product.price} imageUrl={product.imageUrl} />
  </Col>
));


  return (
    <Container fluid className='p-5 bg-light'>
      <Row className='justify-content-center g-4'>
        {products}
      </Row>
    </Container>
  )
}

export default Product