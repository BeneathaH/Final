import React from "react";
import ProductList from "./ProductList/ProductList";

const Home = () => {
  return (
    <>
      <div className="img-img"></div>

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
            <h1 className="display-6 fw-bolder text-center"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
