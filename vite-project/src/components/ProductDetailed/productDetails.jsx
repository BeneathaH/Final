import React, { useEffect, useState } from 'react'
import { getDetails } from '../../utils/api';
import "./ProductDetails.css";
import { useNavigate, useParams } from 'react-router-dom';



const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);
    // const navigateBack = () => {
    //     navigate("/")
    // }
    // useEffect(() => {
    //     getDetails(id).then((res) => {
    //       setProduct(res)
    //   console.log(res);
          
    //     });
    // }, [id]);
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await getDetails(id);
                setProduct(res);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError("Failed to fetch product details.");
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // if(!product) return (
    //     <div>Loading...</div>
    // )
  return(
    <>
    <button class="back-button" onClick={()=> navigate("/")}>Back</button>
    <div>
      <div className="container-details" key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className='product-image' />
            <p>{product.description}</p>
            <p className='product-price'>${product.price}</p>
            <p className='product-category'>{product.category}</p>
            <p className='product-rating'>Rating: {product.rating.rate}</p>
            <button className='add-to-cart-button'>Add to Cart</button>
          </div>
        
      
    </div>
    </>
  )
}

export default ProductDetails;
