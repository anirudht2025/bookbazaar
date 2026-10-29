import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  adminAllBookApPI,
  adminAllUsersAPI,
} from "../../services/allApis";

function DashboardPieChart() {
  const [data, setData] = useState([
    { name: "Books", value: 0, color: "#8b5cf6" },
    { name: "Users", value: 0, color: "#22c55e" },
    { name: "Employees", value: 0, color: "#f97316" },
  ]);

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

        setData([
          {
            name: "Books",
            value: books.length,
            color: "#8b5cf6",
          },
          {
            name: "Users",
            value: users.length,
            color: "#22c55e",
          },
          {
            name: "Employees",
            value: users.filter((user) => user.role === "employee").length,
            color: "#f97316",
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">
        BookBazaar Distribution
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          {/* Outer pie */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            innerRadius={95}
            paddingAngle={4}
            stroke="white"
            strokeWidth={3}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "12px",
            }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardPieChart;