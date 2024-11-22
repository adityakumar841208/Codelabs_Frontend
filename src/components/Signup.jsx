import React from "react";
import {Link  } from "react-router-dom";
import { TextField, Button, InputAdornment } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityIcon from "@mui/icons-material/Visibility";


const Signup = () => {
  return (
    <div className="flex flex-nowrap px-11 items-center justify-around">

      <div className="flex flex-col items-center justify-center px-6 min-h-screen -mt-9">
        {/* Signup Container */}
        <div className="bg-slate-400 shadow-md rounded-lg p-6 w-full max-w-sm">
          {/* Title */}
          <h1 className="text-center text-lg font-bold mb-7">
            Sign Up
          </h1>

          {/* Form */}
          <form className="flex flex-col space-y-3">
          <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { borderRadius: "20px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { borderRadius: "20px" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { borderRadius: "20px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { borderRadius: "20px" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className="w-full bg-primary hover:bg-primaryHover text-white py-2 mt-3"
              sx={{ borderRadius: "20px" }}
            >
              Sign up
            </Button>
          </form>

          {/* Terms and Policies */}
          <p className="text-center text-black text-sm mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-primary">
              Terms
            </a>
            ,{" "}
            <a href="#" className="text-primary">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary">
              Cookies Policy
            </a>
            .
          </p>

          {/* Divider */}
          <div className="flex items-center justify-between mb-4 mt-7">
            <hr className="w-full border-t border-customBorder" />
            <span className="px-2 text-black text-sm">OR</span>
            <hr className="w-full border-t border-customBorder" />
          </div>

          {/* Facebook Login */}
          <Button
            variant="contained"
            className="w-full hover:bg-primaryHover text-white py-2 mb-4"
            sx={{ borderRadius: '20px' }}
          >
            Sign Up with Email
          </Button>

        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm w-full max-w-sm rounded-lg p-4 bg-slate-400">
          Have an account?{" "}
          <Link to="/login" className="text-primary">
            Log in
          </Link>
        </div>
      </div>

      {/* second section  */}
      <div className="img w-1/3 ">
        <img src="../comp.webp" alt="" />
      </div>
    </div>
  );
};

export default Signup;

