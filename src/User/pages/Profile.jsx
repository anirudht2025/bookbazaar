import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaRegEdit } from "react-icons/fa";
import ProfileUpdate from "../components/ProfileUpdate";

function Profile() {
  const [sidebar, setSidebar] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

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
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="h-full"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">
          <h1 className="mt-35 mb-5 font-bold">UserName</h1>

          <div className="mb-5 grid grid-cols-2">
            <div>
              <p className="text-justify">
                An avid reader who loves exploring different genres, discovering
                new authors, and finding stories that leave a lasting
                impression. Always looking for the next great book to read.
              </p>
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
          {sellStatus && (
            <div className="rounded-2xl border border-gray-200 bg-gray-100 p-5">
              <h1 className="mb-5 pt-2 text-center text-2xl font-bold text-green-950">
                Book Details
              </h1>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left Side */}
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Author"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="No. of pages"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Image URL"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Discount Price"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <textarea
                    placeholder="Abstract"
                    rows="8"
                    className="mb-3 w-full resize-none rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />
                </div>

                {/* Right Side */}
                <div>
                  <input
                    type="text"
                    placeholder="Publisher"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Language"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="ISBN"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    className="mb-3 w-full rounded-md border border-gray-300 bg-white p-3 outline-none focus:border-2 focus:border-amber-500"
                  />

                  {/* Book Image */}
                  <label
                    htmlFor="bookimgfile"
                    className="mb-4 flex h-40 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-400 bg-gray-200 transition hover:border-amber-500 hover:bg-amber-50"
                  >
                    <input type="file" className="hidden" id="bookimgfile" />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
                      alt="Upload book"
                      className="h-16 w-16 object-contain opacity-70"
                    />
                  </label>

                  {/* Buttons */}
                  <div className="flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded-md bg-red-800 px-4 py-3 font-semibold text-white transition hover:bg-red-900"
                    >
                      RESET
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-md bg-green-800 px-4 py-3 font-semibold text-white transition hover:bg-green-900"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BOOK STATUS */}
          {bookStatus && (
            <div className="p-2">
              <div className="grid grid-cols-1 gap-4 border p-3 md:grid-cols-6">
                {/* Book Details */}
                <div className="md:col-span-5">
                  <h1 className="text-xl font-bold">Harry Potter</h1>

                  <h4 className="font-bold text-green-600">₹500</h4>

                  <p className="mt-2 text-justify">
                    Harry Potter is a young wizard who discovers his magical
                    heritage and begins an exciting journey at Hogwarts School
                    of Witchcraft and Wizardry. Along the way, he makes new
                    friends, faces dangerous challenges, and uncovers secrets
                    about his past. The story is filled with magic, friendship,
                    adventure, and unforgettable moments.
                  </p>

                  {/* Status */}
                  <div className="mt-3 flex items-center gap-4">
                    <span className="rounded-md border-2 border-green-600 px-4 py-2 font-bold text-green-600">
                      APPROVED
                    </span>

                    <span className="rounded-md border-2 border-amber-500 px-4 py-2 font-bold text-amber-500">
                      PENDING
                    </span>
                  </div>
                </div>

                {/* Book Image */}
                <div className="flex flex-col items-center gap-3 md:col-span-1">
                  <img
                    src="https://m.media-amazon.com/images/I/91A6EgLH+2L.jpg"
                    alt="Harry Potter"
                    className="h-40 w-full rounded-md object-cover"
                  />

                  <button className="w-full rounded-md bg-red-500 px-3 py-2 font-semibold text-white hover:bg-red-700">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PURCHASE HISTORY */}
          {purchaseStatus && <h2>Purchase History</h2>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
