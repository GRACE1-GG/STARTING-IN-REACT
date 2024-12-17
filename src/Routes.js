// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage'; // Import the LandingPage component

const nav = () => {
    return (
        <Routes>
           
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/reports" component={Reports} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/landing-page" component={LandingPage} /> // Add this route to navigate to the LandingPage component
       </Routes>
    );
};

export default nav;
