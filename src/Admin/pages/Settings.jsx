import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../User/components/Footer";
import AdminSidebar from "../components/AdminSidebar";

function Settings() {
  return (
    <>
      <AdminHeader />
      {/* Dashboard */}
      <div>
        <div className="w-screen">
          <div className="h-full grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3">
              <AdminSidebar />
            </div>
            <div className="md:col-span-9">
              <h1 className="text-3xl">Settings</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
