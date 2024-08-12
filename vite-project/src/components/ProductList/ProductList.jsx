import React, { useState, useEffect } from "react";
import { Final } from "../../utils/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = ()=> {

  }
  useEffect(() => {
    Final().then(() => {
      setProducts();
    });
  });
  return (
    <div>
      <input type="text" onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      value={searchValue}
       />
    </div>
  );
};

export default ProductList;
