import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../User/components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegEdit } from "react-icons/fa";

function Settings() {
  return (
    <>
      <AdminHeader />

      <div className="w-screen">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Settings */}
          <div className="p-5 md:col-span-9">
            <h1 className="mb-6 text-center text-3xl font-semibold">
              Admin Settings
            </h1>

            {/* Content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Paragraph */}
              <div className="pt-2">
                <p className="mb-4 text-justify leading-7 text-gray-700">
                  Manage your BookBazaar administrator account and keep your
                  profile information up to date. You can update your username,
                  password, and profile picture from this section.
                </p>

                <p className="mb-4 text-justify leading-7 text-gray-700">
                  As an administrator, you can manage users, review book
                  submissions, and maintain the overall content of the
                  bookstore. Keeping your account information updated helps
                  ensure smooth access to all administrative features.
                </p>
              </div>

              {/* Profile */}
              <div className="rounded-lg bg-slate-200 p-4 shadow-md me-5">
                <div className="flex justify-center">
                  <label htmlFor="profpic" className="relative cursor-pointer">
                    <input
                      type="file"
                      name="profpic"
                      id="profpic"
                      className="hidden"
                    />

                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
                      alt="Profile"
                      className="h-32 w-32 object-contain"
                    />

                    <div className="absolute bottom-0 right-0 rounded-full bg-yellow-400 p-2 hover:bg-orange-400">
                      <FaRegEdit />
                    </div>
                  </label>
                </div>

                {/* Form */}
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="mb-2 w-full rounded border bg-white p-2"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-2 w-full rounded border bg-white p-2"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="mb-3 w-full rounded border bg-white p-2"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <button className="group relative cursor-pointer overflow-hidden rounded-md border-2 border-red-500 px-2 py-2 font-semibold text-red-500 transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-red-500 before:transition-all before:duration-300 hover:text-white hover:before:w-full">
                      <span className="relative z-10">RESET</span>
                    </button>

                    <button className="group relative cursor-pointer overflow-hidden rounded-md border-2 border-green-500 px-2 py-2 font-semibold text-green-500 transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:before:w-full">
                      <span className="relative z-10">UPDATE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Settings;
