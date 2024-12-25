import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <input className="login-input" type="email" placeholder="Email" />
      <input className="login-input" type="text" placeholder="First Name" />
      <input className="login-input" type="text" placeholder="Last Name" />
      <input className="login-input" type="text" placeholder="Role (e.g., Teacher)" />
      <input className="login-input" type="password" placeholder="Password" />
      <input className="login-input" type="password" placeholder="Confirm Password" />

      <div className="login-remember">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>

      <button className="login-button">Login</button>

      <div className="login-links">
        <a href="forgot-password" className="forgot-password">Forgot Password?</a>
        <a href="signup-link" className="signup-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;