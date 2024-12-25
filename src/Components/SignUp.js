import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
      <h1 className="title">Sign Up</h1>
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="text" placeholder="First Name" />
      <input className="input" type="text" placeholder="Last Name" />
      <input className="input" type="text" placeholder="Role (e.g., Teacher)" />
      <input className="input" type="password" placeholder="Password" />
      <input className="input" type="password" placeholder="Confirm Password" />
      <button className="button">Register</button>
    </div>
  );
};

export default SignUp;