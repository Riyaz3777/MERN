import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="alert alert-danger mt-3">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      {userData ? (
        <div className="mt-4">
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          {/* Add more user details if needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default DashboardPage;
