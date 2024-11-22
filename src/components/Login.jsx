import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex flex-wrap px-6 items-center justify-around min-h-screen -mt-8">
      {/* Image Section */}
      <div className="img w-full md:w-1/3 mb-6 md:mb-0">
        <img src="../comp.webp" alt="Signup illustration" className="w-full h-auto" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center px-4 w-full md:w-1/2">
        {/* Signup Container */}
        <div className="bg-slate-400 shadow-md rounded-lg p-6 w-full max-w-sm">
          {/* Title */}
          <h1 className="text-center text-lg font-bold mb-7">Log in</h1>

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
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mb-4 mt-7">
            <hr className="w-full border-t border-customBorder" />
            <span className="px-2 text-black text-sm">OR</span>
            <hr className="w-full border-t border-customBorder" />
          </div>

          {/* Email Login */}
          <Button
            variant="contained"
            className="w-full hover:bg-primaryHover text-white py-2 mb-4"
            sx={{ borderRadius: "20px" }}
          >
            Login with Email
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm w-full max-w-sm rounded-lg p-4 bg-slate-400">
          New User ?{" "}
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
