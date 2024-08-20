import React, { useEffect, useState } from 'react'
import { getDetails } from '../../utils/api';
import "./ProductDetails.css";
import { useNavigate, useParams } from 'react-router-dom';



const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate("/")
    }
    useEffect(() => {
        getDetails(id).then((res) => {
          setProduct(res)
      console.log(res);
          
        });
    }, [id]);

    if(!product) return (
        <div>Loading...</div>
    )
    return (
        <>
          <button className="back-button" onClick={() => navigate("/")}>Back</button>
        <div className="container">
          <div className="container-details">
            <h1 className="product-title">{product.title}</h1>
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">{product.category}</p>
            {/* <p className="product-rating">Rating: {product.rating.rate}</p> */}
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          </div>
        </>

      );
    };
//   return(
//     <>
//     <button onClick={()=> navigate("/")}>Back</button>
//     <div>
      
        
//           <div className="container-details" key={product.id}>
//             <h1>{product.title}</h1>
//             <img src={product.image} alt={product.title} />
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <p>{product.category}</p>
//             {/* <p>{product.rating.rate}</p> */}
//           </div>
//           <button>Add to Cart</button>
        
      
//     </div>
//     </>
//   )


export default ProductDetails;
