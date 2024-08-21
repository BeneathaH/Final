import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetailed/productDetails";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="products" element={<Products />} />
        
      </Routes>
    </>
  );
};

export default App;
