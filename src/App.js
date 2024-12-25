import React from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage/LandingPage.js'; // Import the LandingPage component

import {
    BrowserRouter as Router,
    Route,
    Routes,
    

  } from "react-router-dom";
  //import { Route, Switch } from "react-router";

  
  function App() {          
    return (
      <Router>
        <Navbar />
      <Routes>test",
      <Route path="/" element={<LandingPage />} /> {/* Add the LandingPage component here */}
      <Route  path="/login" element={<Login />} />
      <Route path="/users" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup-link" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      

    </Routes>      
                
               
            
        </Router>
  );
}

export default App;

