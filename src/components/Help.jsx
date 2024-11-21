import React from 'react';
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
  return (
    <>
        {/* Main Content Section */}
        <div className="col-span-12 md:col-span-9 p-6 bg-gray-900 text-gray-100 rounded-md m-14">
          <Typography variant="h4" className="mb-4 text-center text-primary">
            Help & Support
          </Typography>

          {/* FAQ Section */}
          <div className="mb-8">
            <Typography variant="h5" className="mb-4">Frequently Asked Questions</Typography>

            <Accordion className="mb-2" sx={{ backgroundColor: "rgb(55 65 81)", color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-800">
                <Typography>How do I reset my password?</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-gray-300">
                <Typography>
                  To reset your password, go to the login page and click "Forgot Password". Follow the instructions to reset it.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="mb-2" sx={{ backgroundColor: "rgb(55 65 81)", color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-800 text-gray-100">
                <Typography>How do I update my profile information?</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-gray-300">
                <Typography>
                  Navigate to your profile settings and click on "Edit Profile". Update the necessary information and save your changes.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="mb-2" sx={{ backgroundColor: "rgb(55 65 81)", color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-800 text-gray-100">
                <Typography>How can I contact customer support?</Typography>
              </AccordionSummary>
              <AccordionDetails className="text-gray-300">
                <Typography>
                  You can contact customer support by filling out the form below with your issue or question.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Custom Message Form */}
          <div>
            <Typography variant="h5" className="mb-4">Need more help?</Typography>

            <form className="flex flex-col space-y-4">
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                fullWidth
                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
              />
              <Button
                variant="contained"
                color="primary"
                className="hover:bg-primaryHover"
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
