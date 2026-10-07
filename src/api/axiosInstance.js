// Import axios
import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Received!");
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.log("Unauthorized access!!");
      } else if (status === 404) {
        console.log("API not found!");
      } else if (status === 500) {
        console.log("Server Error!!");
      }
    } else if (error.request) {
      console.log("No response from Server!!");
    } else {
      console.log("Error :" + error);
    }

    return Promise.reject(error);
  },
);

// Export Axios instance
export default axiosInstance;
