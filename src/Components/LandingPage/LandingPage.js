import React from 'react';
//import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file
import Navbar from '../Navbar'; // Import the Navbar component

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar /> {/* Include the Navbar component */}
      <div className="content">
        <h1>Welcome to Our App</h1>
        <p>Your gateway to seamless management and efficient operations.</p>
        {/*<div className="links">
         // <Link to="/login" className="link-button">Login</Link>
          <Link to="/sign-up" className="link-button">Sign Up</Link>
          <Link to="/dashboard" className="link-button">Dashboard</Link>
          <Link to="/report" className="link-button">View Report</Link>*/}
        </div>
      </div>
   // </div>
  );
};

export default LandingPage;
