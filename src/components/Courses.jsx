import React from 'react';
import { Button } from '@mui/material';

const Courses = () => {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the basics of React, including components, props, and state.',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Dive deep into JavaScript concepts like closures, promises, and async/await.',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Learn principles of design to create stunning user interfaces.',
    },
  ];

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* Featured Course Section */}
      <div className="relative bg-gray-800 text-white rounded-xl overflow-hidden h-[60vh] mb-10">
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-gradient-to-r from-black via-gray-950 to-transparent">
          <h1 className="text-4xl font-bold mb-4">Master React Development</h1>
          <p className="text-lg mb-6">
            A comprehensive course on React to build dynamic and powerful web applications.
          </p>
          <Button
            variant="contained"
            size="large"
            className="hover:bg-primaryHover"
          >
            Get Started
          </Button>
        </div>
        <img
          src="../comp.webp" // Replace with your featured course image
          alt="Featured Course"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Other Courses Section */}
      <h2 className="text-2xl font-bold mb-6">Explore Our Other Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col"
          >
            <div className="bg-gray-700 h-40 cover flex items-center justify-center rounded-lg mb-4">
              <img src="../comp.webp" alt="" className='cover h-36' />
            </div>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{course.description}</p>
            <Button
              variant="contained"
              className="mt-auto hover:bg-primaryHover"
              sx={{
                color: 'white',
                marginTop: '1rem',

              }}
            >
              Enroll Now
            </Button>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Courses;
