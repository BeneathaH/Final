import React, { useEffect, useState } from 'react'
import { getDetails } from '../../utils/api';
import "./ProductDetails.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                  );

                setProduct(res.data);
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                // setError("Failed to fetch product details.");
                // setLoading(false);
            }
        };
        fetchProductDetails();
    }, [id]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;



    if(!product) return <div>No product found.</div>
    
  return(
    <div>
    <button class="back-button" onClick={()=> navigate(-1)}>Back</button>
    
      <div className="container-details">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className='product-image' />
            <p>{product.description}</p>
            <p className='product-price'>${product.price}</p>
            <p className='product-category'> {product.category}</p>
            <p className='product-rating'>Rating: {product.rating.rate}</p>
            <button className='add-to-cart-button'>Add to Cart</button>
          </div>
         </div>
  )
}

export default ProductDetails;
