import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="relative flex h-20 items-center px-6">
          {/* App Icon - Left End */}
          <Link to="/" className="absolute left-6">
            <img
              src="/favicon.png"
              alt="BookBazaar"
              className="h-12 w-12 object-contain"
            />
          </Link>

          {/* Brand - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Book<span className="text-amber-500">Bazaar</span>
            </h1>
          </Link>

          {/* Social + Login + User */}
          <div className="ml-auto flex items-center gap-5">
            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              <FaFacebook size={19} />
            </a>

            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-pink-500"
            >
              <FaInstagram size={19} />
            </a>

            <a
              href="#"
              className="text-slate-500 transition-colors hover:text-black"
            >
              <FaXTwitter size={18} />
            </a>

            {/* Login */}
            <Link
              to="/auth"
              className="flex items-center gap-2 rounded-lg border-2 border-slate-800 px-4 py-2 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-800 hover:text-white"
            >
              <FaUser size={14} />
              Login
            </Link>

            {/* User Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdown(!dropdown)}
                className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-slate-800 px-3 py-2 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-800 hover:text-white"
              >
                <FaUser size={14} />
                User
                {dropdown ? <FaCaretUp /> : <FaCaretDown />}
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-lg border-2 border-slate-800 bg-white shadow-lg">
                  <Link
                    to="/profile"
                    className="block border-b-2 border-slate-200 px-4 py-2 text-sm text-green-600 hover:bg-green-500 hover:text-white"
                  >
                    Profile
                  </Link>

                  <p className="cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-red-500 hover:text-white">
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex w-full justify-center gap-8 bg-gray-800 py-3.5 text-white">
        <Link to="/" className="transition hover:text-amber-400">
          Home
        </Link>

        <Link to="/books" className="transition hover:text-amber-400">
          Books
        </Link>

        <Link to="/contact" className="transition hover:text-amber-400">
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Header;
