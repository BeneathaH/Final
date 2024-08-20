import React from "react";
// import Navbar from "./Navbar";
import ProductList from "./ProductList/ProductList";
// import { useEffect, useState } from "react";
// // import { getProducts } from "../utils/api";
// import { NavLink, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";




const Home = () => {
    // const navigate = useNavigate();

          
    
    return (
        <>

  <div className="hero">
      <div className="card bg-dark text-white border-0">
       <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
          />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
        <ProductList />
    </div>
          <div className="container my-5 py-5">
         <div className="row">
            <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
               <hr />
           </div>
         </div>
        {/* <div className="row justify-content-center"></div>
         {loading ? <Loading /> : <ShowProducts />} */}
       </div>
  
  


    {/* <div className="main-container">

      <div className="products-container">
        {products.map((item) => (
          <div
            onClick={() => newPage(item.id)}
            className="products"
            key={item.id}
          >
            <img src={item.image} alt={item.title}  />
            <h1>{item.title}</h1>
                      </div>
        ))}
      </div>
    </div> */}
    </>
  );
};

export default Home;