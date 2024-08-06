import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export default api;