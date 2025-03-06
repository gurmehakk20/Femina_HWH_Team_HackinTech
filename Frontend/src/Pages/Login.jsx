import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  // Live form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setApiError('');
      try {
        console.log("INDISE THE LOGIN PAGE")
        const response = await axios.post('http://localhost:5000/api/users/login', form);
        console.log('Login successful:', response);
        localStorage.setItem('token', response.data.token);

        navigate('/')

        // Handle success (e.g., redirect to dashboard, show success message)
      } catch (error) {
        setApiError(error.response?.data?.error || 'Something went wrong. Please try again.');
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-[#ff4d94] mb-4">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#ff4d94] transition"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#ff4d94] transition"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded transition ${isLoading ? 'bg-gray-400' : 'bg-[#ff4d94]'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </button>
          {apiError && <p className="text-red-500 text-center mt-4">{apiError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
