import React from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';
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
      <Routes>test",
      <Route  path="/login" element={<Login />} />
      <Route path="/users" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} /> {/* Add the LandingPage component here */}

    </Routes>      
                
               
            
        </Router>
  );
}

export default App;

