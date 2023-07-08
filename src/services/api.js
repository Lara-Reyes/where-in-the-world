import axios from 'axios';

export const getCountries = async () => {
    try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        return res.data;
    } catch (error) {
        console.error("Error retrieving countries: ", error);
        throw error;
    }
};