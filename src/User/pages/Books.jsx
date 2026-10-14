import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { bookListAPI } from "../../services/allApis";

function Books() {
  const [bookList, setBookList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [dummyList, setDummyList] = useState([]);

  const handleSearch = (keyword) => {
    const books = dummyList.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    setBookList(books);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleBookList();
    }
  }, []);

  const handleBookList = async () => {
    const response = await bookListAPI();

    if (response.status === 200) {
      setBookList(response.data);
      setDummyList(response.data);
      setFilters([...new Set(response.data.map((item) => item.category))]);
    }
  };

  const filterBooks = (filter) => {
    if (filter) {
      const filteredBooks = dummyList.filter(
        (item) => item?.category === filter,
      );
      setBookList(filteredBooks);
    } else {
      setBookList(dummyList);
    }
  };

  return (
    <>
      <Header />

      {/* BOOK LIST */}
      <section className="w-full px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <h1 className="mb-6 text-center text-3xl font-bold">Collections</h1>

          {/* Search */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter Title to search"
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full max-w-2xl border px-4 py-3 outline-none"
            />
          </div>

          {/* Filters + Menu */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Filters</h2>
              <GiHamburgerMenu className="text-2xl" />
            </div>

            <label className="mt-4 flex items-center gap-2">
              <input
                type="radio"
                name="filter"
                onChange={() => filterBooks("")}
              />
              No-Filter
            </label>

            {filters.map((item, index) => (
              <label key={index} className="mt-3 flex items-center gap-2">
                <input
                  type="radio"
                  name="filter"
                  value={item}
                  onChange={() => filterBooks(item)}
                />
                {item}
              </label>
            ))}
          </div>

          {/* Books */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {bookList.length > 0 ? (
              bookList.map((item) => (
                /* Book Card */
                <div
                  key={item._id}
                  className="w-64 overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-80 w-full object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-2 text-lg font-bold text-green-700">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full flex-col items-center">
                <img
                  src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif"
                  alt="No books available"
                  className="h-64 w-64 object-contain"
                />

                <p className="text-lg font-medium text-gray-500">
                  No books available
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Books;
