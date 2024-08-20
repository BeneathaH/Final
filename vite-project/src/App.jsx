
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList/ProductList'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetailed/productDetails'





const App = () => {

  return (
    <>
    
    <Navbar />
      <h1> Latest Fashion</h1>
      <Home />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      
      
      
    </>
  )
}

export default App
