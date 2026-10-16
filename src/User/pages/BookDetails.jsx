import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getBookByIdAPI } from "../../services/allApis";
import axiosInstance from "../../api/axiosInstance";
import {
  FaBookOpen,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaGlobe,
  FaBuilding,
  FaBarcode,
} from "react-icons/fa";

function BookDetails() {
  const { bid } = useParams();
  const [bookDetail, setBookDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    handleGetBook();
  }, [bid]);

  const handleGetBook = async () => {
    const response = await getBookByIdAPI(bid);

    if (response.status === 200) {
      setBookDetail(response.data);
    }
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();

    const currentIndex = bookDetail.uploadedImages.findIndex(
      (image) =>
        `${axiosInstance.defaults.baseURL}/uploads/${image}` === selectedImage,
    );

    const previousIndex =
      (currentIndex - 1 + bookDetail.uploadedImages.length) %
      bookDetail.uploadedImages.length;

    setSelectedImage(
      `${axiosInstance.defaults.baseURL}/uploads/${bookDetail.uploadedImages[previousIndex]}`,
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();

    const currentIndex = bookDetail.uploadedImages.findIndex(
      (image) =>
        `${axiosInstance.defaults.baseURL}/uploads/${image}` === selectedImage,
    );

    const nextIndex = (currentIndex + 1) % bookDetail.uploadedImages.length;

    setSelectedImage(
      `${axiosInstance.defaults.baseURL}/uploads/${bookDetail.uploadedImages[nextIndex]}`,
    );
  };

  if (!bookDetail) {
    return (
      <>
        <Header />
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-[75vh] bg-linear-to-br from-emerald-50 via-white to-orange-50 px-5 py-12 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <div className="mx-auto mb-8 max-w-6xl text-sm text-gray-500">
          Home <span className="mx-2">/</span>
          Books <span className="mx-2">/</span>
          <span className="font-medium text-green-700">Book Details</span>
        </div>

        {/* Main Card */}
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* Book Image */}
          <div className="flex items-center justify-center bg-linear-to-br from-green-100 to-orange-100 p-8 md:p-14">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-2xl bg-green-900/10 blur-xl transition duration-300 group-hover:bg-green-900/20"></div>

              <img
                src={
                  bookDetail.imageUrl ||
                  "https://placehold.co/400x550?text=Book+Cover"
                }
                alt={bookDetail.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/400x550?text=Book+Cover";
                }}
                className="relative h-87.5 w-62.5 rounded-lg object-cover shadow-2xl transition duration-500 group-hover:-translate-y-2 md:h-112.5 md:w-77.5"
              />

              {/* <span className="absolute -right-4 -top-4 rounded-full bg-green-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                BookBazaar
              </span> */}
            </div>
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center p-7 md:p-12">
            <span className="mb-4 w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-green-700">
              {bookDetail.category}
            </span>

            <h1 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              {bookDetail.title}
            </h1>

            <p className="mb-5 text-lg text-gray-500">
              by{" "}
              <span className="font-semibold text-gray-800">
                {bookDetail.author}
              </span>
            </p>

            <p className="mb-7 leading-relaxed text-gray-600">
              {bookDetail.abstract ||
                "Discover this book and add it to your reading collection."}
            </p>

            {/* Price */}
            <div className="mb-7 rounded-2xl border border-green-100 bg-green-50 p-5">
              <p className="mb-1 text-sm text-gray-500">Price</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-4xl font-extrabold text-green-700">
                  ₹{bookDetail.discountPrice || bookDetail.price}
                </span>

                {bookDetail.discountPrice &&
                  bookDetail.discountPrice < bookDetail.price && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{bookDetail.price}
                      </span>

                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                        {Math.round(
                          ((bookDetail.price - bookDetail.discountPrice) /
                            bookDetail.price) *
                            100,
                        )}
                        % OFF
                      </span>
                    </>
                  )}
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-7 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FaBookOpen className="mt-1 text-green-700" />
                <div>
                  <p className="text-xs text-gray-400">Pages</p>
                  <p className="font-medium text-gray-800">
                    {bookDetail.noOfPages}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGlobe className="mt-1 text-green-700" />
                <div>
                  <p className="text-xs text-gray-400">Language</p>
                  <p className="font-medium text-gray-800">
                    {bookDetail.language}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaBuilding className="mt-1 text-green-700" />
                <div>
                  <p className="text-xs text-gray-400">Publisher</p>
                  <p className="font-medium text-gray-800">
                    {bookDetail.publisher}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaBarcode className="mt-1 text-green-700" />
                <div>
                  <p className="text-xs text-gray-400">ISBN</p>
                  <p className="font-medium text-gray-800">{bookDetail.isbn}</p>
                </div>
              </div>
            </div>

            {/* Seller */}
            {/* <div className="mb-7 flex items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                <FaUser size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-400">Listed by</p>
                <p className="break-all font-semibold text-gray-800">
                  {bookDetail.sellerMail || "BookBazaar Seller"}
                </p>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => alert("Purchase functionality coming soon!")}
                className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
              >
                <FaShoppingCart />
                Buy Now
              </button>

              <button
                onClick={() => alert("Wishlist functionality coming soon!")}
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-red-700 px-6 py-4 font-semibold text-red-700 transition hover:bg-red-50"
              >
                <FaHeart />
                Wishlist
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-gray-400">
              Discover your next favourite read with BookBazaar.
            </p>
          </div>
        </div>

        {/* Seller Uploaded Images */}
        {bookDetail.uploadedImages?.length > 0 && (
          <section className="mx-auto mt-10 max-w-6xl rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">More Images</h2>
              <p className="mt-2 text-sm text-gray-500">
                Click an image to view it in full size.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {bookDetail.uploadedImages.map((image, index) => {
                const imageUrl = `${axiosInstance.defaults.baseURL}/uploads/${image}`;

                return (
                  <div
                    key={index}
                    className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <img
                      src={imageUrl}
                      alt={`${bookDetail.title} - Image ${index + 1}`}
                      className="h-64 w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                    />

                    {/* <p className="border-t border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-600">
                      Image {index + 1}
                    </p> */}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Full-Size Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40"
              aria-label="Close image"
            >
              &times;
            </button>

            {/* Left Arrow */}
            {bookDetail.uploadedImages?.length > 1 && (
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40 md:left-8"
                aria-label="Previous image"
              >
                &#8249;
              </button>
            )}

            {/* Full-Size Image */}
            <img
              src={selectedImage}
              alt={bookDetail.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[80vw] rounded-xl object-contain shadow-2xl"
            />

            {/* Right Arrow */}
            {bookDetail.uploadedImages?.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40 md:right-8"
                aria-label="Next image"
              >
                &#8250;
              </button>
            )}
          </div>
        )}

        <div className="mx-auto mt-8 max-w-6xl text-center text-sm text-gray-500">
          Good books deserve a second life. ♡
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BookDetails;
  