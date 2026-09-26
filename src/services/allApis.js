import apiService from "../api/apiService";

// User registration
export const userRegisterAPI = async (data) => {
  return await apiService("POST", "/register", data);
};