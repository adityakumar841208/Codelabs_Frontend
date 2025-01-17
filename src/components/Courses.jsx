import React from 'react';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Courses = () => {
  const carouselPosts = [
    {
      id: 1,
      image: '/nodejs.jpg', // Replace with actual image path
      alt: 'Post 1',
    },
    {
      id: 2,
      image: '/kubernetes.jpg', // Replace with actual image path
      alt: 'Post 2',
    },
    {
      id: 3,
      image: '/java.jpg', // Replace with actual image path
      alt: 'Post 3',
    },
  ];


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
    <div className=" w-11/12 mx-auto">
      {/* Featured Course Section */}
      <div className="relative text-white rounded-xl overflow-hidden md:h-[60vh] h-auto">
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2000}
          arrows={false}
        >
          {carouselPosts.map((post) => (
            <div key={post.id} className="relative h-full rounded-xl">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Transparent Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/50 rounded-full cursor-pointer">
                <PlayCircleIcon
                  sx={{ fontSize: 60, color: 'white' }}
                  className="hover:opacity-80"
                />
              </div>
            </div>
          ))}
        </Slider>

      </div>

      {/* Codelabs Courses Section */}
      <h2 className="text-2xl font-bold mb-2 mt-8 cursor-pointer hover:underline">Explore Courses By CodeLabs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col"
          >
            <div className="bg-gray-700 h-full cover flex items-center justify-center rounded-lg mb-4">
              <img src="../web3.webp" alt="" className='cover h-full' />
            </div>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{course.description}</p>
            <Button
              variant="contained"
              className="mt-auto hover:bg-blue-800"
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

      {/* Simplilearn Courses Section */}
      <h2 className="text-2xl font-bold mb-2 mt-8 cursor-pointer hover:underline">Explore Courses By Simplilearn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col"
          >
            <div className="bg-gray-700 h-full cover flex items-center justify-center rounded-lg mb-4">
              <img src="../web3.webp" alt="" className='cover h-full' />
            </div>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{course.description}</p>
            <Button
              variant="contained"
              className="mt-auto hover:bg-blue-800"
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

      {/* Other Courses Section */}
      <h2 className="text-2xl font-bold mb-2 mt-8 cursor-pointer hover:underline">Explore Other Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col"
          >
            <div className="bg-gray-700 h-full cover flex items-center justify-center rounded-lg mb-4">
              <img src="../web3.webp" alt="" className='cover h-full' />
            </div>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{course.description}</p>
            <Button
              variant="contained"
              className="mt-auto hover:bg-blue-800"
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
