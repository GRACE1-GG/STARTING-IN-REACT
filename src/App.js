import React from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';
import { UserProvider } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AdminDashboard from './Components/AdminDashboard';
import TeacherDashboard from './Components/TeacherDashboard';
import SomeComponent from './Components/SomeComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Dashboard />} />
          <Route
            path="/admin"
            element={<ProtectedRoute component={AdminDashboard} allowedRoles={['admin']} />}
          />
          <Route
            path="/teacher"
            element={<ProtectedRoute component={TeacherDashboard} allowedRoles={['teacher']} />}
          />
          <Route path="/reports" element={<Reports />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup-link" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/some-component" element={<SomeComponent />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
