import React, { useEffect, useState } from 'react';

const QuizNavbar = ({ quizName }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="bg-purple-500 text-white p-4 flex justify-between items-center rounded-xl">
            <h1 className="text-lg font-bold">{quizName} Quiz</h1>
            <p className="text-sm font-bold">Time Left: {formatTime(timeLeft)}</p>
        </div>
    );
};

export default QuizNavbar;
