import React, { useEffect, useState } from 'react'
import { getDetails } from '../../utils/api';
import "./ProductDetails.css";



const productDetails = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getDetails().then((res) => {
          console.log(res.data);
     
        console.log(res);
          
        });
    }, []);
  return (
    <div>
      {products.map((item) => {
        return (
          <div className="container" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.rating.rate}</p>
          </div>
        );
      })}
    </div>
  )
}

export default productDetails;
