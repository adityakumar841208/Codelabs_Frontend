import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();
    const languages = [
        {
          name: 'JavaScript',
          difficulty: 'Beginner',
          gradient: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
          description: 'JavaScript is a versatile language used for web development, making webpages interactive and dynamic.',
          topics: ['Variables', 'Functions', 'Loops', 'DOM Manipulation'],
        },
        {
          name: 'Python',
          difficulty: 'Intermediate',
          gradient: 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600',
          description: 'Python is a popular, high-level programming language known for its simplicity and readability.',
          topics: ['Data Structures', 'OOP', 'File Handling', 'Web Scraping'],
        },
        {
          name: 'Java',
          difficulty: 'Advanced',
          gradient: 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-600',
          description: 'Java is a robust, object-oriented language used in a variety of applications including Android development.',
          topics: ['Multithreading', 'Collections Framework', 'JVM Internals', 'Design Patterns'],
        },
        {
          name: 'C++',
          difficulty: 'Advanced',
          gradient: 'bg-gradient-to-r from-gray-700 via-black to-gray-900',
          description: 'C++ is a powerful, high-performance language used in system and application software development.',
          topics: ['Memory Management', 'Pointers', 'STL', 'Concurrency'],
        },
        {
          name: 'Ruby',
          difficulty: 'Intermediate',
          gradient: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500',
          description: 'Ruby is a dynamic, open-source programming language focused on simplicity and productivity.',
          topics: ['Syntax', 'OOP', 'Rails Framework', 'Web Development'],
        },
        {
          name: 'Go',
          difficulty: 'Intermediate',
          gradient: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-600',
          description: 'Go is a statically typed, compiled programming language designed for scalability and performance.',
          topics: ['Concurrency', 'Goroutines', 'Channels', 'Standard Library'],
        },
      ];

    const handleQuizStart = (name) => {
        console.log(name)

        // Redirect to Quiz Page
        navigate('/home/quiz/start' , { state: { name: name } });
    }


    return (
        <div className="w-full mx-2 py-4">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-purple-500">Programming Quiz</h2>
                <p className="text-lg text-gray-700 mt-4">
                    Test your programming skills by choosing a language and difficulty level. Get started and dive into a range of topics tailored to challenge you!
                </p>
            </div>

            {/* Card Container */}
            <div className="space-y-6">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className={`w-full h-auto flex flex-col justify-between text-white rounded-xl shadow-lg p-6 ${language.gradient}`}
                    >
                        <div className='flex items-center justify-between'>
                            <div className="">
                                <h3 className="text-2xl md:text-3xl font-bold">{language.name}</h3>
                                <p className="text-lg md:text-xl mt-2">{language.difficulty} Level</p>
                            </div>
                            <div>
                                {/* Action Button */}
                                <div className="text-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className="from-blue-500 via-purple-500 to-purple-700 bg-gradient-to-tr"
                                        onClick={()=>handleQuizStart(language.name)}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-100">
                            {language.description}
                        </p>
                        <div className="mt-4">
                            <h4 className="font-bold">Topics:</h4>
                            <ul className="text-sm text-gray-200">
                                {language.topics.map((topic, idx) => (
                                    <li key={idx} className="list-disc ml-5">{topic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
