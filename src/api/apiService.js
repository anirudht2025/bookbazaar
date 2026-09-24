import axios from "axios";
import axiosInstance from "./axiosInstance";

const apiService = async (httpMethod, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader,
  };

  try {
    const response = await axios(reqConfig);
    return response;
  } catch (err) {
    throw err;
  }
};

export default apiService;
