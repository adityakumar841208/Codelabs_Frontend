import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuizNavbar from './QuizNavbar';
import QuestionNavigation from './QuestionNavigation';
import QuestionArea from './QuestionArea';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const QuizLandingPage = () => {
    const location = useLocation();
    const name = location.state?.name || "Quiz";
    const [issubbmit, setIssubmit] = useState(false);

    const questions = [
        { id: 1, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correctAnswer: "Paris" },
        { id: 2, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
        { id: 3, question: "What is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Mars", "Venus"], correctAnswer: "Jupiter" },
        { id: 4, question: "Which programming language is used for web development?", options: ["JavaScript", "Python", "C++", "Ruby"], correctAnswer: "JavaScript" },
        { id: 5, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correctAnswer: "Paris" },
        { id: 6, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
        { id: 7, question: "What is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Mars", "Venus"], correctAnswer: "Jupiter" },
        { id: 8, question: "Which programming language is used for web development?", options: ["JavaScript", "Python", "C++", "Ruby"], correctAnswer: "JavaScript" },

    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [attemptedQuestions, setAttemptedQuestions] = useState(Array(questions.length).fill(false));
    const [isNavigationVisible, setIsNavigationVisible] = useState(false);
    const [results, setResults] = useState({ correct: 0, wrong: 0, unanswered: questions.length });

    const handleAnswer = (index, isAttempted) => {
        setAttemptedQuestions((prev) => {
            const updated = [...prev];
            updated[index] = isAttempted;
            return updated;
        });
        setCurrentQuestionIndex(index);
    };

    useEffect(() => {
        if (issubbmit) {
            let correct = 0;
            let wrong = 0;
            let unanswered = 0;

            for (let i = 0; i < questions.length; i++) {
                if (attemptedQuestions[i] === questions[i].correctAnswer) {
                    correct++;
                } else if (attemptedQuestions[i] !== false) {
                    wrong++;
                } else {
                    unanswered++;
                }
            }
            setResults({ correct, wrong, unanswered });
        }
    }, [issubbmit]);

    const chartData = {
        labels: ['Correct Answers', 'Wrong Answers', 'Not Attempted'],
        datasets: [
            {
                label: 'Quiz Results',
                data: [results.correct, results.wrong, results.unanswered],
                backgroundColor: ['#34d399', '#ef4444', '#fbbf24'], // Soft Green, Vibrant Red, Warm Yellow
                borderColor: ['#10b981', '#dc2626', '#f59e0b'],
            borderWidth: 1,
            },
        ],
    };

return !issubbmit ? (
    <div className="flex flex-col gap-4 bg-purple-200 rounded-lg shadow-lg p-4 w-full m-2">
        {/* Navbar */}
        <QuizNavbar quizName={name} />

        {/* Main Content */}
        <div className="flex flex-1 flex-col lg:flex-row">
            {/* Question Area */}
            <div className="flex-1 bg-purple-100 rounded-xl shadow-md p-4">
                {!isNavigationVisible ? (
                    <QuestionArea
                        question={questions[currentQuestionIndex]}
                        questionIndex={currentQuestionIndex}
                        isAttempted={attemptedQuestions[currentQuestionIndex]}
                        onAnswer={(isAttempted) => handleAnswer(currentQuestionIndex, isAttempted)}
                        onPrevious={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
                        onNext={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                        isFirstQuestion={currentQuestionIndex === 0}
                        isLastQuestion={currentQuestionIndex === questions.length - 1}
                        onSubmit={() => setIssubmit(true)}
                        isNavigation={(status) => setIsNavigationVisible(status)}
                    />
                ) : (
                    <QuestionNavigation
                        questions={questions}
                        attemptedQuestions={attemptedQuestions}
                        currentQuestionIndex={currentQuestionIndex}
                        onQuestionSelect={handleAnswer}
                        isNavigation={(status) => setIsNavigationVisible(status)}
                    />
                )}
            </div>
        </div>
    </div>
) : (
    <div className="flex flex-col gap-4 bg-purple-200 rounded-lg shadow-lg p-4 w-full m-2">
        <h1 className="text-center text-purple-800 font-bold text-2xl">Quiz Submitted</h1>
        <h2 className="text-lg text-center">Thank you for taking the quiz!</h2>

        {/* Pie Chart Section */}
        <div className="flex justify-center mt-4">
            <div className="w-full md:w-2/5">
                <Pie data={chartData} />
            </div>
        </div>

        {/* Summary Statistics */}
        <div className="text-center mt-4">
            <p className="text-lg text-gray-700">
                You answered <span className="font-bold text-green-600">{results.correct}</span> questions correctly and{' '}
                <span className="font-bold text-red-600">{results.wrong}</span> questions wrongly.
            </p>
        </div>

        {/* Questions and Answers */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Your Answers:</h3>
            <div className="space-y-4">
                {questions.map((question, index) => {
                    const userAnswer = attemptedQuestions[index];
                    const isCorrect = userAnswer === question.correctAnswer;

                    return (
                        <div key={question.id} className="p-4 border rounded-lg">
                            <h4 className="font-semibold text-purple-900">{index + 1}. {question.question}</h4>
                            <p className="mt-2 text-gray-700">
                                <span className="font-bold">Your Answer:</span> {userAnswer || 'Not Answered'}
                            </p>
                            <p className="mt-1 text-gray-700">
                                <span className="font-bold">Correct Answer:</span> {question.correctAnswer}
                            </p>
                            <p className={`mt-1 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                {isCorrect ? 'Correct' : 'Wrong'}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>

);
};

export default QuizLandingPage;
