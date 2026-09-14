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
        <div className="grid h-full grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Dashboard Content */}
          <div className="p-3 md:col-span-9 me-5">
            <div className="m-2 grid grid-cols-1 gap-2 md:grid-cols-3">
              {/* Books */}
              <div className="rounded-lg bg-violet-500 p-10 text-lg text-white">
                <p>Total Number of Books</p>
                <h2 className="mt-2 text-3xl font-bold">100+</h2>
              </div>

              {/* Users */}
              <div className="rounded-lg bg-green-500 p-10 text-lg text-white">
                <p>Total Number of Users</p>
                <h2 className="mt-2 text-3xl font-bold">100+</h2>
              </div>

              {/* Employees */}
              <div className="rounded-lg bg-orange-500 p-10 text-lg text-white">
                <p>Total Number of Employees</p>
                <h2 className="mt-2 text-3xl font-bold">20+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
