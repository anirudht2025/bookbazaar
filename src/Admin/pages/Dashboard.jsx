import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../User/components/Footer";
import DashboardChart from "../components/DashboardChart";
import DashboardPieChart from "../components/DashboardPieChart";
import { adminAllBookApPI, adminAllUsersAPI } from "../../services/allApis";

function Dashboard() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [booksResponse, usersResponse] = await Promise.all([
          adminAllBookApPI(),
          adminAllUsersAPI(),
        ]);

        const books = Array.isArray(booksResponse.data)
          ? booksResponse.data
          : [];

        const users = Array.isArray(usersResponse.data)
          ? usersResponse.data
          : [];

        setTotalBooks(books.length);
        setTotalUsers(users.length);
        setTotalEmployees(
          users.filter((user) => user.role === "employee").length,
        );
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

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
          <div className="me-5 p-3 md:col-span-9">
            <div className="m-2 grid grid-cols-1 gap-2 md:grid-cols-3">
              {/* Books */}
              <div className="rounded-lg bg-violet-500 p-10 text-lg text-white">
                <p>Total Number of Books</p>
                <h2 className="mt-2 text-3xl font-bold">{totalBooks}</h2>
              </div>

              {/* Users */}
              <div className="rounded-lg bg-green-500 p-10 text-lg text-white">
                <p>Total Number of Users</p>
                <h2 className="mt-2 text-3xl font-bold">{totalUsers}</h2>
              </div>

              {/* Employees */}
              <div className="rounded-lg bg-orange-500 p-10 text-lg text-white">
                <p>Total Number of Employees</p>
                <h2 className="mt-2 text-3xl font-bold">{totalEmployees}</h2>
              </div>
            </div>

            {/* Dashboard Chart */}
            <div className="m-2 mt-6">
              <DashboardChart />
            </div>

            {/* Dashboard Pie Chart */}
            <div className="m-2 mt-6">
              <DashboardPieChart />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
