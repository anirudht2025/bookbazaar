import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <>
      <Header />

      <div className="flex min-h-[75vh] items-center justify-center bg-linear-to-br from-green-50 via-white to-emerald-100 px-4 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-6 text-center shadow-xl sm:p-10">
          {/* Success GIF */}
          <img
            src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
            alt="Payment successful"
            className="mx-auto mb-4 h-48 w-48 object-contain"
          />

          {/* Success Icon */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-600">
              ✓
            </div>

            <h1 className="text-2xl font-bold text-green-600 sm:text-4xl">
              Payment Successful!
            </h1>
          </div>

          <h2 className="mb-3 text-xl font-semibold text-gray-800 sm:text-2xl">
            Thank you for your purchase!
          </h2>

          <p className="mx-auto mb-6 max-w-lg text-gray-600">
            Your payment has been completed successfully. We hope you enjoy your
            new books. Happy reading!
          </p>

          {/* Order Information */}
          <div className="mb-8 flex items-center gap-4 rounded-xl bg-green-50 p-4 text-left">
            <span className="text-3xl">📚</span>
            <p className="text-sm text-gray-700 sm:text-base">
              Your order is being processed. Thank you for choosing BookBazaar!
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/books"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              🛒 Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              🏠 Go to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentSuccess;
