import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIcon from '@mui/icons-material/Phone';
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [term, setTerm] = useState(true)
  const [errors, setErrors] = useState({ email: "", password: "", mobileNo: "" });

  const emailSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const mobileSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    mobileNo: z.string().min(10, "Mobile number must be 10 digits").max(10, "Mobile number must be 10 digits"),
  });

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

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
    if (!term) {
      window.alert('please check the term ')
      return
    }

    const validationResult = isMobile
      ? mobileSchema.safeParse({ mobileNo, password })
      : emailSchema.safeParse({ email, password });

    if (!validationResult.success) {
      const updatedErrors = { email: "", password: "", mobileNo: "" };
      validationResult.error.errors.forEach((err) => {
        updatedErrors[err.path[0]] = err.message;
      });
      setErrors(updatedErrors);
    } else {
      setErrors({ email: "", password: "", mobileNo: "" });
      setIsOtp(true);
    }
  };

  const otpSubmit = () => {
    let otp;

    // Use forEach to append input values to otp string
    inputRef.current.forEach(item => {
      otp += item.value;
    });

    navigate('/home');

  };



  return (
    <div
      className="flex border border-customDark border-spacing-2 flex-col lg:mx-20 md:mx-20 m-4 rounded-xl overflow-hidden md:flex-row items-start justify-center h-vh bg-gray-100"
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
      <div className="w-full h-vh md:w-1/2 bg-gray-300 p-4">
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
                {Array(4)
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
                onClick={otpSubmit}
              >
                Verify OTP
              </Button>
            </form>
          ) : (
            <>
              <form className="space-y-4">
                {isMobile ?
                  <TextField
                    fullWidth
                    label="Mobile"
                    variant="outlined"
                    type="text"
                    size="small"
                    name="mobile"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    error={!!errors.mobileNo}
                    helperText={errors.mobileNo}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {isMobile ? <PhoneIcon /> : <EmailOutlinedIcon />}
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
                  /> :
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                }

                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  size="small"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: !password && ( // Render only if there's no text
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
                    <input
                      type="checkbox"
                      className="mr-2 border-gray-300"
                      checked={term}  // Bind the checkbox checked state to 'term'
                      onChange={(e) => setTerm(e.target.checked)}  // Update the state with the checkbox checked status
                    />
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
                    boxShadow: "3px 3px 12px rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Send Otp
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center justify-between mb-2 mt-4">
                <hr className="w-full border-t border-gray-500/50" />
                <span className="px-2 text-gray-500 text-sm">OR</span>
                <hr className="w-full border-t border-gray-500/50" />
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
                Already Have An Account ?{" "}
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
