import React from "react";

function ProfileUpdate() {
  return (
    <div className="fixed top-0 z-10 h-screen w-screen bg-black/50">
      <div className="h-screen w-[50vh] border-r border-gray-200 bg-white p-6 shadow-2xl">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>

          <p className="mt-1 text-sm text-gray-500">
            Update your profile information
          </p>
        </div>

        <div className="mt-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="h-28 w-28 rounded-full border-4 border-gray-200 object-contain p-1"
            />
          </div>

          {/* Form */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700"
            />

            <label className="mb-2 mt-4 block text-sm font-semibold text-gray-700">
              About
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about yourself..."
              className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700"
            />

            <button className="mt-5 w-full rounded-md bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
