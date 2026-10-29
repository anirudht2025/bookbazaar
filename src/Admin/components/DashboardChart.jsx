import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { adminAllBookApPI, adminAllUsersAPI } from "../../services/allApis";

function DashboardChart() {
  const [data, setData] = useState([
    { name: "Books", total: 0 },
    { name: "Users", total: 0 },
    { name: "Employees", total: 0 },
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
          { name: "Books", total: books.length },
          { name: "Users", total: users.length },
          {
            name: "Employees",
            total: users.filter((user) => user.role === "employee").length,
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
      <h2 className="mb-4 text-2xl font-semibold">BookBazaar Overview</h2>

      {/* <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
          barCategoryGap="25%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8b5cf6" name="Total" />
        </BarChart>
      </ResponsiveContainer> */}

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
          barCategoryGap="40%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 14 }}
            dy={10}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "#f5f3ff" }}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "12px",
            }}
            labelStyle={{
              color: "#374151",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          />

          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: "20px" }}
          />

          <Bar
            dataKey="total"
            name="Total Count"
            radius={[8, 8, 0, 0]}
            maxBarSize={70}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === "Books"
                    ? "#8b5cf6"
                    : entry.name === "Users"
                      ? "#22c55e"
                      : "#f97316"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardChart;
