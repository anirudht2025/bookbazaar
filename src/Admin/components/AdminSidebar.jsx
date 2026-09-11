import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdMenuBook, MdSettings } from "react-icons/md";

function AdminSidebar() {
  return (
    <div className="h-full min-h-[70vh] bg-gray-800 p-5">
      <div className="flex h-full flex-col items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small_2x/admin-3d-illustration-icon-png.png"
          className="mt-2.5 h-28 w-28 rounded-full border-4 border-green-700 object-cover"
          alt="admin"
        />

        <h1 className="mt-4 text-lg font-bold text-white">Admin Dashboard</h1>

        <div className="mt-4 flex w-full flex-col">
          {/* Dashboard */}
          <Link to="/admin/dashboard">
            <label
              htmlFor="dashboard"
              className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-white transition hover:bg-gray-700 hover:text-amber-400"
            >
              <input
                type="radio"
                name="option"
                id="dashboard"
                className="hidden"
              />
              <MdDashboard size={20} />
              Dashboard
            </label>
          </Link>

          {/* Resources */}
          <Link to="/admin/resources">
            <label
              htmlFor="resources"
              className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-white transition hover:bg-gray-700 hover:text-amber-400"
            >
              <input
                type="radio"
                name="option"
                id="resources"
                className="hidden"
              />
              <MdMenuBook size={20} />
              Resources
            </label>
          </Link>

          {/* Settings */}
          <Link to="/admin/settings">
            <label
              htmlFor="settings"
              className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-white transition hover:bg-gray-700 hover:text-amber-400"
            >
              <input
                type="radio"
                name="option"
                id="settings"
                className="hidden"
              />
              <MdSettings size={20} />
              Settings
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
