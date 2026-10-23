import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaRedoAlt, FaHome } from "react-icons/fa";

function PaymentFailed() {
  return (
    <>
      <Header />

      <div className="flex min-h-[75vh] items-center justify-center bg-linear-to-br from-red-50 via-white to-rose-100 px-4 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-6 text-center shadow-xl sm:p-10">
          {/* Failure GIF */}
          <img
            src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1"
            alt="Payment failed"
            className="mx-auto mb-4 h-48 w-48 object-contain"
          />

          {/* Failure Heading */}
          <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <FaTimesCircle className="text-4xl text-red-500" />

            <h1 className="text-2xl font-bold text-red-600 sm:text-4xl">
              Payment Failed!
            </h1>
          </div>

          <h2 className="mb-3 text-xl font-semibold text-gray-800 sm:text-2xl">
            Oops! Something went wrong.
          </h2>

          <p className="mx-auto mb-6 max-w-lg text-gray-600">
            We couldn't process your payment. Don't worry, your books are
            waiting for you! Please try again.
          </p>

          {/* Failure Information */}
          <div className="mb-8 flex items-center gap-4 rounded-xl bg-red-50 p-4 text-left">
            <FaTimesCircle className="shrink-0 text-2xl text-red-500" />

            <p className="text-sm text-gray-700 sm:text-base">
              Your payment was unsuccessful. If any amount was deducted, please
              check with your payment provider before trying again.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/books"
              className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <FaRedoAlt />
              Try Again
            </Link>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              <FaHome />
              Go to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaymentFailed;
