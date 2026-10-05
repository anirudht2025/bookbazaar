import apiService from "../api/apiService";

// User registration
export const userRegisterAPI = async (data) => {
  return await apiService("POST", "/register", data);
};

// User login -> token generation
export const userLoginAPI = async (data) => {
  return await apiService("POST", "/login", data);
};

// Google login -> authenticate user and generate token
export const googleLoginAPI = async (data) => {
  return await apiService("POST", "/google-auth", data);
};

// Profile edit
export const profileEditAPI = async (data) => {
  return await apiService("PUT", "/profile-edit", data);
};
