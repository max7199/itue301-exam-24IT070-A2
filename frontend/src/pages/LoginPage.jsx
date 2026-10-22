import React, { useState } from "react";

function LoginPage({ onLoginSuccess }) {
  // Controlled input states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    // Inform user of successful simulated login
    setMessage(`Logged in successfully as ${email}!`);
    if (onLoginSuccess) {
      onLoginSuccess(email);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login to EventHub</h2>
        <p className="login-subtitle">Enter your credentials to access your tickets</p>

        {message && (
          <div
            className={`message-banner ${
              message.includes("Please") ? "error-banner" : "success-banner"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. student@charusat.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
