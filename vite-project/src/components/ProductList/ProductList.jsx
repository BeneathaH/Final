
import React from "react";
// import Navbar from "./Navbar";
// import ProductList from "./ProductList/ProductList";
import { useEffect, useState } from "react";
// import { getProducts } from "../utils/api";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

    const ProductList = () => {

    
    // const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState([]);
    const [data, setData] =useState([]);

    const handleProductClick= (id) => {
        navigate(`/product-details/${id}`);
      };
  
    useEffect(() => {
        let isMounted = true;
        



const fetchProducts = async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=20`);
    console.log(res);
    // setProducts(res.data);
    if (isMounted) {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
        }
    // return res;
  } catch (err) {
      console.error(err);
    }
   
 };
          
        //   try {
        //     const res = await axios();
    
            // if (isMounted) {
            //   setData(res.data);
            //   setFilter(res.data);
            //   setLoading(false);
            //  } catch (error) {
            //   console.error("Fetching products failed", error);
            //   setLoading(false);
            // }
          
        
        
        // getProducts().then((res) => {
        //   console.log(res);
        //   setProducts(res.data);
        // })
    
        fetchProducts();
            
    
           return () => {
            isMounted = false;
           };
        
        }, []);
      
       const handleFilter = (category) => {
        if (category === "All") {
          setFilter(data);
         } else {
          setFilter(data.filter(product => product.category === category));
        } 
      };
    
      const Loading = () => <>Loading....</>
    
     const ShowProducts = () => (
        
          <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
              <button className="btn btn-outline-dark me-2" onClick={() => handleFilter("All")}>All</button>
              <button className="btn btn-outline-dark me-2" onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
              <button className="btn btn-outline-dark me-2" onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
              <button className="btn btn-outline-dark me-2" onClick={() => handleFilter("jewelery")}>Jewelery</button>
              <button className="btn btn-outline-dark me-2" onClick={() => handleFilter("electronics")}>Electronics</button>
            </div>
            {filter && filter.length > 0 ? (
              <div className="row">
              {filter.map((product) => (
             <div key={product.id}  className="col-md-3 mb-4">
                   <div className="card h-100 text-center p-4" onClick={() => handleProductClick(product.id)}>
                      <img src={product.image} className="card-img-top" alt={product.title} height= "250px" />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                        <p className="card-text lead fw-bold"> ${product.price}</p>
                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark"> Buy Now</NavLink>
                      </div>
                    </div>
                  </div>
                  
            ))}
            </div>
            ) : (
                <p>No products found.</p>
               )}
            </>
            );
        
      
     return (
       <div className="container my-5 py-5" >
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center"></div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    
  );
};
export default ProductList;

