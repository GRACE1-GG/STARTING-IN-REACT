import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      alert('Password reset link sent to your email!');
      console.log('Password reset link sent to:', email);
    }, 1000);
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4caf50',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
