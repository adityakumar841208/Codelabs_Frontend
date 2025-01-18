import React, { useState } from 'react';
import { z } from 'zod';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Help = () => {
  const validationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data with Zod
    try {
      validationSchema.parse(formData);
      // If validation passes, handle the form submission logic (e.g., send message)
      setErrors({});
      window.alert('Form submitted successfully');
      console.log("Form submitted successfully:", formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {/* Main Content Section */}
      <div className="w-full p-6 bg-purple-100 text-black rounded-xl m-2">
        <Typography variant="h5" className="mb-6 text-center text-purple-500">
          Help & Support
        </Typography>

        {/* FAQ Section */}
        <div className="mb-10 mt-2">
          <Typography variant="h6" className="mb-4">Frequently Asked Questions</Typography>

          <Accordion className="mb-2" sx={{ backgroundColor: "white", color: 'black' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-800">
              <Typography>How do I reset my password?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-black">
              <Typography>
                To reset your password, go to the login page and click "Forgot Password". Follow the instructions to reset it.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-2" sx={{ backgroundColor: "white", color: 'black' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-800 text-black">
              <Typography>How do I update my profile information?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-black">
              <Typography>
                Navigate to your profile settings and click on "Edit Profile". Update the necessary information and save your changes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-2" sx={{ backgroundColor: "white", color: 'black' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-slate-400 text-black">
              <Typography>How can I contact customer support?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-black">
              <Typography>
                You can contact customer support by filling out the form below with your issue or question.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Custom Message Form */}
        <div>
          <Typography variant="h6" className="mb-4 mt-2">Need more help?</Typography>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button
              variant="contained"
              contained
              fullWidth
              color="primary"
              className="hover:bg-blue-800"
              sx={{
                textTransform: "none",
                boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.3)",
              }}
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Help;
