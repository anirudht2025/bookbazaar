import apiService from "../api/apiService";

// User registration
export const userRegisterAPI = async (data) => {
  return await apiService("POST", "/register", data);
};

// User login -> token generation
export const userLoginAPI = async (data) => {
  return await apiService("POST", "/login", data);
};
