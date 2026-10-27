import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../User/components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import {
  adminAllBookApPI,
  approveBookAPI,
  adminAllUsersAPI,
} from "../../services/allApis";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Resources() {
  const [toggle, setToggle] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const trueStyle = "border-s-1 border-t-1 border-e-1 p-3";
  const falseStyle = "border-b-1 p-3";

  useEffect(() => {
    handleAllBooks();
    handleAllUsers();
  }, []);

  const handleAllBooks = async () => {
    try {
      const response = await adminAllBookApPI();

      if (response.status === 200) {
        setAllBooks(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch books:", error);
    }
  };

  // Approve Book
  const handleApproveBook = async (bid) => {
    try {
      const response = await approveBookAPI(bid);

      if (response.status === 200) {
        handleAllBooks();
      } else {
        toast.warning("Something went wrong!");
      }
    } catch (error) {
      console.log("Failed to approve book:", error);
      toast.warning("Something went wrong!");
    }
  };

  // Get All Users
  const handleAllUsers = async () => {
    try {
      const response = await adminAllUsersAPI();

      if (response.status === 200) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch users:", error);
      toast.warning("Failed to fetch users!");
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="w-screen">
        <div className="grid h-full grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Resources */}
          <div className="p-7.5 md:col-span-9">
            <h1 className="text-center text-3xl font-semibold">Resources</h1>

            {/* Toggle */}
            <div className="my-5 flex justify-center">
              <button
                className={toggle ? trueStyle : falseStyle}
                onClick={() => {
                  setToggle(true);
                  handleAllUsers();
                }}
              >
                Users
              </button>

              <button
                className={!toggle ? trueStyle : falseStyle}
                onClick={() => setToggle(false)}
              >
                Books
              </button>
            </div>

            {/* Users */}
            {toggle ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {allUsers.length > 0 ? (
                  allUsers.map((user) => (
                    <div
                      key={user._id}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:shadow-green-700"
                    >
                      {/* Profile Image */}

                      <div className="mb-4 flex justify-center">
                        <img
                          src={
                            user.picture
                              ? user.picture.startsWith("http")
                                ? user.picture
                                : `http://localhost:3000/uploads/${user.picture}`
                              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          }
                          alt={user.username}
                          onError={(e) => {
                            e.currentTarget.onerror = null;

                            e.currentTarget.src =
                              "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                          }}
                          className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <h2 className="min-w-0 truncate text-lg font-bold text-gray-900">
                          {user.username}
                        </h2>

                        {/* <p className="mt-2 text-sm text-gray-600">
                          Email: {user.email}
                        </p> */}

                        <p
                          className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold capitalize ${
                            user.role === "admin"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.role || "user"}
                        </p>
                      </div>

                      <p className="mt-2 text-sm text-gray-600">{user.email}</p>

                      {/* <p className="mt-2 text-sm capitalize text-gray-600">
                        Role: {user.role || "user"}
                      </p> */}

                      {/* <p className="mt-3 text-xs text-gray-400">User ID</p>

                      <p className="mt-1 truncate rounded-md bg-gray-50 px-3 py-2 font-mono text-xs text-gray-600">
                        {user._id}
                      </p> */}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-lg font-medium text-gray-500">
                      No users found.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Books */
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {allBooks.length > 0 ? (
                  allBooks.map((book) => (
                    <div
                      key={book._id}
                      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {/* Book Cover */}
                      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-100 p-5">
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          className="h-full max-w-full rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Status Badge */}
                        <span
                          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                            book.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : book.status === "sold"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {book.status || "Pending"}
                        </span>
                      </div>

                      {/* Book Details */}
                      <div className="p-5">
                        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                          {book.title}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                          by {book.author}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xl font-extrabold text-green-700">
                            ₹{book.discountPrice ?? book.price}
                          </span>

                          <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                            {book.category || "General"}
                          </span>
                        </div>

                        {/* Seller */}
                        <div className="mt-4 border-t border-gray-100 pt-3">
                          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            Posted by
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-gray-700">
                            {book.sellerMail}
                          </p>
                        </div>

                        {/* Book ID */}
                        <div className="mt-3">
                          <p className="text-xs text-gray-400">Book ID</p>

                          <p className="mt-1 truncate rounded-md bg-gray-50 px-3 py-2 font-mono text-xs text-gray-600">
                            {book._id}
                          </p>
                        </div>

                        {/* Approve Button */}
                        {book.status !== "approved" &&
                        book.status !== "sold" ? (
                          <button
                            onClick={() => handleApproveBook(book._id)}
                            className="mt-5 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-[0.98]"
                          >
                            Approve Book
                          </button>
                        ) : (
                          <button
                            disabled
                            className="mt-5 w-full cursor-not-allowed rounded-xl bg-gray-100 py-3 font-semibold text-gray-400"
                          >
                            {book.status === "sold"
                              ? "Book Sold"
                              : "Already Approved"}
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-lg font-medium text-gray-500">
                      No books found.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default Resources;
