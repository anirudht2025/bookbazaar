import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../User/components/Footer";

function Dashboard() {
  return (
    <>
      <AdminHeader />
      {/* DASHBOARD */}
      <div className="w-screen">
        <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-3">
            <AdminSidebar />
          </div>
          <div className="col-span-9">Dashboard</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
