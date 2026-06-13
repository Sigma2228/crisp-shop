import axios from 'axios';

const URL = 'https://fakestoreapi.com/users';

export const getAllUsers = async () => {
    try {
        const response = await axios.get(URL);
        return response.data; // Ось тут ваші користувачі
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data; // Ось тут ваші користувачі
    } catch (error) {
        console.log(error.message);
    };
}