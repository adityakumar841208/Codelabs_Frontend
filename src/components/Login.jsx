import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIcon from '@mui/icons-material/Phone';
import { z } from "zod";

// Validation Schema using Zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address").optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  mobile: z.string().min(10, "Mobile number must be 10 digits").optional(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [isMobileLogin, setIsMobileLogin] = useState(false); // Toggle for login method
  const [formData, setFormData] = useState({ email: "", password: "", mobile: "" });
  const [errors, setErrors] = useState({ email: "", password: "", mobile: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = loginSchema.safeParse(formData);

    if (validationResult.success) {
      setErrors({ email: "", password: "", mobile: "" });
      navigate("/home"); // Redirect to home on successful login
    } else {
      // Set error messages based on validation errors
      const newErrors = {
        email: validationResult.error.formErrors.fieldErrors.email?.[0] || "",
        password: validationResult.error.formErrors.fieldErrors.password?.[0] || "",
        mobile: validationResult.error.formErrors.fieldErrors.mobile?.[0] || "",
      };
      setErrors(newErrors);
    }
  };

  return (
    <div
      className="flex flex-col border border-customDark border-spacing-2 m-20 rounded-xl overflow-hidden md:flex-row items-start justify-center h-vh bg-gray-100"
      style={{ boxShadow: "2px 2px 14px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Left Section */}
      <div className="w-full h-vh md:w-1/2 bg-gray-300 p-8">
        <div className="max-w-sm mx-auto">
          {/* Logo */}
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">CodeLabs</h1>
          <h2 className="text-xl font-semibold mb-4 text-center">Log in to your Account</h2>
          <p className="text-gray-600 text-center mb-6">Welcome back! Select a method to log in:</p>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Conditional Email or Mobile Input */}
            {!isMobileLogin ? (
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
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
                    boxShadow: "2px 4px 3px rgba(0, 0, 0, 0.1)",
                  },
                }}
              />
            ) : (
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                type="text"
                size="small"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {isMobileLogin ? <PhoneIcon /> : <EmailOutlinedIcon />}
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
                    boxShadow: "2px 4px 3px rgba(0, 0, 0, 0.1)",
                  },
                }}
              />
            )}

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
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
                  boxShadow: "2px 4px 3px rgba(0, 0, 0, 0.1)",
                },
              }}
            />

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
              onClick={() => navigate("/home")}
            >
              Log in
            </Button>
          </form>

          {/* Toggle Login Method */}
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outlined"
              className="w-full hover:text-white hover:bg-blue-600 hover:border-transparent"
              sx={{
                textTransform: "none",
                borderColor: "blue",
                color: "blue",
                boxShadow: "3px 5px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => setIsMobileLogin((prev) => !prev)}
            >
              {isMobileLogin ? "Login With Email" : "Login With Mobile"}
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
          <div
            className="bg-blue-500 border-blue-400 rounded-full w-52 h-52 mx-auto mb-4 overflow-hidden"
            style={{ boxShadow: "2px 3px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <img src="./coder2.jpg" alt="CodeLabs Community" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Build. Learn. Grow.</h2>
          <p className="text-gray-200 mb-4">
            Join the platform where developers thrive! Whether you're a beginner or an expert,
            CodeLabs empowers you to unlock your coding potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
