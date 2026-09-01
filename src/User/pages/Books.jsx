import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Books() {
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
              <input type="radio" name="filter" />
              No-Filter
            </label>
          </div>

          {/* Books */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {/* Book Card */}
            <div className="w-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://m.media-amazon.com/images/I/91A6EgLH+2L.jpg"
                alt="Harry Potter"
                className="h-80 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Harry Potter</h3>

                <p className="mt-2 text-lg font-bold text-green-700">₹500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Books;
