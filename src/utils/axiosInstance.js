import axios from "axios";

const axiosInstance = axios.create({
        //baseURL: "https://workintech-fe-ecommerce.onrender.com",
        baseURL: "http://localhost:3000/ecommerce",
    });

export default axiosInstance;