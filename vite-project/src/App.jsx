
import './App.css'
import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetailed/productDetails'
// import Navbar1 from './components/Navbar1'
// import Footer from './components/Footer'
// import Product1 from './components/Product1'



// function App() {
//   return <div className='App'>
//   <Navbar1 />
//   <Product1 />
//   <Footer />
//   </div>;
  

// }

const App = () => {

  return (
    <>
    
    <Navbar />
      <h1>Latest Fashions</h1>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      
      
      
    </>
  )
}

export default App;
