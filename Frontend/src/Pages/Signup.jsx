import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  
  const navigate = useNavigate(); // Initialize the navigate hook

  // Live form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'password') {
      const strength = evaluatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  // Password strength evaluator
  const evaluatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return 'Weak';
    if (strength === 3 || strength === 4) return 'Medium';
    if (strength === 5) return 'Strong';
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!form.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.password) {
      newErrors.password = 'Password is required.';
    } else if (evaluatePasswordStrength(form.password) === 'Weak') {
      newErrors.password = 'Password is too weak.';
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
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
        // Send the signup request
        const response = await axios.post('http://localhost:5000/api/users/signup', form);
  
        // Log the response to check the token
        console.log('Signup successful:', response.data);
  
        // Store the token in localStorage (or sessionStorage)
        localStorage.setItem('token', response.data.token);
        console.log(response.data.token)
  
        // Redirect to the login page
        // navigate('/login');
      } catch (error) {
        setApiError(error.response?.data?.error || 'Something went wrong. Please try again.');
        console.error('Signup error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-[#ff4d94] mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#ff4d94] transition"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#ff4d94] transition"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
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
            {form.password && (
              <p className="text-sm mt-1">
                Password Strength:{' '}
                <span
                  className={
                    passwordStrength === 'Weak'
                      ? 'text-red-500'
                      : passwordStrength === 'Medium'
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }
                >
                  {passwordStrength}
                </span>
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#ff4d94] transition"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded transition ${isLoading ? 'bg-gray-400' : 'bg-[#ff4d94]'}`}
            disabled={isLoading}

          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {apiError && <p className="text-red-500 text-center mt-4">{apiError}</p>}
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account? 
            <button
              onClick={() => navigate('/login')}
              className="text-[#ff4d94] font-semibold"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
