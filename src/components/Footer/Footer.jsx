import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <Row className='bg-dark text-white p-3 m-0'>
      <Col className='text-center'> The Generics</Col>
      <Col className='text-center'>
        <SocialIcon url="https://facebook.com/" className='mx-2' />
        <SocialIcon url="https://twitter.com/" className='mx-2' />
        <SocialIcon url="https://instagram.com/" className='mx-2' />
        <SocialIcon url="https://linkedin.com/" className='mx-2' />
      </Col>
    </Row>
  )
}

export default Footer