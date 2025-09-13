import {useState} from 'react'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap'
import './App.css'


const App = () => {
  const [cartDisplay, setCartDisplay] = useState(false);



  return (
    <Container fluid className='p-0 m-0'>
      <Header setCartOpen={setCartDisplay}  cartDisplay = {cartDisplay}/>
      <Product />
      <Footer />
    </Container>

  )
}

export default App