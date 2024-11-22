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
        <div className="col-span-12 md:col-span-9 p-6 bg-slate-400 text-black rounded-md m-14">
          <Typography variant="h4" className="mb-6 text-center text-primary">
            Help & Support
          </Typography>

          {/* FAQ Section */}
          <div className="mb-8">
            <Typography variant="h5" className="mb-4">Frequently Asked Questions</Typography>

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
            <Typography variant="h5" className="mb-4">Need more help?</Typography>

            <form className="flex flex-col space-y-4">
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                fullWidth
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
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
