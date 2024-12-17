import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [geolocationError, setGeolocationError] = useState(null);

  const handleClockIn = () => {
    const now = new Date().toLocaleTimeString();
    setClockInTime(now);
    toast.success(`Clocked in at: ${now}`);
    console.log('Clocked in at:', now);
  };

  const handleClockOut = () => {
    const now = new Date().toLocaleTimeString();
    setClockOutTime(now);
    toast.success(`Clocked out at: ${now}`);
    console.log('Clocked out at:', now);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          toast.success(`Location captured: (${latitude}, ${longitude})`);
          console.log('Location captured:', position);
        },
        (error) => {
          let errorMessage = 'An error occurred while capturing location.';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'The request to get user location timed out.';
              break;
            case error.UNKNOWN_ERROR:
              errorMessage = 'An unknown error occurred.';
              break;
            default:
              break;
          }
          setGeolocationError(errorMessage);
          toast.error(errorMessage);
          console.error('Geolocation error:', error);
        }
      );
    } else {
      const errorMessage = 'Geolocation is not supported by this browser.';
      setGeolocationError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4caf50',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    linkButton: {
      background: 'none',
      border: 'none',
      color: 'blue',
      textDecoration: 'underline',
      cursor: 'pointer',
      padding: '0',
      font: 'inherit',
    },
    links: {
      marginTop: '20px',
      textAlign: 'center',
      justifyContent: 'space-between',
      display: 'flex',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <button onClick={handleClockIn} style={styles.button}>Clock In</button>
      <button onClick={handleClockOut} style={styles.button}>Clock Out</button>
      <button onClick={handleGeolocation} style={styles.linkButton}>Capture Location</button>
      <div>
        {clockInTime && <p>Clocked in at: {clockInTime}</p>}
        {clockOutTime && <p>Clocked out at: {clockOutTime}</p>}
        {location && <p>Location: ({location.latitude}, {location.longitude})</p>}
        {geolocationError && <p style={{ color: 'red' }}>{geolocationError}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

// Export the component
export default Dashboard;




   
