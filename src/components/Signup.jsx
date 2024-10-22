import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-gray-700 border border-primary rounded focus:outline-none focus:ring focus:ring-blue-500 text-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-gray-700 border border-primary rounded focus:outline-none focus:ring focus:ring-blue-500 text-gray-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-gray-700 border border-primary rounded focus:outline-none focus:ring focus:ring-blue-500 text-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-primary hover:bg-black transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500">
          Already have an account?{' '}
          <a href="#login" className="text-primary hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
