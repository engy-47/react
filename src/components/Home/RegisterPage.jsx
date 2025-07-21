import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("❌ Please fill in all fields.");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem('restaurantUser', JSON.stringify(userData));

    alert("✅ Registration Successful!\nWelcome to our food family 🍕");
    navigate("/login"); // يتم التوجيه بعد التسجيل
  };

  return (
    <div className="login-page">
      <div className="login-box shadow-lg p-4">
        <h2 className="text-white mb-4 text-center">📝 Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Register
          </button>
        </form>

        <p className="text-white text-center mt-3">
          Already have an account? <Link to="/login" className="text-warning">Login</Link>
        </p>
      </div>
    </div>
  );
}


