import React, { useState } from "react";
import { FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";

function AdminHeader() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="relative flex h-20 items-center px-6">
          {/* App Icon */}
          <img
            src="/favicon.png"
            alt="BookBazaar"
            className="h-12 w-12 object-contain"
          />

          {/* Brand */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tight text-slate-900">
            Book<span className="text-amber-500">Bazaar</span>{" "}
            <span className="text-sm text-gray-500">Admin</span>
          </h1>

          {/* Admin User */}
          <div className="relative ml-auto">
            <button
              type="button"
              onClick={() => setDropdown(!dropdown)}
              className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-slate-800 px-3 py-2 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-800 hover:text-white"
            >
              <FaUser size={14} />
              Admin
              {dropdown ? <FaCaretUp /> : <FaCaretDown />}
            </button>

            {/* Dropdown */}
            {dropdown && (
              <div className="absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-lg border-2 border-slate-800 bg-white shadow-lg">
                <p className="cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-red-500 hover:text-white">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation
      <nav className="flex w-full justify-center gap-8 bg-gray-800 py-3.5 text-white">
        <a href="/admin/dashboard" className="transition hover:text-amber-400">
          Dashboard
        </a>

        <a href="/admin/resources" className="transition hover:text-amber-400">
          Resources
        </a>

        <a href="/admin/settings" className="transition hover:text-amber-400">
          Settings
        </a>
      </nav> */}

      {/* Welcome Marquee */}
      <div className="w-full bg-gray-800 py-1.5">
        <marquee>
          <h1 className="text-white">
            Welcome, Admin! You're all set to manage and monitor the system.
          </h1>
        </marquee>
      </div>
    </>
  );
}

export default AdminHeader;