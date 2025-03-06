// SignUpPage.jsx
import React, { useState } from 'react';

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

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle signup logic (e.g., call an API)
      console.log('Form submitted:', form);
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
          <button type="submit" className="w-full bg-[#ff4d94] text-white py-2 rounded transition hover:bg-[#e64387]">
            Sign Up
          </button>
        </form>
        {/* Social Signup Options */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-600">Or sign up with</p>
          <div className="flex mt-2 space-x-4">
            <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:scale-110 transition transform">
              {/* Replace with appropriate icon library or SVG */}
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:scale-110 transition transform">
              <i className="fab fa-google"></i>
            </button>
          </div>
          <p className="mt-4 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#ff4d94] hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;