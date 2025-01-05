import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [totalHours, setTotalHours] = useState("00:00");
  const [currentTime, setCurrentTime] = useState(new Date());
  //const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch geolocation on component load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toFixed(5),
            longitude: position.coords.longitude.toFixed(5),
          });
          toast.success("Location fetched successfully!");
        },
        (error) => {
          toast.error("Failed to fetch location!");
        }
      );
    } else {
      toast.error("Geolocation not supported!");
    }
  }, []);

  // Handle Clock In
  const handleClockIn = () => {
    const now = new Date();
    setClockInTime(now);
    setClockOutTime(null); // Reset clock-out when clocking in
    setTotalHours("00:00"); // Reset total hours
    toast.success("Clocked in successfully!");
  };

  // Handle Clock Out
  const handleClockOut = () => {
    const now = new Date();
    setClockOutTime(now);

    if (clockInTime) {
      const diff = now - clockInTime; // Difference in milliseconds
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTotalHours(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
      toast.success("Clocked out successfully!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <ToastContainer />
      <h1>Home</h1>
      <h3 style={{ color: "green" }}>Welcome, John Doe</h3>

      {/* Current Date, Time, and Day */}
      <div style={{ marginBottom: "20px" }}>
        <h4>{currentTime.toLocaleDateString()}</h4>
        <p>{currentTime.toLocaleTimeString()}</p>
        <p>{currentTime.toLocaleDateString("en-US", { weekday: "long" })}</p>
      </div>

      {/* Location */}
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px", marginBottom: "20px" }}>
        <h4>Current Location:</h4>
        <p>Latitude: {location.latitude || "Fetching..."}</p>
        <p>Longitude: {location.longitude || "Fetching..."}</p>
      </div>

      {/* Clock In/Out Section */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          style={{
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={clockInTime ? handleClockOut : handleClockIn}
        >
          {clockInTime ? "Clock Out" : "Clock In"}
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <p>{clockInTime ? clockInTime.toLocaleTimeString() : "--:--"}</p>
          <p>Clock-In</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>{clockOutTime ? clockOutTime.toLocaleTimeString() : "--:--"}</p>
          <p>Clock-Out</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>{totalHours}</p>
          <p>Total Hours</p>
        </div>
      </div>

      <button
        style={{
          backgroundColor: "green",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "10px 20px",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={() => console.log("Sign Out clicked")}
      >
        Sign Out
      </button>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
        }}
      >
        {/* Navigation Items can go here */}
      </div>
    </div>
  );
};

export default Dashboard;
