import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://sil-ta-api.onrender.com",
    withCredentials:true
});

export default axiosInstance;