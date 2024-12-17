import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-links">
       {/* <Link to="/register" className="nav-link">Register</Link>*/}
       <Link to="/login" className="nav-link">Login</Link>
       <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/reports" className="nav-link">Reports</Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
