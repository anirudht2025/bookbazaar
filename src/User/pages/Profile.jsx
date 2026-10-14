// Imports
import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileUpdate from "../components/ProfileUpdate";
import SellBook from "../components/SellBook";

import axiosInstance from "../../api/axiosInstance";
import {
  userAddedBooksAPI,
  deleteBooksAPI,
  purchasedBooksAPI,
} from "../../services/allApis";

function Profile() {
  // States
  const [username, setUserName] = useState("");
  const [dp, setDp] = useState("");
  const [bio, setBio] = useState("");

  const [sidebar, setSidebar] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const [userBookList, setUserBookList] = useState([]);
  const [purchaseList, setPurchasedList] = useState([]);

  // Profile Details
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));

      setDp(
        user?.picture?.includes("lh3.googleusercontent")
          ? user.picture
          : `${axiosInstance.defaults.baseURL}/uploads/${user.picture}`,
      );

      setUserName(user?.username);
      setBio(user?.bio);
    }
  }, []);

  // Fetch User Added Books
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleUserAddedBooks();
    }
  }, [bookStatus]);

  const handleUserAddedBooks = async () => {
    try {
      const response = await userAddedBooksAPI();
      console.log("User Added Books Response:", response.data);

      if (response.status === 200) {
        setUserBookList(response.data);
      }
    } catch (err) {
      console.log("Failed to fetch user books:", err);
    }
  };

  // Delete User Added Book
  const handleDeleteBook = async (id) => {
    try {
      const response = await deleteBooksAPI(id);

      if (response.status === 200) {
        toast.success("Removed!!");
        handleUserAddedBooks();
      } else {
        toast.error("Remove Book Failed!!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong!!");
    }
  };

  // Fetch purchased books of the logged-in user
  const handlePurchasedBooks = async () => {
    try {
      const response = await purchasedBooksAPI();
      setPurchasedList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch purchased books when the profile loads
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handlePurchasedBooks();
    }
  }, []);

  // Tailwind Classes
  const trueClass = "p-3 border-t-2 border-s-2 border-e-2";
  const falseClass = "p-3 border-b-2";

  return (
    <div>
      <Header />

      {/* Profile */}
      {sidebar && <ProfileUpdate setSidebar={setSidebar} />}

      <div className="w-full">
        {/* Profile Banner */}
        <div className="relative h-[50vh] bg-green-950">
          <div className="absolute -bottom-30 ml-10 h-[80%]">
            {dp && (
              <img
                src={dp}
                alt="profile"
                referrerPolicy="no-referrer"
                className="h-48 w-48 rounded-full border-4 border-white object-cover"
              />
            )}
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">
          <h1 className="mt-35 mb-5 font-bold">{username}</h1>

          <div className="mb-5 grid grid-cols-2">
            <div>
              <p className="text-justify">{bio}</p>
            </div>

            <div className="flex items-start justify-end">
              <button
                className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white hover:bg-green-500"
                onClick={() => setSidebar(!sidebar)}
              >
                Edit
                <FaRegEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-20 py-30">
        {/* Toggle button group */}
        <div className="flex justify-center">
          <button
            className={sellStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(true);
              setBookStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell Book
          </button>
          <button
            className={bookStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Book Status
          </button>
          <button
            className={purchaseStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(false);
              setPurchaseStatus(true);
            }}
          >
            Purchase History
          </button>
        </div>

        {/* Content */}

        <div className="mt-8 text-center">
          {/* SELL BOOK */}
          {sellStatus && <SellBook />}

          {/* BOOK STATUS */}
          {bookStatus && (
            <div className="p-2">
              {userBookList.length > 0 ? (
                userBookList.map((item) => (
                  <div
                    key={item._id}
                    className="mb-6 flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between"
                  >
                    {/* Book Details */}
                    <div className="md:flex-1">
                      <h1 className="text-xl font-bold">{item.title}</h1>

                      <h4 className="font-bold text-green-600">
                        ₹{item.price}
                      </h4>

                      <p className="mt-2 text-justify">{item.abstract}</p>

                      {/* Status */}
                      <div className="mt-3 flex items-center gap-4">
                        <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                          {item.status?.toUpperCase() || "PENDING"}
                        </span>
                      </div>
                    </div>

                    {/* Book Image */}
                    <div className="flex w-full flex-col items-center gap-3 md:w-32">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-40 w-28 rounded-md object-cover"
                      />

                      <button
                        onClick={() => handleDeleteBook(item._id)}
                        className="w-28 rounded-md bg-red-500 px-3 py-2 font-semibold text-white hover:cursor-pointer hover:bg-red-700"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-QvTxAf0Gb_jEY30VNK_wM1FBg8x-h66jPvaXKCEcA&s=10"
                    alt="no-books"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="text-gray-500">
                    You haven't added any books yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* PURCHASE HISTORY */}
          {purchaseStatus && (
            <div className="p-2">
              {purchaseList.length > 0 ? (
                purchaseList.map((book) => (
                  <div
                    key={book._id}
                    className="mb-4 flex flex-col gap-6 border p-4 md:flex-row md:items-center md:justify-between"
                  >
                    {/* Book Details */}
                    <div className="md:flex-1">
                      <h1 className="text-xl font-bold">{book.title}</h1>

                      <h4 className="font-bold text-green-600">
                        ₹{book.discountPrice}
                      </h4>

                      <p className="mt-2 text-justify">{book.description}</p>

                      {/* Status */}
                      <div className="mt-3 flex items-center gap-4">
                        <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                          PURCHASED
                        </span>
                      </div>
                    </div>

                    {/* Book Image */}
                    <div className="flex w-full flex-col items-center gap-3 md:w-32">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="h-40 w-28 rounded-md object-cover"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/11329/11329060.png"
                    alt="No purchased books"
                    className="w-32 h-32 object-contain"
                  />
                  <p className="text-gray-500 mt-2">
                    You haven't purchased any books yet.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
