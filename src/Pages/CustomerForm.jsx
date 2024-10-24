import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const CustomForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static username and password validation
    if (username === 'admin' && password === 'password123') {
      setError('');
      setSuccess(true); // Display success message'
      setTimeout(() => {
        navigate('/dashboard4me')
      },4000)
      
    } else {
      setError('Invalid username or password');
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-gradient">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl text-center font-bold text-customPurple mb-6">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Login successful!</p>}

        <div className="mb-4">
          <label className="block text-customPurple text-sm font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
          />
        </div>

        <div className="mb-6">
          <label className="block text-customPurple text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-customPurple text-primary font-semibold py-2 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
