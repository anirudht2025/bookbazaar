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

// Add book
export const addBookAPI = async (data) => {
  return await apiService("POST", "/books", data);
};

// Get latest books
export const latestBooksAPI = async () => {
  return await apiService("GET", "/latest-books", "");
};

// Book list
export const bookListAPI = async () => {
  return await apiService("GET", "/booklist", "");
};

// User added books
export const userAddedBooksAPI = async () => {
  return await apiService("GET", "/user-books");
};

// Delete user added books
export const deleteBooksAPI = async (bid) => {
  return await apiService("DELETE", `/delete-book/${bid}`, {});
};
