import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIcon from '@mui/icons-material/Phone';
import { z } from "zod";

const SignUp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRef = useRef([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");

  // Zod validation schema
  const validateInput = (value) => {
    const schema = isMobile
      ? z.string().regex(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      : z.string().email("Invalid email address");
    const result = schema.safeParse(value);
    return result;
  };

  // Handle OTP Input Focus
  // Handle OTP Input Focus
  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    const isBackspace = e.key === 'Backspace';

    // Handle backspace key
    if (isBackspace && value === "") {
      // Move focus to the previous input on backspace if current input is empty
      const previousInput = inputRef.current[index - 1];
      if (previousInput) previousInput.focus();
    }
    // If a digit is entered, move focus to the next input
    else if (value.length === 1) {
      const nextInput = inputRef.current[index + 1];
      if (nextInput) nextInput.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = isMobile ? mobileNo : email;
    const validation = validateInput(inputValue);

    if (!validation.success) {
      setError(validation.error.errors[0].message);  // Set error message
    } else {
      setError("");  // Clear error message if valid
      setIsOtp(true); // Move to OTP screen
    }
  };

  return (
    <div
      className="flex border border-customDark border-spacing-2 flex-col m-20 rounded-xl overflow-hidden md:flex-row items-start justify-center h-vh bg-gray-100"
      style={{ boxShadow: "2px 2px 14px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Left Section */}
      <div
        className="hidden md:flex md:w-1/2 h-vh bg-blue-600 text-white items-center justify-center"
        style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-center p-8">
          <div
            className="bg-blue-500 border-blue-400 rounded-full w-52 h-52 mx-auto mb-4 overflow-hidden"
            style={{ boxShadow: "2px 3px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <img src="./coder2.jpg" alt="Welcome to CodeLabs" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Join the Future of Coding</h2>
          <p className="text-gray-200 mb-4">
            Discover a world where learning and collaboration come together. At
            CodeLabs, we help you transform your passion for coding into
            expertise.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-vh md:w-1/2 bg-gray-300 p-8">
        <div className="max-w-sm mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
            CodeLabs
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Sign Up to your Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Select a method to Sign Up:
          </p>

          {/* Sign Up Form */}
          {isOtp ? (
            <form>
              <h3 className="text-center mb-4">Enter OTP</h3>
              <div className="flex justify-center gap-4 mb-6">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center border border-gray-300 rounded"
                      ref={(el) => (inputRef.current[index] = el)}
                      onChange={(e) => handleOtpInputChange(e, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                    />
                  ))}
              </div>
              <Button
                type="button"
                variant="contained"
                fullWidth
                className="bg-blue-600 text-white hover:bg-blue-700 mt-4"
              >
                Verify OTP
              </Button>
            </form>
          ) : (
            <>
              <form className="space-y-4">
                <TextField
                  fullWidth
                  label={isMobile ? "Mobile" : "Email"}
                  variant="outlined"
                  type={isMobile ? "tel" : "email"}
                  value={isMobile ? mobileNo : email}
                  size="small"
                  onChange={(e) =>
                    isMobile ? setMobileNo(e.target.value) : setEmail(e.target.value)
                  }
                  error={!!error} // Show error if there's a validation issue
                  helperText={error} // Display the error message
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {isMobile ? <PhoneIcon />: <EmailOutlinedIcon />}
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
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
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
                <div className="text-sm text-gray-700">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2 border-gray-300" />
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                <Button
                  type="button"
                  variant="contained"
                  fullWidth
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  sx={{
                    textTransform: "none",
                    boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={handleSubmit}
                >
                  Send Otp
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center justify-between mb-4 mt-7">
                <hr className="w-full border-t border-gray-500" />
                <span className="px-2 text-customBorder text-sm">OR</span>
                <hr className="w-full border-t border-gray-500" />
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
                  onClick={() => setIsMobile(!isMobile)}
                >
                  Sign Up With {isMobile ? "Email" : "Mobile"}
                </Button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Already Logged In ?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default SignUp;
