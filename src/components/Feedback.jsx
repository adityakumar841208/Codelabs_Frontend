import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { TextField } from '@mui/material';

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
        <div className='grid grid-cols-12 min-h-screen'>
            <div className="flex items-center justify-center min-h-screen text-white col-span-12">
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-primaryHover">Feedback</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <TextField
                                label='Name'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
                                className="text-white w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-primary"
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
                                placeholder="Enter your email"
                                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
                                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-primary"
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
                                InputLabelProps={{ style: { color: '#cbd5e1' } }}
                                InputProps={{ style: { color: '#f1f5f9', backgroundColor: 'rgb(55 65 81)' } }}
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message[0]}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded hover:bg-primaryHover transition"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
