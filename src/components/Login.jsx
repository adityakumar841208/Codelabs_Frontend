import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col border border-customDark border-spacing-2 m-20 rounded-xl overflow-hidden md:flex-row items-start justify-center h-vh bg-gray-100"
      style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Left Section */}
      <div
        className="w-full h-vh md:w-1/2 bg-gray-300 p-8"
      >
        <div
          className="max-w-sm mx-auto"
        >
          {/* Logo */}
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
            CodeLabs
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Log in to your Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Welcome back! Select a method to log in:
          </p>

          {/* Login Form */}
          <form className="space-y-4">
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "blue",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                  boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
                },
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "blue",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                  boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.2)",
                },
              }}
            />

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 text-blue-700 bg-blue-700 border-gray-300" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="bg-blue-600 text-white hover:bg-blue-700"
              sx={{
                textTransform: "none",
                boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Log in
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mb-4 mt-7">
            <hr className="w-full border-t border-customBorder" />
            <span className="px-2 text-customBorder text-sm">OR</span>
            <hr className="w-full border-t border-customBorder" />
          </div>

          {/* Continue with Mobile */}
          <div className="flex justify-between gap-4 mb-6">
            <Button
              variant="outlined"
              className="w-full hover:text-white hover:bg-blue-600 hover:border-transparent"
              sx={{
                textTransform: "none",
                borderColor: "blue",
                color: "blue",
                boxShadow: "3px 5px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              Login With Mobile
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="hidden md:flex md:w-1/2 h-vh bg-blue-600 text-white items-center justify-center"
        style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-center p-8">
          {/* Image Section */}
          <div
            className="bg-blue-500 border-blue-400 rounded-full w-52 h-52 mx-auto mb-4 overflow-hidden"
            style={{ boxShadow: "2px 3px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <img src="./coder2.jpg" alt="CodeLabs Community" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            Build. Learn. Grow.
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 mb-4">
            Join the platform where developers thrive! Whether you're a beginner or an expert,
            CodeLabs empowers you to unlock your coding potential.
          </p>

          {/* Highlights
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>⚡ Access personalized AI-driven assistance.</li>
            <li>🌍 Collaborate with a global developer community.</li>
            <li>📚 Master coding with curated courses and challenges.</li>
            <li>🚀 Share projects and showcase your skills.</li>
          </ul> */}
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
