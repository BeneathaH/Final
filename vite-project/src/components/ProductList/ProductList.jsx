import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/api";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getProducts().then((res) => {
      console.log(res);
      setProducts(res.data);
      
    })
  }, []);
  return (
    <>
      <div className="container">
        <div className="products-container">
          {products.map((item) => (
            <div className="products" key={item.id}>
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
