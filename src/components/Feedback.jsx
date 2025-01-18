import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { Button, TextField, Typography, Container } from '@mui/material';

// Validation schema for feedback form
const feedbackSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long')
});

const FeedbackPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        const validationResult = feedbackSchema.safeParse(formData);

        if (!validationResult.success) {
            const errorMessages = validationResult.error.flatten().fieldErrors;
            setErrors(errorMessages);
        } else {
            try {
                setErrors({});
                const response = await axios.post('YOUR_BACKEND_URL', formData, {
                    withCredentials: true
                });
                alert(response.data);
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Error submitting feedback:', error);
            }
        }
    };

    return (
        <div className="bg-purple-100 flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-8 md:px-80 m-2 rounded-xl">
                <Typography variant="h5" align="center" className="text-purple-500 font-semibold mb-2">
                    We Value Your Feedback
                </Typography>
                {/* Contribution section */}
                <div className="my-8 text-start">
                    <Typography variant="h6" className="text-gray-700 mb-2">
                        Help Us Make CodeLabs Even Better!
                    </Typography>
                    <Typography variant="body1" className="text-gray-600 mb-4">
                        Your feedback is crucial in improving CodeLabs. Join us in making it the best platform for coders and developers. Share your thoughts, contribute to projects, and help us grow!
                    </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField
                            label="Name"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ style: { color: 'black' } }}
                            InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
                    </div>

                    <div className="mb-4">
                        <TextField
                            type="email"
                            label="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ style: { color: 'black' } }}
                            InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                    </div>

                    <div className="mb-4">
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
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message[0]}</p>}
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        sx={{
                            textTransform: "none",
                            boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.3)",
                        }}
                        className="hover:bg-blue-700"
                    >
                        Submit Feedback
                    </Button>
                </form>
        </div>
    );
};

export default FeedbackPage;
