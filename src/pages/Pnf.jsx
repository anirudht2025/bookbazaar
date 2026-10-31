import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Pnf() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <FaBookOpen className="mb-4 text-6xl text-green-800" />

      <h1 className="text-8xl font-bold text-green-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found!
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Pnf;
