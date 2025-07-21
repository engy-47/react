import React, { useState } from 'react';
import './LoginPage.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    localStorage.setItem('restaurantUser', JSON.stringify(userData));

    alert("✅ Registration Successful!\nWelcome to our food family 🍕");
    window.location.href = "/login";
  };

  return (
    <div className="login-page">
      <div className="login-box shadow-lg">
        <h2 className="text-white mb-4 text-center">📝 Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <label className="text-white">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="text-white">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="text-white">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 btn-lg">
            Register
          </button>
        </form>
        <p className="text-white text-center mt-3">
          Already have an account?{' '}
          <a href="/login" className="text-warning">Login</a>
        </p>
      </div>
    </div>
  );
}

