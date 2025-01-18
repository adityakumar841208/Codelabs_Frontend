import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});

const Contact = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validation = schema.safeParse(data);
    if (!validation.success) {
      const formattedErrors = validation.error.format();
      setErrors({
        fullName: formattedErrors.fullName?._errors[0] || "",
        email: formattedErrors.email?._errors[0] || "",
        message: formattedErrors.message?._errors[0] || "",
      });
      return;
    }

    setErrors({});
    console.log("Form submitted successfully:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-purple-100 text-white min-h-vh lg:mx-10 md:mx-10 mx-4 py-8 px-6 mb-4 md:px-20 lg:px-40 rounded-xl">
      <h2 className="text-3xl font-bold mb-2 text-center text-purple-500">Contact Us</h2>
      <p className="mb-8 text-black text-center">
        Have questions, feedback, or need assistance? We’re here to help! Feel free to reach out to us through the contact details provided or send us a message using the form below. Your inquiries are important to us, and we’ll get back to you as soon as possible.
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 lg:w-1/2">
          <div className="flex items-center gap-4">
            <div className="bg-gray-900/70 text-white p-3 rounded-full">
              <HomeIcon />
            </div>
            <div>
              <h4 className="font-bold text-purple-500">Address</h4>
              <p className="text-black">Aadampur Tarabganj Gonda</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-900/70 text-white p-3 rounded-full">
              <LocalPhoneIcon />
            </div>
            <div>
              <h4 className="font-bold text-purple-500">Phone</h4>
              <p className="text-black">8538409430</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-900/70 text-white p-3 rounded-full">
              <ContactMailIcon />
            </div>
            <div>
              <h4 className="font-bold text-purple-500">Email</h4>
              <p className="text-black">contact@codelabs.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white/80 text-gray-800 rounded-lg p-6 shadow-md lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-purple-500">Send Message</h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
              className="text-gray-800"
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              className="text-gray-800"
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              name="message"
              label="Type your Message..."
              variant="outlined"
              fullWidth
              multiline
              size="small"
              rows={3}
              className="text-gray-800"
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
            <Button
              type="submit"
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
