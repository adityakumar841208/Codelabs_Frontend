import React, { useState } from 'react';
import { Button } from '@mui/material';

const QuestionArea = ({
    question,
    questionIndex,
    onAnswer,
    onPrevious,
    onNext,
    isFirstQuestion,
    isLastQuestion,
    onSubmit,
    isNavigation,
    isAttempted,
}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onAnswer(option);
    };

    return (
        <div className="flex-1 flex flex-col justify-between">

            {/* Question and review */}
            <div className='flex items-center justify-end md:px-2'>
                <Button
                    variant="outlined"
                    className='md:px-4 md:py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
                    onClick={() => isNavigation(true)}
                    sx={{
                        color: !isNavigation ? 'white' : '#333',
                        backgroundColor: !isNavigation ? 'blue' : '#fff',
                        '&:hover': {
                            backgroundColor: !isNavigation ? 'blue' : '#f3f4f6',
                        },
                    }}
                >
                    Review
                </Button>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4">
                    Question {questionIndex + 1}: {question.question}
                </h2>
                <div className="space-y-4">
                    {question.options.map((option, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            fullWidth
                            onClick={() => handleOptionClick(option)}
                            className={`${selectedOption === option ? 'bg-purple-600 text-white' : 'bg-white'
                                }`}
                            sx={{
                                border: '1px solid #ddd',
                                boxShadow: selectedOption === option || isAttempted === option ? '0 2px 3px rgba(0, 0, 0, 0.2)' : 'none',
                                backgroundColor: selectedOption === option || isAttempted === option ? '#3f51b5' : 'white',
                                color: selectedOption === option || isAttempted === option ? 'white' : '#3f51b5',
                                borderRadius: '8px',
                            }}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <Button
                    variant="outlined"
                    onClick={onPrevious}
                    disabled={isFirstQuestion}
                    sx={{
                        color: isFirstQuestion ? '#aaa' : '#3f51b5',
                        borderColor: isFirstQuestion ? '#ddd' : '#3f51b5',
                        cursor: isFirstQuestion ? 'not-allowed' : 'pointer',
                    }}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    onClick={isLastQuestion ? onSubmit : onNext}
                    sx={{
                        backgroundColor: isLastQuestion ? 'green' : '#3f51b5',
                        color: isLastQuestion ? 'white' : '#fff',
                    }}
                >
                    {isLastQuestion ? 'Submit' : 'Next'}
                </Button>
            </div>
        </div>
    );
};

export default QuestionArea;
