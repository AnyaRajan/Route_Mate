import React, { useState } from 'react';
import './Loginpage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="login-label">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="login-input"
        />
        <br />
        <label htmlFor="password" className="login-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">Sign in</button>
      </form>
      <p className="login-forgot-password">
        Forgot password? <a href="/forgot-password">Click here</a>
      </p>
      <p className="login-register">
        New to RouteMate? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;