import React, { useState } from "react";
import { FaRegUserCircle, FaGoogle } from "react-icons/fa";

function Auth() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[url('https://wallpaperaccess.com/full/124383.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen items-center justify-center bg-black/40 px-4">
        {/* Login Card */}
        <div className="my-5 w-full max-w-md rounded-2xl border border-white/20 bg-gray-900/90 p-8 text-white shadow-2xl backdrop-blur-sm">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10">
              <FaRegUserCircle className="text-6xl text-amber-400" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-center text-3xl font-bold">
            {authStatus ? "Create Account" : "Welcome Back"}
          </h1>

          <p className="mt-2 text-center text-sm text-gray-400">
            {authStatus ? "Register to join " : "Login to continue to Book"}
            {!authStatus && <span className="text-amber-400">Bazaar</span>}
            {authStatus && (
              <span>
                Book<span className="text-amber-400">Bazaar</span>
              </span>
            )}
          </p>

          {/* Form */}
          <div className="mt-7">
            {authStatus && (
              <input
                type="text"
                placeholder="Username"
                className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400"
            />

            {/* Password Info */}
            <div className="mt-3 flex items-center justify-between gap-3 text-sm">
              <p className="text-gray-400">Keep your password private.</p>

              <a
                href="#"
                className="whitespace-nowrap text-amber-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login */}
            <button className="mt-6 w-full rounded-lg bg-amber-500 py-3 font-semibold text-gray-900 transition hover:bg-amber-400">
              {authStatus ? "Register" : "Login"}
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-700"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>

          {/* Google */}
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-700 bg-white py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Register */}
          <div className="mt-6 flex justify-center gap-1 text-sm">
            <p className="text-gray-400">
              {authStatus
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>

            <p
              className="cursor-pointer text-amber-400 hover:underline"
              onClick={() => setAuthStatus(!authStatus)}
            >
              {authStatus ? "Login Here" : "Register Here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
