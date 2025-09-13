import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import StoreContext from '../../store/StoreContext';
import { useContext } from 'react';

const Product = () => {

const storeCtx = useContext(StoreContext);


const products = storeCtx.items.map((product, index) => (
  <Col md={4} key={index}>
    <ProductCard onAddToCart={() => storeCtx.addToCart(product.title)} title={product.title} price={product.price} imageUrl={product.imageUrl} />
  </Col>
));


  return (
    <Container fluid className='p-5 bg-light'>
        <h2 className="text-center mb-5 fw-bold">Our Products</h2>
      <Row className='justify-content-center g-4'>
        {products}
      </Row>
    </Container>
  )
}

export default Product