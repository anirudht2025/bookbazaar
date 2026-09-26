// Import axios instance
import axiosInstance from "./axiosInstance";

// Create API service function
const apiService = async (httpMethod, url, reqBody, reqHeader) => {
  // Configure request
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader,
  };

  try {
    // Send request
    const response = await axiosInstance(reqConfig);
    return response;
  } catch (err) {
    // Handle error
    throw err;
  }
};

// Export API service
export default apiService;
