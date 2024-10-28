import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Help = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto bg-gray-900 m-20 rounded-md">
            <Typography variant="h4" className="mb-4 text-primary text-center">Help & Support</Typography>

            {/* FAQ Section */}
            <div className="mb-8 mt-4">
                <Typography variant="h5" className="mb-4 mt-4">Frequently Asked Questions</Typography>

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
            <Typography variant="h5" className="mb-4">Need more help?</Typography>

            <form className="flex flex-col space-y-4">
                <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: { color: '#cbd5e1' } }} // Tailwind's text-gray-400
                    InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }} // Tailwind's bg-gray-700 and text-gray-200
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
                <Button variant="contained" color="primary" className="hover:bg-primaryHover" type="submit">
                    Send Message
                </Button>
            </form>
        </div>
    );
}

export default Help;
