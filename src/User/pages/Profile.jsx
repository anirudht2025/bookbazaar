import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaRegEdit } from "react-icons/fa";
import ProfileUpdate from "../components/ProfileUpdate";

function Profile() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Header />

      {/* Profile */}
      {sidebar && <ProfileUpdate />}

      <div className="w-full">
        {/* Profile Banner */}
        <div className="relative h-[50vh] bg-green-950">
          <div className="absolute -bottom-30 ml-10 h-[80%]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="h-full"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">
          <h1 className="mt-35 mb-5 font-bold">UserName</h1>

          <div className="mb-5 grid grid-cols-2">
            <div>
              <p className="text-justify">
                An avid reader who loves exploring different genres, discovering
                new authors, and finding stories that leave a lasting
                impression. Always looking for the next great book to read.
              </p>
            </div>

            <div className="flex items-start justify-end">
              <button
                className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-white hover:bg-green-500"
                onClick={() => setSidebar(!sidebar)}
              >
                Edit
                <FaRegEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;