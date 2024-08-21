import axios from "axios";


const getDetails = async (id) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
export { getDetails};