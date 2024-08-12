import axios from "axios";


const Final = async () => {
    return axios 
    .get("https://fakestoreapi.com/products")
    .then((res) => {
        return res.data;
    })
    .catch((err)=> {
        console.error(err);
    });

};

export {Final};