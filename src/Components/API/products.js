import axios from 'axios';

const URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(URL)
        return response.data
    }
    catch (error) {
        console.log(error.message);
    }

};
export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        return response.data
    }
    catch (error) {
        console.log(error.message);
    }
}



export const getCategories = async () => {
    try {
        const response = await axios.get(`${URL}/categories`)
        return response.data
    }
    catch (error) {
        console.log(error.message);
    } axios.get(`${URL}/categories`)
}