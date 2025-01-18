import React from 'react';
import { Button } from '@mui/material';

const QuestionNavigation = ({ questions, attemptedQuestions, currentQuestionIndex, onQuestionSelect, isNavigation }) => {
    // Calculate total, attempted, and unattempted questions
    const totalQuestions = questions.length;
    const attemptedCount = attemptedQuestions.filter(attempted => attempted).length;
    const unattemptedCount = totalQuestions - attemptedCount;

    return (
        <div className="">
            {/* Question and review */}
            <div className='flex items-center justify-end md:px-2'>
                <Button
                    variant="outlined"
                    className=' bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
                    onClick={() => isNavigation(false)}
                    sx={{
                        color: !isNavigation ? 'white' : '#333',
                        backgroundColor: !isNavigation ? 'blue' : '#fff',
                        '&:hover': {
                            backgroundColor: !isNavigation ? 'blue' : '#f3f4f6',
                        },
                    }}
                >
                    Back
                </Button>
            </div>
            <h2 className="text-lg font-bold mb-4">Questions</h2>

            {/* Display Total, Attempted, and Unattempted Questions */}
            <div className="mb-4 text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:justify-between">
                <p>Total Questions: {totalQuestions}</p>
                <p>Attempted: {attemptedCount}</p>
                <p>Unattempted: {unattemptedCount}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {questions.map((_, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        color={attemptedQuestions[index] ? "success" : "error"}
                        onClick={() => {
                            onQuestionSelect(index, attemptedQuestions[index]);
                            isNavigation(false);
                        }}
                        className={`rounded-full ${currentQuestionIndex === index ? 'ring-4 ring-purple-500' : ''}`}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default QuestionNavigation;
