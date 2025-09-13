import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './components/Header/About/About'
import Product from './components/Product/Product'
import HomePage from './components/HomePage/HomePage'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
