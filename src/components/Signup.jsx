import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { z } from 'zod';

// Zod schema for validation
const emailSchema = z.object({
  emailOrPhone: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const phoneSchema = z.object({
  emailOrPhone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number, must be 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const SignUp = () => {
  const [isEmailSignUp, setIsEmailSignUp] = useState(true);
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isOTPScreen, setIsOTPScreen] = useState(false);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const validationSchema = isEmailSignUp ? emailSchema : phoneSchema;
    const result = validationSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors(errorMessages);
    } else {
      setErrors({});
      try {
        const response = await axios.post(`Backend url`, formData, {
          withCredentials: true,
        });
        alert(response.data);
        // if (response.data === 'User signed up successfully') {
        //   navigate('/')
        // }
        setFormData({
          emailOrPhone: '',
          password: '',
        })
      } catch (error) {
        console.error('Error signing in:', error);
      }
      setIsOTPScreen(true);
    }
  };

  const handleOTPChange = (e, index) => {
    if (e.target.value.length === 1 && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Sign Up</h2>

        {!isOTPScreen ? (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className={`px-4 py-2 ${isEmailSignUp ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'} rounded-lg`}
                onClick={() => setIsEmailSignUp(true)}
              >
                Sign up with Email
              </button>
              <button
                type="button"
                className={`px-4 py-2 ${!isEmailSignUp ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300'} rounded-lg`}
                onClick={() => setIsEmailSignUp(false)}
              >
                Sign up with Phone
              </button>
            </div>

            <div>
              <label htmlFor="emailOrPhone" className="block text-gray-300">
                {isEmailSignUp ? 'Email' : 'Phone Number'}
              </label>
              <input
                type={isEmailSignUp ? 'email' : 'tel'}
                name="emailOrPhone"
                id="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
                placeholder={isEmailSignUp ? 'Enter your email' : 'Enter your phone number'}
                className="w-full p-3 mt-1 bg-gray-700 border border-customBorder rounded focus:outline-none focus:ring focus:ring-primary text-gray-300"
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-sm">{errors.emailOrPhone[0]}</p>
              )}
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
                placeholder="Enter your password"
                className="w-full p-3 mt-1 bg-gray-700 border border-customBorder rounded focus:outline-none focus:ring focus:ring-primary text-gray-300"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password[0]}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-primary hover:bg-primaryHover transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl text-gray-300 text-center">Enter the OTP sent to your {isEmailSignUp ? 'email' : 'phone'}</h3>
            <div className="flex justify-center gap-2">
              {otpRefs.map((ref, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={ref}
                  className="w-12 h-12 text-center text-2xl bg-gray-700 border border-customBorder rounded focus:outline-none focus:ring focus:ring-primary text-white"
                  onChange={(e) => handleOTPChange(e, index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="w-full py-2 mt-4 text-white bg-primary hover:bg-primaryHover transition"
              onClick={() => console.log(otpRefs.map((item) => item.current.value))}
            >
              Submit OTP
            </button>
          </div>
        )}

        {!isOTPScreen && (
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to='/login' className="text-primary hover:text-primaryHover">Log in</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
