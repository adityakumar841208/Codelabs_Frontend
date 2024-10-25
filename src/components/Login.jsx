import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';

// Zod Schemas for validation

const mobileLoginSchema = z.object({
  mobileOrUsername: z.string().min(3, 'Username must be at least 3 characters').or(
    z.string().regex(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
  ),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const emailLoginSchema = z.object({
  emailOrUsername: z.string().min(3, 'Username must be at least 3 characters').or(
    z.string().email('Invalid email address')
  ),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const LoginPage = () => {
  // const navigate = useNavigation();
  const [isMobileLogin, setIsMobileLogin] = useState(true);
  const [formData, setFormData] = useState({
    usernameOrContact: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Choose schema based on login type
    const validationSchema = isMobileLogin ? mobileLoginSchema : emailLoginSchema;
    const result = validationSchema.safeParse({
      [isMobileLogin ? 'mobileOrUsername' : 'emailOrUsername']: formData.usernameOrContact,
      password: formData.password,
    });


    // Data Submission to Backend
    if (!result.success) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors(errorMessages);
    } else {
      try {
        setErrors({});
        const response = await axios.post('Backend url', formData, {
          withCredentials: true,
        });
        alert(response.data);
        if (response.data === 'Successfully logged in') {
          // return navigate('/home')
        }

        setFormData({
          usernameOrContact: '',
          password: '',
        });

      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mb-20">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

        {/* Toggle Login Type */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${isMobileLogin ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setIsMobileLogin(true)}
          >
            Mobile
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${!isMobileLogin ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setIsMobileLogin(false)}
          >
            Email
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-white" htmlFor="usernameOrContact">
              {isMobileLogin ? 'Mobile Number or Username' : 'Email or Username'}
            </label>
            <input
              type="text"
              id="usernameOrContact"
              name="usernameOrContact"
              value={formData.usernameOrContact}
              onChange={handleChange}
              placeholder={isMobileLogin ? 'Enter mobile number or username' : 'Enter email or username'}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-primary"
            />
            {isMobileLogin && errors.mobileOrUsername && <p className="text-red-500 text-sm">{errors.mobileOrUsername[0]}</p>}
            {!isMobileLogin && errors.emailOrUsername && <p className="text-red-500 text-sm">{errors.emailOrUsername[0]}</p>}

          </div>

          <div className="mb-4">
            <label className="block mb-2 text-white" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-primary"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>

          <div className="flex justify-between mb-4">
            <Link to="#" className="text-primary hover:underline">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded hover:bg-primaryHover transition"
          >
            Login
          </button>

          <p className="text-center text-white mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
