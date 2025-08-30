import axios from "axios";

// Replace with your live backend URL
const axiosInstance = axios.create({
  baseURL: "https://mern-backend-w4a1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
