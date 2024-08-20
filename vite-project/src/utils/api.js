import axios from "axios";


// const getProducts = async () => {
//     return axios 
//     .get(`https://fakestoreapi.com/products?limit=20`)
//     .then((res) => {
//         return res
//     })
//     .catch((err)=> {
//         console.error(err);
//     });

// };
// getProducts();


const getProducts = async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=20`);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getDetails = async (id) => {
    return axios 
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        return res.data;
    })
    .catch((err)=> {
        console.error(err);
    });

};
export {getProducts, getDetails};