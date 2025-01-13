import React from "react";
import { TextField, Button } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-6 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="mb-8 text-gray-300 text-center">
        Have questions, feedback, or need assistance? We’re here to help! Feel free to reach out to us through the contact details provided or send us a message using the form below. Your inquiries are important to us, and we’ll get back to you as soon as possible.
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info Section */}
        <div className="flex flex-col gap-10 lg:w-1/2">
          <div className="flex items-center gap-4">
            <div className="bg-white text-gray-800 p-3 rounded-full">
              <i className="fas fa-home"><HomeIcon /></i>
            </div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p>Aadampur Tarabganj Gonda</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white text-gray-800 p-3 rounded-full">
              <i className="fas fa-phone-alt"><LocalPhoneIcon /> </i>
            </div>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>85384094309</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white text-gray-800 p-3 rounded-full">
              <i className="fas fa-envelope"><ContactMailIcon /> </i>
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>contact@codelabs.com</p>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Send Message</h3>
          <form className="flex flex-col gap-6">
            <TextField
              label="Full Name"
              variant="outlined"
              size='small'
              fullWidth
              className="text-gray-800"
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              className="text-gray-800"
            />
            <TextField
              label="Type your Message..."
              variant="outlined"
              fullWidth
              multiline
              size="small"
              rows={3}
              className="text-gray-800"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              className="bg-teal-500"
            >
              Send
            </Button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
