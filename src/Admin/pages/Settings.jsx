import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../User/components/Footer";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegEdit } from "react-icons/fa";
import { adminProfileEditAPI } from "../../services/allApis";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Settings() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    picture: "",
    cpassword: "",
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setProfile({
        ...profile,
        username: user?.username,
        picture: user?.picture,
      });
    }
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile({ ...profile, picture: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // const handleProfileEdit = async () => {
  //   if (profile.password !== profile.cpassword) {
  //     return toast.warning("Passwords do not match!");
  //   }

  //   const reqBody = new FormData();
  //   reqBody.append("username", profile.username);

  //   if (profile.password) {
  //     reqBody.append("password", profile.password);
  //   }

  //   if (profile.picture instanceof File) {
  //     reqBody.append("picture", profile.picture);
  //   }

  //   try {
  //     const response = await adminProfileEditAPI(reqBody);

  //     if (response.status === 200) {
  //       const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  //       const updatedUser = {
  //         ...user,
  //         ...response.data,
  //       };

  //       sessionStorage.setItem("user", JSON.stringify(updatedUser));

  //       setProfile((prev) => ({
  //         ...prev,
  //         username: updatedUser.username,
  //         picture: updatedUser.picture,
  //       }));

  //       setPreview("");
  //       toast.success("Profile updated successfully!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Profile update failed!");
  //   }
  // };

  const handleProfileEdit = async () => {
    const { username, password, cpassword, picture } = profile;

    if (!username || !password || !cpassword || !picture) {
      return toast.warning("Enter Valid Inputs!!");
    }

    if (password !== cpassword) {
      return toast.warning("Passwords do not match!");
    }

    try {
      let response;

      if (picture instanceof File && picture.type.startsWith("image/")) {
        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        formData.append("picture", picture);

        response = await adminProfileEditAPI(formData);
      } else {
        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);

        response = await adminProfileEditAPI(formData);
      }

      if (response.status === 200) {
        toast.success("Profile Updated Successfully!!");

        setTimeout(() => {
          sessionStorage.clear();
          nav("/auth");
        }, 1000);
      } else {
        toast.error("Something Went Wrong!! Update Failed!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!! Update Failed!!");
    }
  };

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");

    setProfile({
      username: user?.username || "",
      password: "",
      picture: user?.picture || "",
      cpassword: "",
    });

    setPreview("");
  };

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
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />

                    <img
                      src={
                        preview ||
                        (typeof profile.picture === "string" && profile.picture
                          ? `http://localhost:3000/uploads/${profile.picture}`
                          : "") ||
                        "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
                      }
                      alt="Profile"
                      className="h-32 w-32 rounded-full object-cover"
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
                    value={profile.username}
                    onChange={(e) =>
                      setProfile({ ...profile, username: e.target.value })
                    }
                    className="mb-2 w-full rounded border bg-white p-2"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={profile.password}
                    onChange={(e) =>
                      setProfile({ ...profile, password: e.target.value })
                    }
                    className="mb-2 w-full rounded border bg-white p-2"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={profile.cpassword}
                    onChange={(e) =>
                      setProfile({ ...profile, cpassword: e.target.value })
                    }
                    className="mb-3 w-full rounded border bg-white p-2"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="group relative cursor-pointer overflow-hidden rounded-md border-2 border-red-500 px-2 py-2 font-semibold text-red-500 transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-red-500 before:transition-all before:duration-300 hover:text-white hover:before:w-full"
                    >
                      <span className="relative z-10">RESET</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleProfileEdit}
                      className="group relative cursor-pointer overflow-hidden rounded-md border-2 border-green-500 px-2 py-2 font-semibold text-green-500 transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:before:w-full"
                    >
                      <span className="relative z-10">UPDATE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Settings;
