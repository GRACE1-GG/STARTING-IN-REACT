import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (password === confirmPassword) {
      const userData = { email, firstName, lastName, role };
      login(userData);
      role === 'admin' ? navigate('/admin') : navigate('/teacher');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="login-input"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <select
        className="login-input"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="" disabled>Select Role</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="login-remember">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>

      <button className="login-button" onClick={handleLogin}>Login</button>

      <div className="login-links">
        <a href="forgot-password" className="forgot-password">Forgot Password?</a>
        <a href="signup-link" className="signup-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
