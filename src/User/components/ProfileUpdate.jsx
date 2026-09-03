import React from "react";

function ProfileUpdate({ setSidebar }) {
  return (
    <div className="fixed top-0 z-10 h-screen w-screen bg-black/30">
      <div className="h-screen w-[50vh] rounded-t-lg border-r border-gray-400 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-gray-800 px-5 py-5 text-white">
          <h1 className="text-xl font-bold">
            Edit <span className="text-amber-400">Profile</span>
          </h1>

          <button
            type="button"
            onClick={() => setSidebar(false)}
            className="cursor-pointer rounded-md px-2 py-1 text-lg text-gray-300 transition hover:bg-red-500 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-6">
          {/* Profile Image */}
          <label
            htmlFor="fileinp"
            className="mb-6 flex cursor-pointer justify-center"
          >
            <input type="file" name="profile" className="hidden" id="fileinp" />

            <img
              src="https://static.thenounproject.com/png/3270782-200.png"
              alt="profileicon"
              className="h-30 w-30 rounded-lg border-4 border-gray-200 bg-gray-100 object-contain p-2 transition hover:border-amber-400"
            />
          </label>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="UserName"
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Bio */}
          <textarea
            name="bio"
            placeholder="Bio"
            rows="4"
            className="mb-5 w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="w-full cursor-pointer rounded-md bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Update
            </button>

            <button
              type="button"
              onClick={() => setSidebar(false)}
              className="w-full cursor-pointer rounded-md bg-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
