import React, { useState } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('restaurantUser'));

    if (!savedUser) {
      alert("❌ No user found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert(`🧾 Login Successful!\nWelcome back, ${savedUser.name} 🍕`);
      navigate("/home");
    } else {
      alert("❌ Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-page d-flex justify-content-center align-items-center vh-100">
        <div className="login-box shadow-lg bg-dark p-5 rounded" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-white mb-4 text-center">🍽️ Welcome Back</h2>
          <form onSubmit={handleLogin}>
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
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-danger w-100 btn-lg">
              Login
            </button>
          </form>

          <p className="text-white text-center mt-3">
            Don't have an account?{' '}
            <a href="/register" className="text-warning">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}



